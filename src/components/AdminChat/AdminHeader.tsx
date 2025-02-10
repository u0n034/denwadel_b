import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const AdminHeader = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin/login');
    } catch (error) {
      console.error('ログアウトに失敗しました', error);
    }
  };

  return (
    <header className="bg-yellow-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold">
              Chat Support Admin
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link to="/admin/chat" className="hover:text-yellow-200">
                チャット管理
              </Link>
              <Link to="/admin/settings" className="hover:text-yellow-200">
                設定
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">
              管理者：{currentUser?.displayName || 'Unknown'}
            </span>
            <button
              onClick={handleLogout}
              className="bg-yellow-600 px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
            >
              ログアウト
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}; 