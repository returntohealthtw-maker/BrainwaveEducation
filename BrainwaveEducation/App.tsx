
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
            prompt="Vast cosmic deep-space panorama filled with luminous fluid neural wave streams in electric blue and indigo, brainwave energy pulses radiating outward from a glowing core, hyper-cinematic light beams cutting through the void, futuristic high-tech neuroscience backdrop" 
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
              { prompt: '3D render of a single human head split into two contrasting halves, left side glowing bright blue conscious mind and right side deep purple subconscious, conflicting neural brainwave frequencies colliding at the center seam, self-doubt and inner conflict visualization, cinematic lighting', title: '自我矛盾', desc: '內在意識與潛意識頻率不一，導致行動力與願景脫鉤，陷入持續的自我懷疑。' },
              { prompt: '3D visualization of two glowing human silhouettes standing back-to-back, chaotic red and blue brainwave frequencies clashing violently between them creating static noise interference, relationship incompatibility and communication breakdown, neural wave dissonance', title: '關係對立', desc: '與伴侶或夥伴的腦波無法「共振」，形成追逃循環，交流淪為無效的雜訊。' },
              { prompt: '3D human brain with overactive amygdala glowing red-hot at the center, explosive chaotic red Beta brainwaves radiating outward like a supernova, neural overload storm, stress system maxed out, anxiety and emotional breakdown visualization, dramatic cinematic lighting', title: '情緒失控', desc: '杏仁核過度活躍，Beta 波失控暴衝，壓力系統無法關閉，引發焦慮或崩潰。' },
              { prompt: '3D cinematic render of a lone human figure standing at a dark foggy crossroads with multiple dimly lit diverging neon paths vanishing into the mist, brain prefrontal cortex showing faint weak Alpha waves, blurred horizon with no clear destination, lost direction and purposelessness', title: '前途茫茫', desc: '看不清未來方向，大腦決策區 Alpha 波過低，導致目標感喪失與長期迷航。' },
              { prompt: '3D corporate neural network visualization of mismatched glowing employee silhouettes placed in wrong-shaped role slots, people in incorrect positions, organizational frequency mismatch and talent waste, puzzle pieces that do not fit, HR misalignment concept', title: '用人不當', desc: '企業主與員工頻率錯位，無法將對的人放在對的位置，造成人才損耗與內耗。' },
              { prompt: '3D digital art of a severed glowing business neural network, fragmented energy pathways between merchant and client silhouettes breaking apart, broken trust signal loss and disconnected commerce energy field, digital glitch fragmentation effect, lost transactions visualization', title: '客戶斷連', desc: '商業能量無法共鳴，無法精準觸達客戶潛意識需求，導致訂單流失與信任崩解。' }
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
                prompt="Ultra high-tech QEEG medical headset with precision electrode sensors placed on a human forehead, real-time blue electrical brainwave biosignals streaming from scalp through glowing data cables into digital visualization, nanosecond-accurate neural signal capture, medical grade precision" 
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
                prompt="3D visualization of Fast Fourier Transform FFT algorithm processing raw neural signal streams, glowing mathematical gears and neural nodes filtering noise particles through a patent subconscious decoding engine, bandwidth ratio computation, deep violet and cyan digital processing core" 
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
                prompt="Futuristic holographic full-person brain dashboard with 3D radar charts quantifying focus level, stress index, and emotional stability scores, translucent human body overlay showing cognitive performance metrics, comprehensive neuroscience analytics visualization, glowing emerald green UI panels" 
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
                { prompt: "Cold sterile hospital room with outdated EEG monitoring machines and clinical electrodes, restricted medical environment accessible only to the seriously ill, harsh fluorescent lighting, old-fashioned medical brain scanning limited to epilepsy and sleep disorder diagnosis", title: "侷限於醫院臨床", desc: "大多僅用於診斷睡眠障礙、癲癇或阿茲海默症，門檻極高。" },
                { prompt: "Academic research desk buried under an overwhelming pile of complex scientific papers, incomprehensible 2D statistical charts and dry laboratory data graphs on screens, ivory tower science disconnected from everyday life, inaccessible academic brainwave reports", title: "學術化的生澀報告", desc: "數據深奧難懂，僅用於科研或藥物測試，無法對接日常生活應用。" },
                { prompt: "Towering wall of gold coins and expensive price tags blocking access to a brain scanning machine in the background, financial barrier gatekeeping neuroscience from ordinary people, unaffordable and inaccessible high-cost brain technology", title: "昂貴且高不可攀", desc: "高昂的檢測費用與專業需求，讓一般大眾難以接觸腦科學的益處。" }
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
                { prompt: "Glowing 3D child silhouette with brilliant talent zones lighting up inside their brain in golden and cyan light, sparkles of hidden potential energy bursting outward, focus and learning excellence activation, genius talent discovery, cinematic warm golden lighting", title: "發現與提升天賦", desc: "精準量化孩子隱藏的天賦區域，大幅提升其專注力與學習效能。" },
                { prompt: "Luminous 3D blueprint of a human soul floating in cosmic space, glowing DNA helix intertwined with a radiant core destiny energy map, life mission pathway decoded and revealed, soul design visualization, finding core purpose amid chaos", title: "解碼人生原來的設計", desc: "解讀靈魂藍圖，讓你在紛亂的世界中找回核心使命與發展方向。" },
                { prompt: "3D corporate neural matching visualization showing diverse glowing employee silhouettes fitting perfectly into their optimal role positions in a luminous team matrix, brainwave frequency alignment unlocking maximum team synergy and combat effectiveness", title: "員工潛能極大化", desc: "透過腦波頻率協助企業主人崗匹配，發揮團隊最強大的戰鬥力。" },
                { prompt: "Dynamic 3D business graph with exponentially rising neural-powered sales arrows made of glowing brainwave energy, client resonance optimization driving exponential revenue growth, product strategy aligned with customer subconscious desires", title: "銷售業績倍增", desc: "透過腦波配對優化產品銷售策略與客戶體驗，讓業績呈指數增長。" }
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
                     prompt={`Hyper-realistic 3D isometric render of ${activeWave} brainwave neural energy flowing through a glass laboratory environment, precise frequency-specific light waveforms at ${activeWave === 'Theta' ? '4-8Hz deep subconscious slow waves' : activeWave === 'Alpha' ? '8-12Hz calm relaxation waves' : activeWave === 'SMR' ? '12-15Hz focused high-efficiency waves' : activeWave === 'Beta' ? '15-30Hz intense active thinking waves' : '30-45Hz peak performance gamma burst waves'}, Octane Render cinematic style`} 
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
              prompt="High-end 3D panoramic visualization of a luminous futuristic megacity with interconnected neural network highways spanning education, healthcare, human resources, and wellness industry nodes, collaborative glowing data streams linking diverse sectors, cinematic wide-angle 3D lighting" 
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
              { prompt: 'A cosmic golden key unlocking a glowing cosmic brain vault revealing a hidden life script and destiny blueprint inside, mystical subconscious exploration, rewriting fate and life trajectory, 3D cinematic key-to-brain unlock moment', title: '解密人生劇本', sub: '探索潛意識，重寫命運軌跡' },
              { prompt: '3D render of two luminous spirit silhouettes facing each other with perfectly synchronized brainwave frequencies creating a radiant love bridge of flowing neural energy between their hearts and minds, couple spiritual connection and emotional resonance, eliminating spiritual barriers', title: '情侶靈性解密', sub: '深化情感連結，消除靈性隔閡' },
              { prompt: '3D corporate brain efficiency health check dashboard with glowing organizational stress resistance metrics, team cognitive performance graphs, quantified output scores and mental resilience indicators for a high-performance organization', title: '企業效率健檢', sub: '量化團隊抗壓性，打造高產出組織' },
              { prompt: 'Breathtaking 3D render of a glowing child in awe gazing at a personal galaxy of talents and superior intelligences shining brilliantly inside a luminous brain, multiple intelligence zones lighting up, reclaiming learning mastery and self-confidence', title: '兒童天賦解碼', sub: '發掘優勢智能，找回學習掌控權' },
              { prompt: 'Warm 3D visualization of a parent and child translucent silhouettes side by side with perfectly synchronized amber and blue brain-to-heart wave resonance flowing between them, improved communication frequency and emotional coherence, harmonious family neural bonding', title: '親子關係共振', sub: '改善溝通頻率，增進情感連貫性' },
              { prompt: '3D art of two glowing hearts representing husband and wife with visibly misaligned neural frequency waves creating interference patterns between them, couples brainwave desynchronization analysis and the pathway to restored harmonic life together', title: '夫妻錯頻分析', sub: '協調情感波段，建立和諧生活' }
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
