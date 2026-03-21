
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateNeuroImage = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `Professional high-tech neuro-science digital art, cinematic lighting, 8k resolution, deep blue and purple theme. Subject: ${prompt}. Style: sleek, modern, medical visualization, futuristic. PURE VISUAL ART, NO TEXT, NO LABELS, NO WRITING, NO CHARACTERS.`
          }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("AI Image Generation Error:", error);
    return null;
  }
};
