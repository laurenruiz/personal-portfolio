import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const LANGUAGES = [
  'English', 'Spanish', 'French', 'German', 'Italian',
  'Portuguese', 'Chinese', 'Japanese', 'Korean', 'Russian', 'Arabic', 'Hindi',
];

const API_URL = (process.env.REACT_APP_CHATBOT_URL || '').replace(/\/$/, '');

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Woof woof! 🐾 I'm Myla, Lauren's dog! Ask me anything about my mom — her projects, experience, skills, or anything else you're curious about!" },
  ]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('English');
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({});
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages([...newMessages, { role: 'assistant', content: '' }]);
    setInput('');
    setIsLoading(true);

    try {
      const trimmed = newMessages.slice(-6);
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: trimmed, language }),
      });

      if (!response.ok) throw new Error('API error');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantContent += decoder.decode(value);
        const snapshot = assistantContent;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'assistant', content: snapshot };
          return updated;
        });
      }
    } catch (err) {
      console.error('Chatbot fetch error:', err);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'assistant',
          content: "Oops! I couldn't connect right now. Please try again later.",
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetMobileView = () => {
    if (window.innerWidth > 500) return;
    const viewport = document.querySelector('meta[name=viewport]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
      setTimeout(() => viewport.setAttribute('content', 'width=device-width, initial-scale=1'), 50);
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const submitFeedback = async (msgIndex, rating) => {
    if (feedback[msgIndex] != null) return;
    setFeedback((prev) => ({ ...prev, [msgIndex]: rating }));
    const messageContent = messages[msgIndex]?.content || '';
    try {
      await fetch(`${API_URL}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageContent, rating, timestamp: new Date().toISOString() }),
      });
    } catch {}
  };

  return (
    <div className="chatbot-widget">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-top">
              <div>
                <div className="chat-title">Myla 🐾</div>
                <div className="chat-subtitle">Ask me about Lauren!</div>
              </div>
              <select
                className="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.role}`}>
                <div className="message-bubble">
                  {msg.content
                    ? <ReactMarkdown>{msg.content}</ReactMarkdown>
                    : (isLoading && i === messages.length - 1 ? '…' : '')}
                </div>
                {msg.role === 'assistant' && msg.content && !isLoading && (
                  <div className="feedback-buttons">
                    <button
                      className="feedback-btn"
                      onClick={() => submitFeedback(i, 'up')}
                      disabled={feedback[i] != null}
                      title="Helpful"
                      style={{ opacity: feedback[i] === 'down' ? 0.3 : 1 }}
                    >
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                    <button
                      className="feedback-btn"
                      onClick={() => submitFeedback(i, 'down')}
                      disabled={feedback[i] != null}
                      title="Not helpful"
                      style={{ opacity: feedback[i] === 'up' ? 0.3 : 1 }}
                    >
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </button>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <textarea
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Lauren..."
              disabled={isLoading}
              rows={1}
            />
            <button
              className="send-btn"
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
            >
              {isLoading ? '…' : '↑'}
            </button>
          </div>
        </div>
      )}

      <button
        className="chat-toggle-btn"
        onClick={() => { const closing = isOpen; setIsOpen(!isOpen); if (closing) resetMobileView(); }}
        title={isOpen ? 'Close chat' : 'Chat with Myla'}
      >
        {isOpen ? '✕' : <img src="/myla.png" alt="Myla" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }} />}
      </button>
    </div>
  );
};

export default ChatbotWidget;
