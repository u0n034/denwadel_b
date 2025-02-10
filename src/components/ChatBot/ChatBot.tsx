import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, ChevronDown } from 'lucide-react';
import { getDatabase, ref, push, onValue, set, get } from 'firebase/database';
import { database } from '../../lib/firebase';

// 営業時間の判定
const isBusinessHours = (): boolean => {
  const now = new Date();
  const hours = now.getHours();
  const day = now.getDay();
  
  // 土日は営業時間外
  if (day === 0 || day === 6) return false;
  
  // 平日9:00-18:00を営業時間とする
  return hours >= 9 && hours < 18;
};

interface Message {
  id: string;
  content: string;
  timestamp: string;
  isUser: boolean;
  sender: string;
}

interface ChatSession {
  id: string;
  messages: Message[];
  status: string;
  operator?: {
    email: string;
    isTyping?: boolean;
    lastTypingUpdate?: string;
  };
}

export const ChatBot = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [operatorTyping, setOperatorTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(isBusinessHours());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);

  // 営業時間の監視
  useEffect(() => {
    const checkBusinessHours = () => {
      setIsOnline(isBusinessHours());
    };

    // 1分ごとに営業時間をチェック
    const interval = setInterval(checkBusinessHours, 60000);
    return () => clearInterval(interval);
  }, []);

  // セッションの初期化
  useEffect(() => {
    const newSessionId = `chat_${Date.now()}`;
    setSessionId(newSessionId);

    // メッセージの監視を開始
    const messagesRef = ref(database, `chats/${newSessionId}/messages`);
    const sessionRef = ref(database, `chats/${newSessionId}`);

    // 初期メッセージを送信
    const sendInitialMessage = async () => {
      const initialMessage = {
        id: Date.now().toString(),
        content: isOnline 
          ? 'ご質問やご相談がございましたら、お気軽にメッセージをお送りください！'
          : '現在営業時間外です。営業時間は平日9:00-18:00となります。メッセージは受け付けておりますが、返信は翌営業日以降となりますことご了承ください。',
        timestamp: new Date().toISOString(),
        isUser: false,
        sender: 'システム'
      };

      try {
        // セッション情報を初期化
        await set(sessionRef, {
          id: newSessionId,
          status: 'waiting',
          lastMessage: initialMessage.content,
          updatedAt: initialMessage.timestamp,
          userInfo: {
            name: 'ゲスト'
          }
        });

        // 初期メッセージを追加
        await push(messagesRef, initialMessage);
      } catch (error) {
        console.error('Error sending initial message:', error);
      }
    };

    sendInitialMessage();

    const unsubscribeMessages = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.values(data) as Message[];
        setMessages(messageList.sort((a, b) => 
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        ));
      }
    });

    // オペレーターの入力状態を監視
    const unsubscribeSession = onValue(sessionRef, (snapshot) => {
      const data = snapshot.val() as ChatSession;
      if (data?.operator?.isTyping) {
        const lastUpdate = new Date(data.operator.lastTypingUpdate || '');
        const now = new Date();
        // 最後の更新から3秒以上経過している場合は入力終了とみなす
        const isStillTyping = now.getTime() - lastUpdate.getTime() < 3000;
        setOperatorTyping(isStillTyping);
      } else {
        setOperatorTyping(false);
      }
    });

    return () => {
      unsubscribeMessages();
      unsubscribeSession();
    };
  }, []);

  // メッセージが追加されたらスクロール
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // メッセージ送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || !sessionId) return;

    const timestamp = new Date().toISOString();
    const newMessage = {
      id: Date.now().toString(),
      content: userInput,
      timestamp: timestamp,
      isUser: true,
      sender: 'ユーザー'
    };

    // メッセージをデータベースに保存
    const messagesRef = ref(database, `chats/${sessionId}/messages`);
    const sessionRef = ref(database, `chats/${sessionId}`);

    try {
      console.log('Sending message:', newMessage);
      
      // 現在のセッション情報を取得
      const snapshot = await get(sessionRef);
      const currentData = snapshot.val() || {};
      const currentStatus = currentData.status || 'waiting';

      // セッション情報を更新（既存のデータを保持）
      await set(sessionRef, {
        ...currentData,
        id: sessionId,
        status: currentStatus,
        lastMessage: userInput,
        updatedAt: timestamp,
        hasUserMessage: true,
        userInfo: {
          ...(currentData.userInfo || {}),
          name: 'ゲスト'
        }
      });
      console.log('Session updated');

      // メッセージを追加
      const messageResult = await push(messagesRef, newMessage);
      console.log('Message sent:', messageResult.key);

      setUserInput('');

      // セッションが'waiting'の場合のみ自動応答を送信
      if (currentStatus === 'waiting') {
        setTimeout(async () => {
          const autoResponse = {
            id: Date.now().toString(),
            content: '担当者が確認次第、返信させていただきます。',
            timestamp: new Date().toISOString(),
            isUser: false,
            sender: 'システム'
          };
          await push(messagesRef, autoResponse);
          console.log('Auto response sent');
        }, 1000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed left-8 bottom-8 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all z-40 group"
      >
        <div className="relative">
          <img
            src="/images/operator.png"
            alt="チャットを開く"
            className="w-12 h-12 rounded-full ring-2 ring-blue-600 group-hover:ring-blue-700"
          />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed left-8 bottom-8 w-[380px] bg-white rounded-lg shadow-xl z-40">
      {/* ヘッダー */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/images/operator.png"
            alt="オペレーター"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div>
            <h3 className="font-bold">メッセージでの相談も可能です！</h3>
            <span className="text-sm flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-gray-400'}`}></span>
              {isOnline ? 'オンライン' : '営業時間外'}
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsMinimized(true)}
          className="hover:bg-blue-700 p-1 rounded"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* メッセージエリア */}
      <div className="h-[400px] overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} items-end gap-2`}
          >
            {!message.isUser && message.sender !== 'システム' && (
              <img
                src="/images/operator.png"
                alt="オペレーター"
                className="w-8 h-8 rounded-full"
              />
            )}
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.isUser
                  ? 'bg-blue-600 text-white rounded-tr-none'
                  : message.sender === 'システム'
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-gray-100 text-gray-800 rounded-tl-none'
              }`}
            >
              {message.sender !== 'システム' && (
                <div className="text-xs opacity-75 mb-1">
                  {message.sender}
                </div>
              )}
              {message.content}
            </div>
          </div>
        ))}
        {operatorTyping && (
          <div className="flex justify-start items-end gap-2">
            <img
              src="/images/operator.png"
              alt="オペレーター"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-tl-none">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* 入力エリア */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="メッセージを入力..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}; 