import React, { useState, useRef, useEffect } from 'react';
import { MessageCircleIcon, XIcon, SendIcon } from './Icons';
import { Sender, ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      text: "Bonjour ! Je suis l'assistant virtuel de Jeanjean06. Comment puis-je vous aider ? Une urgence ou besoin d'un devis ?",
      sender: Sender.Bot,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: Sender.User,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(inputText);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: Sender.Bot,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[500px] transition-all duration-300 transform origin-bottom-right">
          {/* Header */}
          <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="font-semibold text-sm">Assistant Jeanjean06</h3>
            </div>
            <button onClick={toggleChat} className="hover:bg-blue-600 p-1 rounded transition">
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 text-sm h-80">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-3 flex ${msg.sender === Sender.User ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                    msg.sender === Sender.User
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none flex space-x-1 items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Écrivez votre message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="group flex items-center justify-center w-14 h-14 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        {isOpen ? <XIcon className="w-7 h-7" /> : <MessageCircleIcon className="w-7 h-7" />}
        {!isOpen && (
          <span className="absolute right-0 top-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
