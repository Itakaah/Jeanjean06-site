import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the client. 
// Note: In a real production app, ensure strict backend proxying or secure environment handling.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
Tu es l'assistant virtuel du site web de "Jeanjean06", une entreprise de plomberie et chauffage basée à Nice, dirigée par Quentin Jeanjean.
Ton rôle est d'aider les visiteurs du site, de répondre à leurs questions de base sur la plomberie, et de les inciter à contacter Quentin pour un devis ou une urgence.

Informations Clés sur Jeanjean06 :
- Expérience : 13 ans, diplômé.
- Localisation : Nice (et environs).
- Services : Urgence, Dépannage, Réparation, Rénovation, Recherche de fuite, Soudure.
- Atouts : Prix raisonnable, Assurance Décennale, Disponible et à l'écoute.
- Contact : Téléphone, Email, SMS.

Consignes de comportement :
1. Sois poli, professionnel, mais chaleureux (ton "Niçois" amical apprécié mais subtil).
2. Si l'utilisateur a une urgence (fuite grave, plus de chauffage en hiver), dis-lui IMPÉRATIVEMENT d'appeler directement le numéro affiché sur le site.
3. Donne des conseils de premiers secours simples (ex: couper l'eau) si pertinent.
4. Ne donne jamais de prix fixe. Dis que les prix sont "raisonnables" et qu'il faut demander un devis.
5. Sois concis.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "Le service d'assistance est momentanément indisponible (Clé API manquante). Veuillez nous appeler directement.";
    }

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Désolé, je n'ai pas pu traiter votre demande. Veuillez contacter M. Jeanjean directement par téléphone.";
  } catch (error) {
    console.error("Erreur Gemini:", error);
    return "Une erreur est survenue. Pour toute urgence, appelez le numéro indiqué en haut du site.";
  }
};
