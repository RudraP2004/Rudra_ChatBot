# ChatBot using Gemini API

## 🚀 Overview
ChatBot is an AI-powered conversational assistant built using **React + Vite** for the frontend, **Node.js + Express** for the backend, and the **Gemini API** for natural language processing. This chatbot enables users to engage in dynamic conversations, making it suitable for customer support, information retrieval, and interactive AI-based assistance.

## 🎯 Features
- AI-powered conversational interface using Gemini API.
- Responsive and modern UI built with React + Vite.
- Real-time messaging with smooth interactions.
- Backend API to handle chat requests efficiently.
- Error handling and user-friendly notifications.
- Deployable on cloud platforms like Vercel, Netlify, or AWS.

## 🛠️ Tech Stack
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **AI Model**: Gemini API
- **Database**: MongoDB / Firebase (optional, for chat history)

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/chatbot-ai.git
cd chatbot-ai
```

### 2️⃣ Install Dependencies
```sh
# Install frontend dependencies
cd client
yarn install  # or npm install

# Install backend dependencies
cd ../server
yarn install  # or npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the `server` directory and add:
```
PORT=5000
GEMINI_API_KEY=your_api_key_here
```

### 4️⃣ Run the Development Servers
```sh
# Start the backend server
cd server
yarn dev  # or npm run dev

# Start the frontend server
cd ../client
yarn dev  # or npm run dev
```
The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5000`.

## 🚀 Deployment
To deploy the **frontend**, you can use:
```sh
vercel  # or netlify deploy
```
To deploy the **backend**, you can use:
```sh
heroku create chatbot-api
git push heroku main
```
Or deploy on AWS, Render, or any cloud provider of your choice.

## 📸 Usage
1. Open the chatbot web interface.
2. Type your query in the chat input box.
3. The AI chatbot will process the request and generate a response using Gemini API.
4. Interact with the chatbot and refine responses as needed.

## 🤝 Contributing
Pull requests are welcome! If you'd like to contribute, follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Added a new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.


## 📬 Contact
For questions or collaborations, reach out at [prasadrudra279@gmail.com](mailto:prasadrudra279@gmail.com).

---
Made with ❤️ by Rudra
