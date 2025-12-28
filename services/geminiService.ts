
import { GoogleGenAI, Type } from "@google/genai";
import { Product } from "../types";

export const getShoppingAssistantResponse = async (
  query: string,
  products: Product[],
  history: { role: 'user' | 'model', content: string }[]
) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const productContext = products.map(p => 
    `- ${p.name}: ${p.description} ($${p.price}, ${p.category})`
  ).join('\n');

  const systemInstruction = `
    You are the "Evergreen Shop" AI Concierge. 
    You help customers find premium and sustainable products from our curated catalog.
    Our brand value is: Quality, Sustainability, and Timeless Design.
    
    Current catalog:
    ${productContext}
    
    Instructions:
    - Be sophisticated, helpful, and slightly warm.
    - Focus on the benefits and quality of the items.
    - Recommend specific products from the catalog if they match the user's request.
    - If a user asks for something we don't have, politely suggest the closest alternative that fits the Evergreen lifestyle.
    - Keep responses elegant and concise.
  `;

  const contents = [
    ...history.map(h => ({
      role: h.role,
      parts: [{ text: h.content }]
    })),
    {
      role: 'user',
      parts: [{ text: query }]
    }
  ];

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: { parts: contents.map(c => c.parts[0]) },
      config: {
        systemInstruction,
        temperature: 0.6,
      },
    });

    return response.text || "I apologize, I'm unable to retrieve that information right now. How else may I assist you today?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our systems are experiencing a brief moment of quietude. Please try again in a few moments!";
  }
};
