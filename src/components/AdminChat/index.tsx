import React, { useState, useEffect, useRef } from 'react';
import { ref, onValue, push, set, serverTimestamp, get } from 'firebase/database';
import { database } from '../../lib/firebase';
import { Send } from 'lucide-react';
import { AdminHeader } from './AdminHeader';
import { useAuth } from '../../contexts/AuthContext';

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
  lastMessage: string | null;
  lastUpdate: string;
  status: 'active' | 'waiting' | 'closed';
  hasUserMessage: boolean;
  operator: {
    email: string;
    joinedAt: string;
    isTyping: boolean;
    lastTypingUpdate: string;
  } | null;
  userInfo: {
    name?: string;
    email?: string;
    url?: string;
  };
}

export const AdminChat = () => {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'waiting' | 'closed'>('all');
  const { currentUser } = useAuth();

  // セッション一覧の監視
  useEffect(() => {
    console.log('Starting to watch sessions...');
    const chatsRef = ref(database, 'chats');
    
    const unsubscribe = onValue(chatsRef, (snapshot) => {
      console.log('Snapshot exists:', snapshot.exists());
      const data = snapshot.val();
      console.log('Received data:', data);
      if (!data) {
        console.log('No data available');
        return;
      }

      try {
        const sessionList = Object.entries(data)
          .map(([id, session]: [string, any]) => {
            console.log(`Processing session ${id}:`, session);
            
            // messagesが存在しない場合は空配列を返す
            let messages: Message[] = [];
            let hasUserMessage = false;
            if (session.messages) {
              messages = Object.entries(session.messages).map(([msgId, msg]: [string, any]): Message => {
                if (msg.isUser) {
                  hasUserMessage = true;
                }
                return {
                  id: msgId,
                  content: msg.content || '',
                  timestamp: msg.timestamp || new Date().toISOString(),
                  isUser: msg.isUser || false,
                  sender: msg.sender || 'Unknown'
                };
              });
            }

            return {
              id,
              messages,
              hasUserMessage,
              lastMessage: session.lastMessage || null,
              lastUpdate: session.updatedAt || new Date().toISOString(),
              status: session.status || 'waiting',
              operator: session.operator || null,
              userInfo: session.userInfo || {}
            } as ChatSession;
          })
          // ユーザーメッセージがあるセッションのみをフィルタリング
          .filter(session => session.hasUserMessage);

        console.log('Final processed sessions:', sessionList);
        setSessions(
          sessionList
            .filter(session => filter === 'all' || session.status === filter)
            .sort((a, b) => new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime())
        );
      } catch (error) {
        console.error('Error processing sessions:', error);
      }
    });

    return () => unsubscribe();
  }, [filter]);

  // 選択されたセッションのメッセージを監視
  useEffect(() => {
    if (!selectedSession) return;

    const messagesRef = ref(database, `chats/${selectedSession}/messages`);
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;

      const messageList = Object.values(data) as Message[];
      setMessages(messageList.sort((a, b) => 
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      ));
    });

    return () => unsubscribe();
  }, [selectedSession]);

  // セッションの担当者になる
  const handleTakeSession = async (sessionId: string) => {
    if (!currentUser?.displayName) return;

    const sessionRef = ref(database, `chats/${sessionId}`);
    const snapshot = await get(sessionRef);
    const currentData = snapshot.val() || {};

    await set(sessionRef, {
      ...currentData,
      status: 'active',
      operator: {
        email: currentUser.displayName,
        joinedAt: new Date().toISOString()
      },
      updatedAt: new Date().toISOString()
    });

    setSelectedSession(sessionId);
  };

  // セッションを終了する
  const handleCloseSession = async (sessionId: string) => {
    const sessionRef = ref(database, `chats/${sessionId}`);
    const snapshot = await get(sessionRef);
    const currentData = snapshot.val() || {};

    await set(sessionRef, {
      ...currentData,
      status: 'closed',
      updatedAt: new Date().toISOString()
    });
  };

  // メッセージ送信
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !selectedSession || !currentUser?.displayName) return;

    const timestamp = new Date().toISOString();
    const newMessage: Message = {
      id: Date.now().toString(),
      content: input,
      timestamp: timestamp,
      isUser: false,
      sender: currentUser.displayName
    };

    try {
      console.log('Sending admin message:', newMessage);
      const messagesRef = ref(database, `chats/${selectedSession}/messages`);
      const sessionRef = ref(database, `chats/${selectedSession}`);

      // 現在のセッション情報を取得
      const snapshot = await get(sessionRef);
      const currentData = snapshot.val() || {};

      // セッション情報を更新（既存のデータを保持）
      await set(sessionRef, {
        ...currentData,
        status: 'active',
        lastMessage: input,
        updatedAt: timestamp,
        operator: {
          email: currentUser.displayName,
          joinedAt: currentData.operator?.joinedAt || timestamp
        }
      });

      // メッセージを追加
      await push(messagesRef, newMessage);
      console.log('Admin message sent');

      setInput('');
    } catch (error) {
      console.error('Error sending admin message:', error);
    }
  };

  // 入力状態の更新
  const updateTypingStatus = async (isTyping: boolean) => {
    if (!selectedSession || !currentUser?.displayName) return;

    const sessionRef = ref(database, `chats/${selectedSession}`);
    const snapshot = await get(sessionRef);
    const currentData = snapshot.val() || {};

    await set(sessionRef, {
      ...currentData,
      operator: {
        ...(currentData.operator || {}),
        email: currentUser.displayName,
        isTyping,
        lastTypingUpdate: new Date().toISOString()
      }
    });
  };

  // 入力状態の監視
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    updateTypingStatus(true);

    // 入力が1秒間ない場合、入力終了とみなす
    if (typingTimer.current) {
      clearTimeout(typingTimer.current);
    }
    typingTimer.current = setTimeout(() => {
      updateTypingStatus(false);
    }, 1000);
  };

  // タイマーの参照を保持
  const typingTimer = useRef<NodeJS.Timeout>();

  // コンポーネントのアンマウント時にクリーンアップ
  useEffect(() => {
    return () => {
      if (typingTimer.current) {
        clearTimeout(typingTimer.current);
      }
      if (selectedSession) {
        updateTypingStatus(false);
      }
    };
  }, [selectedSession]);

  return (
    <div className="flex flex-col h-screen">
      <AdminHeader />
      <div className="flex flex-1 overflow-hidden">
        {/* セッション一覧 */}
        <div className="w-1/3 border-r overflow-y-auto bg-gray-50">
          <div className="p-4">
            <div className="mb-4">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="all">すべてのチャット</option>
                <option value="waiting">待機中</option>
                <option value="active">対応中</option>
                <option value="closed">終了</option>
              </select>
            </div>
            <div className="space-y-2">
              {sessions.map(session => (
                <div
                  key={session.id}
                  onClick={() => setSelectedSession(session.id)}
                  className={`w-full p-4 text-left rounded-lg transition-colors cursor-pointer ${
                    selectedSession === session.id
                      ? 'bg-yellow-100'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">
                      {session.userInfo?.name || 'ゲスト'}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      session.status === 'waiting' ? 'bg-red-100 text-red-800' :
                      session.status === 'active' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {session.status === 'waiting' ? '待機中' :
                       session.status === 'active' ? '対応中' : '終了'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {session.lastMessage || 'メッセージなし'}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray-500">
                      {new Date(session.lastUpdate).toLocaleString()}
                    </p>
                    {session.status === 'waiting' ? (
                      <button
                        onClick={() => handleTakeSession(session.id)}
                        className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      >
                        対応する
                      </button>
                    ) : session.status === 'active' && session.operator?.email === currentUser?.displayName ? (
                      <button
                        onClick={() => handleCloseSession(session.id)}
                        className="text-xs bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                      >
                        終了する
                      </button>
                    ) : null}
                  </div>
                  {session.operator && (
                    <p className="text-xs text-gray-500 mt-1">
                      担当: {session.operator.email}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* チャット画面 */}
        <div className="flex-1 flex flex-col">
          {selectedSession ? (
            <>
              {/* メッセージエリア */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isUser
                            ? 'bg-gray-100'
                            : 'bg-yellow-500 text-white'
                        }`}
                      >
                        <div className="text-xs opacity-75 mb-1">
                          {message.sender}
                        </div>
                        {message.content}
                        <div className="text-xs opacity-75 mt-1">
                          {new Date(message.timestamp).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 入力エリア */}
              <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="メッセージを入力..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                  />
                  <button
                    type="submit"
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              左のリストからチャットを選択してください
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 