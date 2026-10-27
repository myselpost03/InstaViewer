import React from 'react';
import '../Styles/Chat.css';
import { FiArrowLeft, FiVideo, FiPhone, FiMoreVertical } from 'react-icons/fi';

const messages = [
  { from: 'receiver', text: 'Hey, how are you?', time: '10:01 AM' },
  { from: 'sender', text: 'I am good! You?', time: '10:02 AM' },
  { from: 'receiver', text: 'Doing well. Are you coming today?', time: '10:05 AM' },
  { from: 'sender', text: 'Yes, I’ll be there at 6.', time: '10:06 AM' },
];

export default function ChatUI() {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <FiArrowLeft className="icon" />
        <div className="chat-info">
          <div className="chat-name">John Doe</div>
        </div>
        <div className="chat-actions">
          <FiVideo className="icon" />
          <FiPhone className="icon" />
          <FiMoreVertical className="icon" />
        </div>
      </div>

      <div className="chat-body">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.from === 'sender' ? 'sent' : 'received'}`}
          >
            <div className="message-text">{msg.text}</div>
            <div className="message-time">{msg.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
