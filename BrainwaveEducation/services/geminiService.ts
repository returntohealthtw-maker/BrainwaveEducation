
import { GoogleGenAI, Type } from "@google/genai";

// Always initialize GoogleGenAI with the API key from the environment variable directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Fetches insights about brainwaves and neuro-performance.
 * Uses 'gemini-3-pro-preview' for complex scientific reasoning tasks.
 */
export const getBrainwaveInsight = async (prompt: string) => {
  try {
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
