
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 group cursor-pointer">
            <i className="fas fa-microchip text-white text-xl group-hover:rotate-12 transition-transform"></i>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight leading-none italic uppercase">
              Brainwave <span className="text-blue-500">Pro</span>
            </h1>
            <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.4em] mt-1">
              Neural Optimization Lab
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-xs font-black uppercase tracking-widest text-slate-500">
          <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">核心技術</a>
          <a href="#" className="hover:text-white transition-colors">臨床應用</a>
          <a href="#" className="hover:text-white transition-colors">科學歷史</a>
          <a href="#" className="hover:text-white transition-colors">預約諮詢</a>
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-slate-500 hover:text-white transition-colors">
            <i className="fas fa-search"></i>
          </button>
          <div className="hidden sm:flex items-center gap-3 pl-6 border-l border-white/10">
            <div className="text-right">
              <div className="text-[10px] font-black text-white leading-none">Guest User</div>
              <div className="text-[9px] text-slate-500 uppercase tracking-tighter">Neuro Status: Optimal</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 overflow-hidden hover:ring-2 ring-blue-500/50 transition-all cursor-pointer shadow-xl">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=neuro" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
