import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import './ChatWidget.css';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hello! Welcome to AB Enterprises. How can we help you with your steel requirements today?' }
    ]);
    const messagesEndRef = useRef(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        // 1. Add user message to local state
        const userMsg = { type: 'user', text: message };
        setMessages(prev => [...prev, userMsg]);

        // 2. Prepare WhatsApp URL
        const phoneNumber = '917089030444';
        const encodedMessage = encodeURIComponent(message);
        const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        setMessage('');

        // 3. Simulate "Sending..." delay then redirect
        setTimeout(() => {
            const botMsg = { type: 'bot', text: 'Connecting you to our support agent on WhatsApp...' };
            setMessages(prev => [...prev, botMsg]);

            setTimeout(() => {
                window.open(waUrl, '_blank');
            }, 1500);
        }, 600);
    };

    return (
        <div className="chat-widget-container">
            {/* Floating Toggle Button */}
            <button
                className={`chat-toggle-btn ${isOpen ? 'open' : ''}`}
                onClick={toggleChat}
                aria-label="Toggle Support Chat"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>

            {/* Chat Window */}
            <div className={`chat-window ${isOpen ? 'visible' : ''}`}>
                <div className="chat-header">
                    <div className="header-info">
                        <div className="active-dot"></div>
                        <div>
                            <h4>Support Team</h4>
                            <span>Online Now</span>
                        </div>
                    </div>
                    <button className="close-btn" onClick={toggleChat}><X size={18} /></button>
                </div>

                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.type}`}>
                            {msg.type === 'bot' && <div className="bot-avatar"><User size={16} /></div>}
                            <div className="message-content">
                                <p>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <form className="chat-input-area" onSubmit={handleSend}>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" disabled={!message.trim()}>
                        <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatWidget;
