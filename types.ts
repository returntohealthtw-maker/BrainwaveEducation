
export type BrainwaveType = 'Gamma' | 'Beta' | 'Alpha' | 'Theta' | 'Delta' | 'SMR';

export interface BrainwaveData {
  type: BrainwaveType;
  frequencyRange: string;
  description: string;
  benefits: string[];
  color: string;
  hzMin: number;
  hzMax: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface SessionConfig {
  duration: number; // in seconds
  waveType: BrainwaveType;
  volume: number;
}
