"use client";
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const API_KEY = "AIzaSyDa9UqBDbWM1AdlDCyMsVLwm-_fBJuIrq0";

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '2rem',
    backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2774&auto=format&fit=crop')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    fontFamily: "'Inter', -apple-system, sans-serif",
  },
  mainCard: {
    width: '100%',
    maxWidth: '1100px',
    background: 'rgba(255, 255, 255, 0.88)',
    backdropFilter: 'blur(15px)',
    borderRadius: '24px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    overflow: 'hidden',
    '@media (maxWidth: 900px)': {
      gridTemplateColumns: '1fr',
      maxHeight: '90vh',
      overflowY: 'auto',
    }
  },
  contactSection: {
    padding: '2.5rem',
    borderRight: '1px solid rgba(0, 0, 0, 0.08)',
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    '@media (maxWidth: 900px)': {
      borderRight: 'none',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
    }
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#1a2b3c',
    marginBottom: '1rem',
  },
  contactDesc: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: '#5a6470',
    marginBottom: '1.5rem',
  },
  adminInfo: {
    marginTop: '1.5rem',
    padding: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '12px',
  },
  adminName: {
    fontWeight: 600,
    color: '#0056b3',
    margin: '0 0 0.25rem 0',
  },
  adminEmail: {
    fontSize: '0.9rem',
    color: '#34495e',
    textDecoration: 'none',
    wordBreak: 'break-all',
  },
  helpCenterSection: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2.5rem',
    overflowY: 'auto',
    maxHeight: 'calc(90vh - 5rem)',
  },
  helpCenterTitle: {
    fontSize: '2rem',
    color: '#1a2b3c',
    fontWeight: 700,
    marginBottom: '2rem',
  },
  faqContainer: {},
  faqItem: {
    padding: '1rem 0',
    borderBottom: '1px solid #e0e5eb',
  },
  faqQuestion: {
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    color: '#2c3e50',
    fontSize: '1.05rem',
  },
  faqAnswer: {
    paddingTop: '0.75rem',
    lineHeight: 1.6,
    color: '#5a6470',
    fontSize: '0.95rem',
  },
  aiSection: {
    marginTop: '2.5rem',
    borderTop: '1px solid #e0e5eb',
    paddingTop: '2rem',
  },
  aiHeader: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#1a2b3c',
    marginBottom: '1rem',
  },
  chatWindow: {
    height: '220px',
    backgroundColor: '#f1f5f9',
    borderRadius: '12px',
    padding: '1rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #e2e8f0',
  },
  messageBubble: {
    padding: '0.6rem 1rem',
    borderRadius: '18px',
    maxWidth: '85%',
    lineHeight: 1.5,
    fontSize: '0.95rem',
  },
  userMessage: {
    backgroundColor: '#007AFF',
    color: 'white',
    alignSelf: 'flex-end',
    borderRadius: '18px 18px 4px 18px',
  },
  assistantMessage: {
    backgroundColor: '#E9E9EB',
    color: '#2C2C2E',
    alignSelf: 'flex-start',
    borderRadius: '18px 18px 18px 4px',
  },
  loadingIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  loadingDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#9ca3af',
    borderRadius: '50%',
    animation: 'pulse 1.4s infinite ease-in-out both',
  },
  aiForm: {
    display: 'flex',
    gap: '0.5rem',
    backgroundColor: '#f1f5f9',
    borderRadius: '12px',
    padding: '0.5rem',
    border: '1px solid #e2e8f0',
  },
  aiInput: {
    flexGrow: 1,
    padding: '0.75rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    backgroundColor: 'white',
    '&:focus': {
      outline: '2px solid #34B3F1',
    }
  },
  aiButton: {
    border: 'none',
    background: 'linear-gradient(135deg, #2E73E8 0%, #34B3F1 100%)',
    color: 'white',
    padding: '0 1.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '1rem',
    transition: 'opacity 0.2s',
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    }
  },
};

const LoadingMessage = () => (
  <div style={{...styles.messageBubble, ...styles.assistantMessage, ...styles.loadingIndicator}}>
    <span style={{...styles.loadingDot, animationDelay: '0s'}}></span>
    <span style={{...styles.loadingDot, animationDelay: '0.2s'}}></span>
    <span style={{...styles.loadingDot, animationDelay: '0.4s'}}></span>
    <style>{`
      @keyframes pulse {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1.0); }
      }
    `}</style>
  </div>
);


const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={styles.faqItem}>
      <div style={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        <span>{q}</span>
        <span style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>+</span>
      </div>
      {isOpen && <p style={styles.faqAnswer}>{a}</p>}
    </div>
  );
};


export default function HelpPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your AI assistant. How can I help with your weather or travel questions?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

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

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!reply) throw new Error("No response from AI.");

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);

    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage = { role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const getResponsiveStyles = (styleObject) => {
    if (typeof window !== 'undefined' && window.matchMedia("(max-width: 900px)").matches) {
      return { ...styleObject, ...styleObject['@media (maxWidth: 900px)'] };
    }
    return styleObject;
  };

  return (

    <>
    <Navbar />
    <div style={styles.pageContainer}>
      
      <div style={getResponsiveStyles(styles.mainCard)}>
        <section style={getResponsiveStyles(styles.contactSection)}>
          <h2 style={styles.sectionTitle}>Contact Administrator</h2>
          <p style={styles.contactDesc}>Have a question or a suggestion? Feel free to reach out directly.</p>
          <div style={styles.adminInfo}>
            <p style={styles.adminName}>Satyam Kumar</p>
            <a href="mailto:satyam.kumars2024@nst.rishihood.edu.in" style={styles.adminEmail}>
              satyam.kumars2024@nst.rishihood.edu.in
            </a>
          </div>
        </section>

        <main style={styles.helpCenterSection}>
          <h1 style={styles.helpCenterTitle}>Help Center</h1>
          
          <div style={styles.faqContainer}>
            <FAQItem 
              q="How accurate is the weather forecast?" 
              a="We aggregate data from leading global meteorological providers to deliver forecasts with the highest possible accuracy for your location." 
            />
            <FAQItem 
              q="Can I save my favorite locations?" 
              a="This feature is coming soon in a future update! You will be able to create an account to save and manage your favorite cities." 
            />
          </div>
          
          <div style={styles.aiSection}>
            <h3 style={styles.aiHeader}>AI Assistant</h3>
            <div style={styles.chatWindow}>
              {messages.map((msg, index) => (
                <div key={index} style={{...styles.messageBubble, ...(msg.role === 'user' ? styles.userMessage : styles.assistantMessage)}}>
                  {msg.content}
                </div>
              ))}
              {isLoading && <LoadingMessage />}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} style={styles.aiForm}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about weather, travel..."
                style={styles.aiInput}
                disabled={isLoading}
              />
              <button type="submit" style={styles.aiButton} disabled={isLoading || !input.trim()}>
                Ask
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
    <Footer />
    </>
  );
}