
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getBrainwaveInsight } from '../services/geminiService';

const ChatInterface: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "您好！我是您的腦科學助手。我可以為您解釋 QEEG 報告、如何優化大腦頻率或解釋 A/T 訓練的原理。", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    const aiResponse = await getBrainwaveInsight(input);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse || '抱歉，處理數據時出錯。', timestamp: new Date() }]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-[100] transition-all duration-500 ease-in-out ${isOpen ? 'w-[360px] h-[500px]' : 'w-16 h-16'}`}>
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-600 rounded-full shadow-2xl shadow-blue-600/50 flex items-center justify-center text-white text-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
        >
          <i className="fas fa-robot"></i>
        </button>
      ) : (
        <div className="w-full h-full glass rounded-[32px] overflow-hidden shadow-2xl flex flex-col border border-white/10 ring-1 ring-blue-500/30">
          <div className="p-4 bg-gradient-to-r from-blue-700 to-indigo-700 flex items-center justify-between text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <i className="fas fa-brain text-sm"></i>
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wide">AI 腦科學助手</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] opacity-80 font-medium">在線諮詢中</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <i className="fas fa-minus"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0f172a]/80 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-slate-800/80 text-slate-200 rounded-tl-none border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-1.5 p-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.5s]"></div>
              </div>
            )}
          </div>

          <div className="p-4 bg-slate-900 border-t border-white/10 flex gap-2 shrink-0">
            <input
              type="text" value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="輸入您的問題..."
              className="flex-1 bg-slate-800 border border-white/5 rounded-xl px-4 py-2 text-xs outline-none focus:ring-1 focus:ring-blue-500 transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-500 rounded-xl text-white transition-all active:scale-90"
            >
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;
