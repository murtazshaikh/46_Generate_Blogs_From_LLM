# 📝 Prompt-to-Blog Generator

This project is a full-stack web application that generates a 1000-word blog post from a user-provided text prompt using OpenAI’s GPT-3.5-turbo model.

## 📚 Features
✅ Responsive React frontend  
✅ User can enter any text prompt  
✅ Blog generated with OpenAI API  
✅ Node.js backend API for secure key handling  
✅ Deployed frontend (Vercel) and backend (Render)
✅ Clean, mobile-friendly UI

## 🚀 Live Demo
- **Frontend (React on Vercel):** [Live Link](https://46-generate-blogs-from-llm-murtazshaikhs-projects.vercel.app/)
- **Backend (Node.js on Render):** [API Link](https://four6-generate-blogs-from-llm.onrender.com)

## 🛠️ Tech Stack
- Frontend: React, Vercel
- Backend: Node.js, Express, OpenAI API, Render

## 📦 How It Works
1. User enters a text prompt in the React app.
2. React app sends a POST request to `/api/generate` on the Node backend.
3. Node server calls OpenAI’s GPT-3.5-turbo API with the prompt and returns a ~1000-word blog.
4. React app displays the blog with formatting.

## 🖥️ Local Development

### Clone and install
```bash
git clone https://github.com/murtazshaikh/46_Generate_Blogs_From_LLM.git
cd 46_Generate_Blogs_From_LLM
npm install
```

### Environment Variables
In your root directory, create a `.env` file with:
```
OPENAI_API_KEY=your_openai_key_here
```

### Run Backend
```bash
node server.js
```

### Run Frontend
```bash
cd client  # if your React app is in a separate folder
npm install
npm start
```

## 📜 Assignment Explanation
This app was built to fulfill a prompt-to-blog assignment requiring:
- A prompt input field
- A 1000-word blog output
- Use of a free or open LLM via API
- Clean, functional UX
- Public deployment with shareable links

I chose React for the frontend and Node.js for the backend. OpenAI’s GPT-3.5-turbo was integrated through a secure backend API on Render. The frontend is deployed on Vercel, and the UI is styled with responsive CSS.

## 📄 License
This project is open-sourced for educational purposes.

---

Made with love ❤️
