"use client";
import React, { useState, useEffect, useRef } from 'react';

const API_KEY = "AIzaSyDa9UqBDbWM1AdlDCyMsVLwm-_fBJuIrq0";

const styles = {
  pageLayout: {
    fontFamily: "'Inter', -apple-system, sans-serif",
    minHeight: 'calc(100vh - 70px)',
    padding: '40px',
    backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2774&auto=format&fit=crop')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '40px',
    flexWrap: 'wrap',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(12px)',
    borderRadius: '20px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  contactCard: {
    flex: '1 1 300px',
    maxWidth: '400px',
    padding: '30px',
  },
  helpCenterCard: {
    flex: '2 1 500px',
    maxWidth: '650px',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(85vh - 80px)', 
    maxHeight: '700px',
  },
  cardTitle: {
    fontSize: '1.8rem',
    color: '#1a2b3c',
    fontWeight: 600,
    margin: '0 0 15px 0',
    paddingBottom: '15px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  },
  contactDesc: {
    fontSize: '0.95rem',
    lineHeight: 1.7,
    color: '#5a6470',
    marginBottom: '20px',
  },
  adminInfo: {
    marginTop: '20px',
  },
  adminName: {
    fontWeight: '600',
    color: '#0056b3',
  },
  adminEmail: {
    fontSize: '0.9rem',
    color: '#34495e',
    textDecoration: 'none',
  },
  mainContent: {
    padding: '15px 30px 30px 30px',
    overflowY: 'auto',
    flexGrow: 1,
  },
  faqItem: {
    padding: '15px 0',
    borderBottom: '1px solid #e9ecef',
  },
  faqQuestion: {
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    color: '#2c3e50',
  },
  faqAnswer: {
    paddingTop: '10px',
    lineHeight: 1.6,
    color: '#5a6470',
  },
  aiSection: {
    marginTop: '30px',
  },
  aiHeader: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#1a2b3c',
    marginBottom: '15px',
  },
  chatWindow: {
    height: '200px',
    backgroundColor: 'rgba(241, 245, 249, 0.8)',
    borderRadius: '12px',
    padding: '15px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '15px',
  },
  messageBubble: {
    padding: '8px 12px',
    borderRadius: '15px',
    maxWidth: '80%',
    lineHeight: 1.5,
  },
  userMessage: {
    backgroundColor: '#007AFF',
    color: 'white',
    alignSelf: 'flex-end',
  },
  assistantMessage: {
    backgroundColor: '#E9E9EB',
    color: '#2C2C2E',
    alignSelf: 'flex-start',
  },
  aiForm: {
    display: 'flex',
    gap: '10px',
  },
  aiInput: {
    flexGrow: 1,
    padding: '12px 15px',
    border: '1px solid #d0d7de',
    borderRadius: '8px',
    fontSize: '1rem',
  },
  aiButton: {
    border: 'none',
    background: 'linear-gradient(135deg, #2E73E8 0%, #34B3F1 100%)',
    color: 'white',
    padding: '0 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '500',
  },
};

const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={styles.faqItem}>
      <div style={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        <span>{q}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <p style={styles.faqAnswer}>{a}</p>}
    </div>
  );
};

export default function HelpPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your AI assistant. How can I help?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `You are a helpful travel and weather assistant for an app called MausamTrek. Answer this query concisely: ${currentInput}` }] }]
        }),
      });

      const data = await response.json();
      const reply = data.candidates[0]?.content?.parts[0]?.text;

      if (!reply) throw new Error("No response from AI.");

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);

    } catch (error) {
      const errorMessage = { role: 'assistant', content: "Sorry, something went wrong. Please try again." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.pageLayout}>
      
      <div style={{...styles.card, ...styles.contactCard}}>
        <h2 style={styles.cardTitle}>Contact Administrator</h2>
        <p style={styles.contactDesc}>Have a question or suggestion? Reach out directly to our administrator.</p>
        <div style={styles.adminInfo}>
          <p style={styles.adminName}>Satyam Kumar</p>
          <a href="mailto:satyam.kumars2024@nst.rishihood.edu.in" style={styles.adminEmail}>
            satyam.kumars2024@nst.rishihood.edu.in
          </a>
        </div>
      </div>

      <div style={{...styles.card, ...styles.helpCenterCard}}>
        <header style={{padding: '25px 30px'}}>
          <h2 style={{...styles.cardTitle, borderBottom: 'none', paddingBottom: 0, margin: 0}}>Help Center</h2>
        </header>

        <main style={styles.mainContent}>
          <FAQItem 
            q="How accurate is the weather forecast?" 
            a="We use data from leading global providers to give you the most accurate forecasts possible." 
          />
          <FAQItem 
            q="Can I save my favorite locations?" 
            a="This feature is coming soon! You will be able to log in and save your favorite cities." 
          />
          
          <div style={styles.aiSection}>
            <h3 style={styles.aiHeader}>AI Assistant</h3>
            <div style={styles.chatWindow}>
              {messages.map((msg, index) => (
                <div key={index} style={{...styles.messageBubble, ...(msg.role === 'user' ? styles.userMessage : styles.assistantMessage)}}>
                  {msg.content}
                </div>
              ))}
              {isLoading && <div style={{...styles.messageBubble, ...styles.assistantMessage}}>...</div>}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} style={styles.aiForm}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about weather, travel, etc..."
                style={styles.aiInput}
                disabled={isLoading}
              />
              <button type="submit" style={styles.aiButton} disabled={isLoading}>
                {isLoading ? '...' : 'Ask'}
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
