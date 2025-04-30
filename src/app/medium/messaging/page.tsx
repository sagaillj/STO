"use client";

import React, { useState } from 'react';

const dummyMessages = [
  { id: 1, sender: 'Alice', text: 'Hey team, are we meeting today?' },
  { id: 2, sender: 'Bob', text: "Yes, let's meet at 3pm." },
  { id: 3, sender: 'Carol', text: "I'll bring the project notes." },
];

export default function GroupMessaging() {
  const [messages, setMessages] = useState(dummyMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'You', text: input }]);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-background-primary p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 flex flex-col h-[70vh]">
        <h1 className="text-2xl font-bold mb-4">Group Messaging</h1>
        <div className="flex-1 overflow-y-auto mb-4 space-y-2">
          {messages.map(msg => (
            <div key={msg.id} className={`p-2 rounded-lg ${msg.sender === 'You' ? 'bg-accent-primary text-white self-end' : 'bg-background-secondary text-text-primary self-start'}`}> 
              <span className="font-semibold mr-2">{msg.sender}:</span>{msg.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            className="flex-1 border border-border-primary rounded px-3 py-2"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            className="bg-accent-primary text-white px-4 py-2 rounded hover:bg-accent-secondary"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
} 