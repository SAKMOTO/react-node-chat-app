# 💬 React Node Chat App

A modern real-time chat application built with **React** and **Node.js**, focused on smooth messaging, clean UI, and fast communication.

---

## ✨ Features

- ⚡ Real-time messaging
- 👥 Multiple users in chat
- 🟢 Online presence updates
- 🎨 Clean and responsive interface
- 🔄 Instant message delivery without refresh

---

## 🛠️ Tech Stack

### Frontend
- React
- CSS

### Backend
- Node.js
- Express
- Socket.io

---

## 📁 Project Structure

```bash
react-node-chat-app/
├── frontend/      # React frontend
├── backend/       # Node/Express backend
└── README.md
```

---

## 🚀 Getting Started

### 1) Clone the repository

```bash
git clone https://github.com/SAKMOTO/react-node-chat-app.git
cd react-node-chat-app
```

### 2) Install dependencies

```bash
# install backend deps
cd backend
npm install

# install frontend deps
cd ../frontend
npm install
cd ..
```

### 3) Configure environment variables

Create a `.env` file in `backend/` (adjust to your app's needs):

```env
PORT=5000
CLIENT_URL=http://localhost:5173
```

### 4) Run the app

```bash
# run backend
cd backend
npm run dev

# run frontend (in another terminal)
cd frontend
npm run dev
```

---

## 📜 Available Scripts (Typical)

Depending on your setup, scripts may include:

- `npm run dev` — development mode
- `npm start` — start app
- `npm run build` — production build

Check `frontend/package.json` and `backend/package.json` for exact scripts.

---

## 🌍 Deployment

You can deploy this project using platforms such as:

- **Frontend:** Vercel / Netlify
- **Backend:** Render / Railway / Fly.io

Set required environment variables in your hosting platform.

---

## 📸 Screenshots

Add screenshots here to showcase the UI:

```md
![Chat UI](./assets/chat-ui.png)
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/awesome-feature`)
3. Commit changes (`git commit -m "Add awesome feature"`)
4. Push branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

---

## 👤 Author

**SAKMOTO**

- GitHub: [@SAKMOTO](https://github.com/SAKMOTO)

---

## 📄 License

This project is licensed under the MIT License.

(You can add a `LICENSE` file if needed.)
