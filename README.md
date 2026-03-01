# 🚀 Full Stack User Registration App

A production-ready full stack web application built using:

- 🔹 HTML, CSS, JavaScript (Frontend)
- 🔹 Node.js + Express (Backend)
- 🔹 MongoDB + Mongoose (Database)

This project demonstrates how to connect frontend and backend using REST APIs and perform full CRUD operations with a clean modern UI.

---

## 📌 Features

✅ User Registration Form  
✅ MongoDB Database Integration  
✅ Duplicate Email Validation  
✅ Custom Toast Notifications (No browser alerts)  
✅ Loading Spinner During API Calls  
✅ Delete User with Smooth Animation  
✅ Responsive Glassmorphism UI  
✅ Proper Error Handling (Frontend + Backend)  

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3 (Glass UI + Animations)
- Vanilla JavaScript (Fetch API)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
form-project/
│
├── form-backend/
│   ├── server.js
│   ├── package.json
│
└── form-frontend/
    ├── index.html
    └── delete.png
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone <your-repository-link>
```

---

### 2️⃣ Install Backend Dependencies

```
cd form-backend
npm install
```

---

### 3️⃣ Make Sure MongoDB Is Running

If using local MongoDB:

```
mongod
```

---

### 4️⃣ Start the Backend Server

```
node server.js
```

Server runs at:

```
http://localhost:5000
```

---

### 5️⃣ Open Frontend

Open:

```
form-frontend/index.html
```

in your browser.

---

## 🔗 API Endpoints

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| POST   | /register       | Register new user        |
| GET    | /users          | Fetch all users          |
| DELETE | /users/:id      | Delete user              |

---

## 🧠 Key Concepts Demonstrated

- REST API Integration
- HTTP Status Codes
- CORS Handling
- Async/Await
- MongoDB Unique Validation
- Frontend Error Handling
- Loading State Management
- Smooth UI Animations

---

## 🚀 Future Improvements

- Add Edit User Feature
- Add JWT Authentication
- Deploy to Cloud (Render / Railway)
- Convert Frontend to React
- Add Environment Variables
- Add Pagination

---

## 👨‍💻 Author

**Sivakumar**

Aspiring Full Stack Developer  
Passionate about building scalable and user-friendly web applications.

---

⭐ If you like this project, feel free to star the repository!
