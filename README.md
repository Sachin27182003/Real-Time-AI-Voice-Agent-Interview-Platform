# 🎙️ Real-Time AI Voice Agent Interview Platform  

## 📌 Overview  
Our platform is a **real-time AI interview agent** that allows users to practice interviews interactively using voice. It listens to responses, asks **contextual follow-up questions**, and provides **instant feedback** on confidence, clarity, and technical knowledge.  

Built during a **36-hour hackathon**, it integrates **Speech-to-Text, LLMs, and Text-to-Speech** to deliver a realistic interview experience for students, professionals, and recruiters.

---

## ✨ Features  

- **Real-Time Voice Q&A** – AI conducts live interviews using voice.  
- **Dynamic Follow-Up Questions** – AI adapts based on answers (*e.g., project explanation → authentication questions*).  
- **Instant Feedback Dashboard** – Scores confidence, clarity, and technical depth.  
- **Filler Word & Stress Detection** – Tracks "umm", pauses, and speaking pace.  
- **Personalized Answer Suggestions** – AI rewrites answers for improvement.  
- **Role-Specific Interviews** – Tailored for Software Engineer, Data Analyst, Product Manager, etc.  
- **AI Panel Mode (Bonus)** – Simulates a full panel with multiple AI voices.  
- **Multilingual Support** – Practice in English, Hindi, and more.  

---

## 🛠️ Tech Stack  

- **Frontend**: React / Next.js  
- **Backend & Auth**: Vapi Firebase  
- **AI & Voice Services**: Gemini API (LLM, STT, TTS)  
- **Optional Analytics**: Sentiment & tone analysis via HuggingFace Transformers  
- **Optional Facial Tracking**: Mediapipe / OpenCV  

---

## ⚡ Architecture  

1. **STT Layer (Gemini API)** – Converts voice → text.  
2. **Interview Engine (Gemini API)** – Generates dynamic follow-up questions using LLM.  
3. **Evaluation Engine** – Analyzes text + audio metrics for scoring.  
4. **Feedback Layer** – Provides live dashboard + improvement suggestions.  
5. **TTS Layer (Gemini API)** – Converts AI questions → natural voice.  
6. **Backend (Vapi Firebase)** – Handles authentication, session management, and storage.

---

## 🚀 Getting Started  

### 1️⃣ Clone Repo  
```bash
git clone https://github.com/Sachin27182003/Real-Time-AI-Voice-Agent-Interview-Platform.git
cd ai-interview-platform

npm install
npm run dev
```


## Configure Vapi Firebase
## Set Gemini API key
### Create a new file named .env.local in the root of your project and add the following content:
```bash
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

If you want, I can also **write a concise 2-minute hackathon pitch script** based on this README that highlights your **Vapi Firebase + Gemini API integration** for judges.  

Do you want me to do that?
