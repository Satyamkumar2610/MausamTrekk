// This file is the same as the final "MausamTrek Redesign" I provided previously.
// Just copy the code from that response and paste it here.
// Remember to add your Gemini API Key at the top.
// It will automatically be wrapped by the Navbar and Footer from layout.js.
"use client";
import { useState, useEffect, useRef } from 'react';

const API_KEY = "AIzaSyDa9UqBDbWM1AdlDCyMsVLwm-_fBJuIrq0";

const HelpPageStyles = () => (
  <style jsx global>{`
    .help-page-layout {
      background-image: linear-gradient(rgba(245, 247, 250, 0.8), rgba(193, 201, 210, 0.9)), url('https://images.unsplash.com/photo-1601684949011-663ba51de5a2?q=80&w=2574&auto=format&fit=crop');
      background-size: cover;
      background-position: center;
      min-height: calc(100vh - 135px);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    
    .chat-dashboard {
      width: 100%;
      max-width: 750px;
      height: 75vh;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border-radius: 24px;
      box-shadow: 0 10px 30px rgba(41, 56, 78, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .chat-header {
      background: linear-gradient(135deg, #2E73E8 0%, #34B3F1 100%);
      color: white;
      padding: 20px 25px;
      text-align: center;
      flex-shrink: 0;
    }

    .chat-header h1 {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 600;
    }

    .chat-header p {
      margin: 4px 0 0;
      opacity: 0.9;
    }

    .messages-area {
      flex-grow: 1;
      padding: 25px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .message {
      display: flex;
      align-items: flex-end;
      gap: 10px;
      max-width: 80%;
    }

    .message-bubble {
      padding: 12px 18px;
      border-radius: 20px;
      line-height: 1.6;
    }

    .user-message {
      align-self: flex-end;
    }
    .user-message .message-bubble {
      background-color: #007AFF;
      color: white;
      border-bottom-right-radius: 5px;
    }
    
    .assistant-message {
      align-self: flex-start;
    }
    .assistant-message .message-bubble {
      background-color: #E9E9EB;
      color: #2C2C2E;
      border-bottom-left-radius: 5px;
    }
    
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    .input-area {
      padding: 20px;
      border-top: 1px solid #e5e5e5;
      background-color: rgba(249, 250, 251, 0.9);
    }
    
    .input-form {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .input-form input {
      flex-grow: 1;
      border: 1px solid #D1D5DB;
      border-radius: 12px;
      padding: 14px;
      font-size: 1rem;
    }
    
    .input-form button {
      border: none;
      background-color: #2E73E8;
      color: white;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
    }
    .input-form button:disabled {
      background-color: #9CA3AF;
    }
  `}</style>
);


export default function HelpPage() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'नमस्ते! मैं MausamTrek का सहायक हूँ। आप मौसम, यात्रा या ऐप के बारे में कुछ भी पूछ सकते हैं।' }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ 
            role: "user",
            parts: [{ text: `You are a helpful travel and weather assistant for an app called MausamTrek, focused on Indian users. Answer this query: ${currentInput}` }] 
          }]
        }),
      });

      const data = await response.json();
      const reply = data.candidates[0]?.content?.parts[0]?.text;

      if (!reply) throw new Error("No response from AI.");

      const assistantMessage = { role: 'assistant', content: reply };
      setMessages(prev => [...prev, assistantMessage]);

    } catch (error) {
      const errorMessage = { role: 'assistant', content: "माफ़ कीजिए, कुछ समस्या आ गई है। कृपया थोड़ी देर बाद प्रयास करें।" };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <HelpPageStyles />
      <div className="help-page-layout">
        <div className="chat-dashboard">
          <header className="chat-header">
            <h1>MausamTrek Help Desk</h1>
            <p>आपका व्यक्तिगत यात्रा और मौसम सहायक</p>
          </header>
          <main className="messages-area">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}-message`}>
                {msg.role === 'assistant' && <div className="avatar" style={{backgroundColor: '#e0f7fa'}}>🤖</div>}
                <div className="message-bubble">
                  {msg.content}
                </div>
                {msg.role === 'user' && <div className="avatar" style={{backgroundColor: '#d1e7ff'}}>👤</div>}
              </div>
            ))}
            {isLoading && (
              <div className="message assistant-message">
                <div className="avatar" style={{backgroundColor: '#e0f7fa'}}>🤖</div>
                <div className="message-bubble">...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </main>
          <footer className="input-area">
            <form onSubmit={handleSendMessage} className="input-form">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="जैसे: 'कल दिल्ली का मौसम कैसा रहेगा?'"
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading} aria-label="Send Message">
                ➤
              </button>
            </form>
          </footer>
        </div>
      </div>
    </>
  );
}