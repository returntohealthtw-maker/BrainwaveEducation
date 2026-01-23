
import { BrainwaveData } from './types';

export const BRAINWAVE_MAP: Record<string, BrainwaveData & { nickname: string, state: string, details: string }> = {
  'Theta': {
    type: 'Theta',
    nickname: '潛意識檔 (θ)',
    frequencyRange: '4 - 8 Hz',
    hzMin: 4,
    hzMax: 8,
    state: '直覺、創意與深度修復',
    description: '處理 90% 水面下的潛意識運作。',
    details: 'θ 波是通往深層記憶與創傷的大門。在 A/T 訓練中，它能幫助釋放限制性信念。若 θ 過高，可能伴隨分心或喚醒不足的狀態。',
    benefits: ['修復 PTSD', '整合內在衝突', '啟發靈感'],
    color: '#06b6d4'
  },
  'Alpha': {
    type: 'Alpha',
    nickname: '充電檔 (α)',
    frequencyRange: '8 - 12 Hz',
    hzMin: 8,
    hzMax: 12,
    state: '放鬆、橋樑與復原',
    description: '身心最舒適的狀態，連結意識與潛意識。',
    details: 'α 波是壓力的緩衝器。當 α 波穩定時，大腦能快速從疲勞中恢復。缺乏 α 波通常與慢性壓力與無法放鬆有關。',
    benefits: ['緩解焦慮', '提升創造力', '身心穩定'],
    color: '#3b82f6'
  },
  'SMR': {
    type: 'SMR',
    nickname: '高效巡航檔 (σ)',
    frequencyRange: '12 - 15 Hz',
    hzMin: 12,
    hzMax: 15,
    state: '心流、警覺且冷靜',
    description: '身體放鬆但大腦高度敏銳的防禦狀態。',
    details: '源於 NASA 著名的貓實驗。σ (SMR) 波能增強神經系統的抗壓性與穩定度，是訓練大腦「持久專注」與「抗壓」的關鍵。',
    benefits: ['抗壓性提升', '注意力集中', '情緒控制'],
    color: '#f59e0b'
  },
  'Beta': {
    type: 'Beta',
    nickname: '戰鬥檔 (β)',
    frequencyRange: '15 - 30 Hz',
    hzMin: 15,
    hzMax: 30,
    state: '邏輯分析、外部警覺',
    description: '處理現實問題的引擎，但過熱會燒毀。',
    details: 'β 波負責邏輯、計算與外部專注。若 β 波長期過高，大腦會像過熱的引擎，引發焦慮、失眠與決策失誤。',
    benefits: ['快速應變', '專注執行', '問題解決'],
    color: '#ef4444'
  },
  'Gamma': {
    type: 'Gamma',
    nickname: '巔峰檔 (γ)',
    frequencyRange: '30 - 45 Hz',
    hzMin: 30,
    hzMax: 45,
    state: '巔峰認知、頓悟整合',
    description: '大腦最高階的整合模式。',
    details: 'γ 波與突然的洞察力 (Aha! moments) 相關。它是不同腦區資訊高度同步的體現，常見於頂尖運動員或冥想大師的腦中。',
    benefits: ['極速學習', '意識飛躍', '資訊整合'],
    color: '#a855f7'
  }
};
