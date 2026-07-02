import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { Send, LogIn, MessageCircle } from 'lucide-react';
import './index.css';

// Connect to the backend server
const socket = io('http://localhost:3001');

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off('receive_message');
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsLoggedIn(true);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      const messageData = {
        id: Math.random().toString(36).substring(7),
        text: currentMessage,
        user: username,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      socket.emit('send_message', messageData);
      setCurrentMessage('');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="app-container">
        <div className="login-screen">
          <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
            <MessageCircle size={48} color="#3b82f6" />
          </div>
          <h1>Welcome to Chat</h1>
          <p>Enter a username to join the conversation.</p>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              className="input-field"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
            <button type="submit" className="btn-primary" disabled={!username.trim()}>
              <LogIn size={20} /> Join Chat
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="chat-header">
        <h2>Live Chat</h2>
        <div className="user-info">
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }}></div>
          {username}
        </div>
      </header>

      <div className="messages-container">
        {messages.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '2rem' }}>
            No messages yet. Say hello!
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`message-wrapper ${msg.user === username ? 'self' : 'other'}`}>
              <div className="message-bubble">
                {msg.text}
              </div>
              <div className="message-meta">
                {msg.user !== username && <span>{msg.user}</span>}
                <span>{msg.timestamp}</span>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <form className="chat-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            className="input-field"
            placeholder="Type your message..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button type="submit" className="btn-icon" disabled={!currentMessage.trim()}>
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
