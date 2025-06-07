import { GIMINIAI_KEY } from './constants';


import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(GIMINIAI_KEY);
const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default geminiModel;