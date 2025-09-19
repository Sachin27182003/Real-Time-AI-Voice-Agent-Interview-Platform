# 🎙️ InterviewGPT – Real-Time AI Voice Interview Agent  

## 📌 Overview  
InterviewGPT is a **real-time AI-powered interview simulator** that helps job seekers practice interviews with a virtual voice agent.  
The system conducts **mock interviews**, listens to user responses, asks **dynamic follow-up questions**, and provides **instant feedback** on communication, confidence, and technical knowledge.  

Built in **36 hours** during a hackathon, InterviewGPT combines **Speech-to-Text, LLMs, and Voice AI** to deliver an immersive and practical experience for students, professionals, and recruiters.  

---

## ✨ Features  

✅ **Real-Time Voice Q&A** – AI asks job/HR/technical questions, listens to user responses, and replies dynamically.  
✅ **Adaptive Follow-Up Questions** – AI digs deeper into user answers (*e.g., MERN project → asks about authentication*).  
✅ **Instant Feedback Dashboard** – Scores for confidence, clarity, tone, and technical depth.  
✅ **Filler Word & Stress Detection** – Tracks "umm", "uhh", pauses, and speaking pace.  
✅ **Personalized Improvement Report** – AI rewrites answers in a polished format for future practice.  
✅ **Role-Specific Interviews** – Tailored for roles like Software Engineer, Data Analyst, Product Manager, etc.  
✅ **AI Panel Mode (Bonus)** – Multiple AI voices simulate a panel interview (HR + Technical + Manager).  
✅ **Accessibility & Multilingual Support** – Practice interviews in English, Hindi, Spanish, and more.  

---

## 🛠️ Tech Stack  

- **Frontend**: React / Next.js  
- **Backend**: FastAPI / Node.js (for API + session management)  
- **Speech-to-Text (STT)**: OpenAI Whisper / AssemblyAI  
- **Language Model (Q&A)**: GPT-4o / GPT-4o-mini (for dynamic interview flow)  
- **Voice Output (TTS)**: OpenAI TTS / ElevenLabs / Google TTS  
- **Sentiment & Tone Analysis**: HuggingFace Transformers (BERT / DistilBERT)  
- **Facial Expression Tracking (Optional)**: Mediapipe / OpenCV  

---

## ⚡ Architecture  


- **STT Layer**: Converts voice → text.  
- **Interview Engine**: Uses LLM to generate contextual follow-up questions.  
- **Evaluation Engine**: Runs NLP + audio metrics to analyze response.  
- **Feedback Layer**: Produces a live scorecard + improvement suggestions.  
- **TTS Layer**: Converts AI’s next question → natural voice.  

---

## 🚀 Getting Started  

### 1️⃣ Clone Repo  
```bash
git clone https://github.com/your-username/interview-gpt.git
cd interview-gpt

cd frontend
npm install

cd backend
pip install -r requirements.txt

OPENAI_API_KEY=your_key_here
ASSEMBLYAI_API_KEY=your_key_here
ELEVENLABS_API_KEY=your_key_here

cd backend
uvicorn main:app --reload

cd frontend
npm run dev


---

👉 Do you want me to also **write a crisp 2-minute pitch script** (problem → solution → demo → impact) so you can present this to judges smoothly?

# Real-Time-AI-Voice-Agent-Interview-Platform
