# SyncBoard 🧠

Real-time collaboration. Smooth interaction. Zero conflicts.

A real-time collaborative web app where multiple users can interact on a shared board with live cursors, draggable notes, and conflict-free editing.

---

## 🚀 Features (Planned & In Progress)

* 👆 Live cursor tracking (multi-user)
* 📝 Draggable sticky notes
* 🔒 Locking system to prevent conflicts
* 🔄 Real-time synchronization using WebSockets
* 🧭 Zoom & pan (canvas navigation)
* 💬 Optional chat system

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* JavaScript (ES6+)
* Tailwind CSS

### Backend

* Node.js
* Socket.io
* Express

---

## 🧩 Project Structure

```
SyncBoard/
│
├── client/                 # Frontend (React + Vite + Tailwind)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Backend (Node + Socket.io)
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md
├── LICENSE
```

---

## ⚙️ Getting Started

### 1. Clone the repo

```
git clone https://github.com/yuvrajk-dev/SyncBoard.git
cd SyncBoard
```

---

### 2. Install dependencies

```
cd client
npm install

cd ../server
npm install
```

---

### 3. Run the app

#### Start backend

```
cd server
node server.js
```

#### Start frontend

```
cd client
npm run dev
```

---

## 🎯 Project Goal

This project focuses on solving real-world frontend engineering problems:

* Managing shared state across multiple clients
* Handling real-time updates efficiently
* Preventing conflicts with a locking mechanism
* Designing scalable UI architecture

---

## 🧠 Key Concepts Covered

* WebSocket communication
* State synchronization
* Event-driven architecture
* Coordinate-based UI systems
* Performance optimization (throttling, rendering)

---

## 📌 Current Status

* [x] Project initialized
* [ ] Cursor tracking (in progress)
* [ ] Multi-user sync
* [ ] Draggable notes
* [ ] Locking system
* [ ] Zoom & pan

---

## 🚀 Future Improvements

* Add user identity (name + color)
* Persist board state (database)
* Add authentication
* Improve performance for large boards

---

## 💡 Inspiration

Inspired by collaborative tools like Figma and modern collaborative whiteboards.

---

## 🧑‍💻 Author

Yuvraj Kumar

---

## 📄 License

This project is licensed under the MIT License.
