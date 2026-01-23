
import { GoogleGenAI, Type } from "@google/genai";

/**
 * IMPORTANT (Vercel / Vite):
 * - In the browser, `process.env` is usually undefined.
 * - Vite only exposes env vars that start with `VITE_` via `import.meta.env`.
 *
 * If the API key is missing and we instantiate GoogleGenAI at module load time,
 * the whole React app can crash → a blank screen.
 *
 * Therefore we:
 * 1) Read the key safely from multiple possible locations
 * 2) Lazily create the client only when needed
 * 3) Gracefully degrade with a helpful message when the key isn't configured
 */

const getApiKey = (): string | undefined => {
  // Vite (browser)
  const viteKey = (import.meta as any)?.env?.VITE_GEMINI_API_KEY as string | undefined;
  if (viteKey && viteKey.trim()) return viteKey.trim();

  // Fallbacks (SSR / Node / legacy define)
  const procEnv = (globalThis as any)?.process?.env;
  const legacy = procEnv?.API_KEY || procEnv?.GEMINI_API_KEY;
  if (typeof legacy === 'string' && legacy.trim()) return legacy.trim();

  return undefined;
};

let _ai: GoogleGenAI | null = null;
const getClient = (): GoogleGenAI | null => {
  if (_ai) return _ai;
  const apiKey = getApiKey();
  if (!apiKey) return null;
  try {
    _ai = new GoogleGenAI({ apiKey });
    return _ai;
  } catch (e) {
    console.error('Failed to init GoogleGenAI:', e);
    return null;
  }
};

/**
 * Fetches insights about brainwaves and neuro-performance.
 * Uses 'gemini-3-pro-preview' for complex scientific reasoning tasks.
 */
export const getBrainwaveInsight = async (prompt: string) => {
  try {
    const ai = getClient();
    if (!ai) {
      return "（尚未設定 GEMINI API Key）目前網站可正常瀏覽，但 AI 對話功能暫時停用。\n\n請到 Vercel → Project → Settings → Environment Variables 新增：VITE_GEMINI_API_KEY，重新部署後即可使用。";
    }
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are a world-class neuroscientist and meditation instructor. 
        Your goal is to explain brainwave patterns (Alpha, Beta, Theta, Delta, Gamma, SMR) 
        and how to optimize cognitive performance. Keep answers concise, scientific, 
        and encouraging. Use Markdown formatting.`,
        temperature: 0.7,
      },
    });
    // Directly access the .text property from the GenerateContentResponse object.
    return response.text;
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return "I encountered an error while analyzing the neuro-data. Please try again.";
  }
};

/**
 * Generates a structured meditation guide in JSON format.
 */
export const generateMeditationGuide = async (waveType: string) => {
  try {
    const ai = getClient();
    if (!ai) {
      return {
        title: "Mindful Awareness",
        steps: [
          "Close your eyes",
          "Breathe deeply",
          "Focus on the present"
        ]
      };
    }
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a short 3-step meditation guide specifically for ${waveType} brainwaves.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { 
              type: Type.STRING,
              description: "The focus of the meditation session."
            },
            steps: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "A series of 3 clear, sequential meditation steps."
            }
          },
          propertyOrdering: ["title", "steps"],
        }
      }
    });
    
    // Access the text property and parse the JSON response safely.
    const jsonStr = response.text;
    if (!jsonStr) throw new Error("Empty response from AI");
    
    return JSON.parse(jsonStr.trim());
  } catch (error) {
    console.error("Gemini Guide Generation Error:", error);
    return { 
      title: "Mindful Awareness", 
      steps: ["Close your eyes", "Breathe deeply", "Focus on the present"] 
    };
  }
};
