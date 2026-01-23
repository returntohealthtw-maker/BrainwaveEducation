
import React, { useState } from 'react';
import Header from './components/Header';
import Visualizer from './components/Visualizer';
import ChatInterface from './components/ChatInterface';
import AIVisual from './components/AIVisual';
import { BRAINWAVE_MAP } from './constants';
import { BrainwaveType } from './types';

const App: React.FC = () => {
  const [activeWave, setActiveWave] = useState<BrainwaveType>('Alpha');

  const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
    <div className={`mb-16 ${light ? 'text-center' : ''}`}>
      <h3 className="text-3xl md:text-6xl font-black mb-4 tracking-tight leading-tight">{title}</h3>
      {subtitle && <p className="text-blue-500 font-bold uppercase tracking-[0.3em] text-sm">{subtitle}</p>}
    </div>
  );

  const handleReservation = () => {
    window.open("https://lin.ee/kXy9eHb", "_blank");
  };

  const handleInquiry = () => {
    window.open("https://lin.ee/lJ5dgyx", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <AIVisual 
            prompt="Abstract fluid neon neural waves flowing across a deep space, cinematic light beams, high technology, no text" 
            alt="Hero Background"
            className="w-full h-full rounded-none border-none scale-110 blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-10 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Quantum Neural Engineering</span>
          </div>
          <h2 className="text-7xl md:text-9xl font-black mb-10 leading-none tracking-tighter">
            解碼你的 <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 text-shadow-glow">靈魂數據</span>
          </h2>
          <p className="text-xl md:text-3xl text-slate-300 mb-14 max-w-5xl mx-auto leading-relaxed font-light">
            全球首家．解碼你的潛意識，運用專利腦波演算法，將『感覺』量化為『數據』，平凡與頂尖的距離，只差一次精準解碼。
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <button 
              onClick={handleReservation}
              className="group relative px-12 py-6 bg-blue-600 text-white rounded-[32px] font-black text-xl overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-blue-600/40"
            >
              <span className="relative z-10">預約大腦功能診斷</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </section>

      {/* --- DIAGNOSIS SECTION (MODIFIED) --- */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="是否這些困住了你" subtitle="What is Holding You Back?" light />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { prompt: 'A silhouette with two conflicting minds, internal struggle, blue and red neon neurons, no text', title: '自我矛盾', desc: '內在意識與潛意識頻率不一，導致行動力與願景脫鉤，陷入持續的自我懷疑。' },
              { prompt: 'Two human silhouettes facing opposite directions with electrical lightning between them, relationship tension, no labels', title: '關係對立', desc: '與伴侶或夥伴的腦波無法「共振」，形成追逃循環，交流淪為無效的雜訊。' },
              { prompt: 'Exploding neural patterns, chaotic red waves, emotional storm, no words', title: '情緒失控', desc: '杏仁核過度活躍，Beta 波失控暴衝，壓力系統無法關閉，引發焦慮或崩潰。' },
              { prompt: 'A person standing at a foggy crossroad, blurry neon horizon, feeling lost and uncertain, cinematic 3D', title: '前途茫茫', desc: '看不清未來方向，大腦決策區 Alpha 波過低，導致目標感喪失與長期迷航。' },
              { prompt: 'Chess pieces on a brain-like board, wrong placement, human resource metaphor, 3D render', title: '用人不當', desc: '企業主與員工頻率錯位，無法將對的人放在對的位置，造成人才損耗與內耗。' },
              { prompt: 'A severed glowing network cable, disconnected energy, digital glitch art, no text', title: '客戶斷連', desc: '商業能量無法共鳴，無法精準觸達客戶潛意識需求，導致訂單流失與信任崩解。' }
            ].map((item, i) => (
              <div key={i} className="group glass p-2 rounded-[48px] border border-white/5 hover:border-blue-500/30 transition-all duration-700">
                <AIVisual prompt={item.prompt} alt={item.title} aspectRatio="4:3" className="mb-8" />
                <div className="p-8 pt-0">
                  <h4 className="text-3xl font-black mb-4 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-lg font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNOLOGY & PRINCIPLES (REDESIGNED AS FLOW) --- */}
      <section className="py-32 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="技術與原理" subtitle="The Science of Neuro-Mapping" light />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {/* Step 1: Acquisition */}
            <div className="group glass p-8 rounded-[48px] border border-blue-500/20 flex flex-col items-center text-center">
              <AIVisual 
                prompt="3D high-tech headset capturing blue electrical brainwave signals from a human forehead, medical precision, neon highlights, no text" 
                alt="Signal Acquisition" 
                aspectRatio="1:1"
                className="mb-8 w-full rounded-[40px]"
              />
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black mb-6">01</div>
              <h4 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">原始訊號採集</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                透過 <span className="text-blue-400 font-bold">QEEG 高精密傳感器</span>，捕捉大腦在微秒間產生的生物電信號，將不可見的腦生理活動轉化為原始數據流。
              </p>
            </div>

            {/* Step 2: Algorithmic Processing */}
            <div className="group glass p-8 rounded-[48px] border border-purple-500/20 flex flex-col items-center text-center relative">
              <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 z-10">
                <i className="fas fa-chevron-right text-blue-500/30 text-4xl animate-pulse"></i>
              </div>
              <AIVisual 
                prompt="Abstract 3D glowing mathematical gears and neural nodes filtering data particles, complex algorithmic processing visualization, violet and cyan theme, no text" 
                alt="Proprietary Processing" 
                aspectRatio="1:1"
                className="mb-8 w-full rounded-[40px]"
              />
              <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center text-white font-black mb-6">02</div>
              <h4 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">專利演算法處理</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                運用 <span className="text-purple-400 font-bold">FFT 快速傅立葉變換</span> 與專利「潛意識解碼模型」，過濾雜訊並精準計算頻寬比率，識別潛意識深處的能量模式。
              </p>
            </div>

            {/* Step 3: Analysis Results */}
            <div className="group glass p-8 rounded-[48px] border border-emerald-500/20 flex flex-col items-center text-center relative">
              <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 z-10">
                <i className="fas fa-chevron-right text-purple-500/30 text-4xl animate-pulse"></i>
              </div>
              <AIVisual 
                prompt="Futuristic holographic dashboard showing 3D radar charts, human body health metrics, cognitive performance levels, glowing emerald UI, no text" 
                alt="Analysis Results" 
                aspectRatio="1:1"
                className="mb-8 w-full rounded-[40px]"
              />
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-black mb-6">03</div>
              <h4 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">全人分析結果</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                產出直觀的 <span className="text-emerald-400 font-bold">全人大腦儀表板</span>，量化專注力、壓力指數及情緒穩定度，為人生設計提供最終極的科學依據。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HISTORY & MILESTONES --- */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="神經科學里程碑" subtitle="Evolution of Neuro-Detection" light />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: "1968", title: "貓的 SMR 實驗", desc: "Barry Sterman 教授發現貓可透過訓練產生 12-15Hz (SMR) 波，顯著提升神經系統穩定性。" },
              { year: "1970s", title: "NASA MMH 劑量實驗", desc: "NASA 委託 Sterman 測試火箭燃料 MMH 毒性，發現受過 SMR 訓練的貓具備強大的抗驚厥能力，開啟了神經反饋的黃金時代。" },
              { year: "1980s", title: "癲癇與 ADHD 轉變", desc: "此技術正式跨入臨床，成為控制癲癇、改善注意力缺失 (ADHD) 的非藥物首選療法。" },
              { year: "1990s-Now", title: "PTSD 與巔峰表現", desc: "廣泛應用於創傷後壓力症候群 (PTSD) 治療與 NASA 太空人、奧運選手的心理韌性訓練。" }
            ].map((milestone, idx) => (
              <div key={idx} className="p-8 glass rounded-[40px] border border-white/5 relative group">
                <div className="text-blue-500 font-black text-4xl mb-4 group-hover:scale-110 transition-transform">{milestone.year}</div>
                <h4 className="text-white font-black text-xl mb-4">{milestone.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{milestone.desc}</p>
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <i className="fas fa-history text-4xl"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WORLD TRENDS VS OUR POWER (VISUAL REDESIGN) --- */}
      <section className="py-32 bg-indigo-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="全球視野 vs 我們的力量" subtitle="Global Benchmarking" light />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* World Trends Column */}
            <div className="space-y-8">
              <h4 className="text-3xl font-black mb-8 text-slate-500 flex items-center gap-4 italic uppercase">
                <i className="fas fa-globe-americas"></i> 當前世界的腦波檢測
              </h4>
              {[
                { prompt: "Cold hospital room with old EEG monitors, sterile medical environment, monochrome lighting, no text", title: "侷限於醫院臨床", desc: "大多僅用於診斷睡眠障礙、癲癇或阿茲海默症，門檻極高。" },
                { prompt: "Abstract academic research scene with piles of papers and 2D charts, complex and boring data, no text", title: "學術化的生澀報告", desc: "數據深奧難懂，僅用於科研或藥物測試，無法對接日常生活應用。" },
                { prompt: "Staring at a mountain of gold coins with a wall in front, expensive and inaccessible concept, no text", title: "昂貴且高不可攀", desc: "高昂的檢測費用與專業需求，讓一般大眾難以接觸腦科學的益處。" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 items-center glass p-6 rounded-[32px] border border-white/5 group hover:bg-white/5 transition-all">
                  <AIVisual prompt={item.prompt} alt={item.title} aspectRatio="1:1" className="w-32 h-32 rounded-2xl grayscale group-hover:grayscale-0 transition-all" />
                  <div>
                    <h5 className="text-white font-black text-lg mb-2">{item.title}</h5>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Our Power Column */}
            <div className="space-y-8 p-8 glass bg-blue-600/5 rounded-[64px] border border-blue-500/30 ring-1 ring-blue-400/20">
              <h4 className="text-3xl font-black mb-8 text-blue-400 flex items-center gap-4 italic uppercase">
                <i className="fas fa-bolt"></i> 而我們可以為你做到什麼
              </h4>
              {[
                { prompt: "A glowing 3D child with sparkles around the head, genius talent discovery, cinematic golden lighting, no text", title: "發現與提升天賦", desc: "精準量化孩子隱藏的天賦區域，大幅提升其專注力與學習效能。" },
                { prompt: "A beautiful 3D blueprint of a human soul, glowing DNA and core destiny energy, highly detailed, no text", title: "解碼人生原來的設計", desc: "解讀靈魂藍圖，讓你在紛亂的世界中找回核心使命與發展方向。" },
                { prompt: "3D visualization of diverse employees perfectly fitting into a glowing corporate matrix, synergy and match concept, no text", title: "員工潛能極大化", desc: "透過腦波頻率協助企業主人崗匹配，發揮團隊最強大的戰鬥力。" },
                { prompt: "Abstract 3D graph showing massive upward sales arrows made of glowing neural waves, product success concept, no text", title: "銷售業績倍增", desc: "透過腦波配對優化產品銷售策略與客戶體驗，讓業績呈指數增長。" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 items-center bg-blue-600/10 p-6 rounded-[32px] border border-blue-500/20 group hover:scale-105 transition-all">
                  <AIVisual prompt={item.prompt} alt={item.title} aspectRatio="1:1" className="w-32 h-32 rounded-2xl shadow-lg shadow-blue-500/20" />
                  <div>
                    <h5 className="text-blue-400 font-black text-xl mb-2">{item.title}</h5>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- GEARBOX SECTION --- */}
      <section className="py-32 bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <SectionTitle title="大腦的五檔變速箱" subtitle="The Five Neural States" />
              <div className="space-y-4">
                {(Object.keys(BRAINWAVE_MAP) as Array<keyof typeof BRAINWAVE_MAP>).map((wave) => (
                  <button
                    key={wave}
                    onClick={() => setActiveWave(wave as BrainwaveType)}
                    className={`w-full text-left p-8 rounded-[32px] border transition-all flex items-center justify-between group ${
                      activeWave === wave 
                        ? 'bg-slate-800 border-white/20 shadow-2xl scale-105' 
                        : 'bg-transparent border-white/5 opacity-40 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-4 h-4 rounded-full shadow-lg" style={{ backgroundColor: BRAINWAVE_MAP[wave].color }}></div>
                      <div>
                        <div className="font-black text-2xl tracking-wide lowercase italic">{BRAINWAVE_MAP[wave].nickname}</div>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{BRAINWAVE_MAP[wave].state}</div>
                      </div>
                    </div>
                    <div className="text-xs font-mono opacity-40">{BRAINWAVE_MAP[wave].frequencyRange}</div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="glass p-12 rounded-[64px] border border-white/10 bg-[#0f172a]/40 shadow-2xl">
                <div className="mb-12">
                   <AIVisual 
                     prompt={`Hyper-realistic 3D isometric render of ${activeWave} neural energy flow in a glass laboratory environment, sophisticated 3D light paths, Octane Render style, high detail, no text`} 
                     alt={activeWave} 
                     className="mb-10"
                   />
                   <Visualizer activeWave={activeWave} isActive={true} />
                </div>
                
                <div className="p-10 rounded-[40px] bg-slate-900/80 border border-white/5">
                  <h5 className="text-blue-400 font-black mb-6 flex items-center gap-4 text-sm uppercase tracking-widest">
                    <i className="fas fa-microscope"></i> 臨床詳解
                  </h5>
                  <p className="text-slate-200 leading-relaxed text-xl font-light mb-8">{BRAINWAVE_MAP[activeWave].details}</p>
                  <div className="flex flex-wrap gap-4">
                    {BRAINWAVE_MAP[activeWave].benefits.map((b, i) => (
                      <span key={i} className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRY COLLABORATION SECTION --- */}
      <section className="py-32 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="跨產業應用與合作" subtitle="Industry Collaboration" light />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                { title: "企業人力資源與高階管顧", desc: "量化主管抗壓性，篩選具備「韌性大腦」的關鍵人才，優化團隊協作效能。" },
                { title: "保險與保金產業", desc: "投保前精準身心靈數據檢測，精準預測身心狀況，作為投保核保與風險管理之科學化精準參考基準。" },
                { title: "教育培訓與全腦開發", desc: "根據兒童天賦頻率客製化教學策略，減少無效學習，精準開發潛能區域。" },
                { title: "身心靈療癒產業", desc: "以科學化方式透視客戶真實核心問題與需求，並輔以專屬身心靈課程解決客戶問題，達成全方位療癒。" }
              ].map((partner, idx) => (
                <div key={idx} className="p-8 glass rounded-[32px] border border-white/5 hover:bg-white/5 transition-all">
                  <h4 className="text-xl font-black mb-3 text-blue-400">{partner.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{partner.desc}</p>
                </div>
              ))}
            </div>
            <AIVisual 
              prompt="High-end 3D visualization of a futuristic city connected by glowing neural networks, collaboration and interconnected industry nodes, cinematic 3D lighting" 
              alt="Industry Collaboration"
              aspectRatio="1:1"
              className="rounded-[56px] shadow-blue-500/20 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="專業腦波服務項目" subtitle="Global Neuro-Service Portfolio" light />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { prompt: 'Mystical golden key unlocking a cosmic brain door, life script concept, no text', title: '解密人生劇本', sub: '探索潛意識，重寫命運軌跡' },
              { prompt: 'Two spirits connected by radiant neural waves, cosmic love energy, no text', title: '情侶靈性解密', sub: '深化情感連結，消除靈性隔閡' },
              { prompt: 'Corporate office dashboard with glowing brain energy graphs, efficiency concept, no text', title: '企業效率健檢', sub: '量化團隊抗壓性，打造高產出組織' },
              { prompt: 'Exquisite 3D render of a child staring at a galaxy inside a glowing brain, discovery and genius concept, highly detailed 3D animation style, no text', title: '兒童天賦解碼', sub: '發掘優勢智能，找回學習掌控權' },
              { prompt: 'Artistic 3D visualization of two translucent silhouettes (parent and child) with synchronized glowing heart-to-brain waves, warm amber and blue lighting, 3D fluid particles, no text', title: '親子關係共振', sub: '改善溝通頻率，增進情感連貫性' },
              { prompt: 'Two glowing hearts misaligned neural synchronization art, relationship therapy concept, no text', title: '夫妻錯頻分析', sub: '協調情感波段，建立和諧生活' }
            ].map((item, i) => (
              <div key={i} className="group glass p-4 rounded-[56px] border border-white/5 hover:-translate-y-4 transition-all duration-700 text-center flex flex-col">
                <AIVisual prompt={item.prompt} alt={item.title} aspectRatio="1:1" className="mb-10 rounded-[40px]" />
                <div className="p-8 pt-0 flex-1">
                  <h4 className="text-3xl font-black mb-4 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                  <p className="text-slate-500 font-medium text-lg leading-tight">{item.sub}</p>
                </div>
                <div className="px-8 pb-8">
                  <button 
                    onClick={handleInquiry}
                    className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all"
                  >
                    詳細諮詢
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ChatInterface />

      <footer className="py-32 border-t border-white/5 bg-[#020617] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-5xl font-black mb-12 italic tracking-tighter uppercase">投資你的大腦資本</h3>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-xl leading-relaxed">
             改變腦波頻率，就能改變人生頻率。<br/>別讓盲目的感覺偷走你的潛能。
          </p>
          <button 
            onClick={handleReservation}
            className="px-20 py-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-[40px] font-black text-2xl shadow-3xl shadow-blue-600/50 hover:scale-105 transition-all mb-20"
          >
             開啟大腦進化之旅
          </button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 text-[10px] text-slate-600 font-black uppercase tracking-[0.4em]">
             <div>科學實證</div>
             <div>非侵入性</div>
             <div>精準量化</div>
             <div>全球聯網</div>
          </div>
          <p className="text-slate-800 text-xs font-bold uppercase tracking-widest">© 2024 Brainwave Education Pro. Powered by Advanced AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
