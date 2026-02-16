
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export class GeminiTutorService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getExplanation(topic: string, question: string, history: { role: 'user' | 'model', text: string }[]) {
    const systemInstruction = `
      You are an expert Power Systems Engineering Professor. 
      Your goal is to help a student learn Power Systems in a 2-week intensive course.
      Current context: We are discussing "${topic}".
      Be technical yet clear. Use analogies where helpful (like comparing electricity to water flow or mechanical inertia).
      Keep responses concise but informative.
      If the student asks something irrelevant, politely redirect them to power systems.
    `;

    try {
      const chat = this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
          { role: 'user', parts: [{ text: question }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const response = await chat;
      return response.text || "I'm sorry, I couldn't generate a response. Please try again.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "There was an error connecting to the AI tutor. Please check your connection.";
    }
  }

  async generateQuiz(dayTitle: string) {
    const prompt = `Generate a 3-question multiple choice quiz for a student who just finished a lesson on "${dayTitle}". 
    Return strictly as a JSON array of objects with 'question', 'options' (array of 4), and 'correctIndex' (0-3).`;
    
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });
      return JSON.parse(response.text || '[]');
    } catch (e) {
      return [];
    }
  }
}

export const tutor = new GeminiTutorService();
