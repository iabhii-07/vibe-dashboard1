# 🌌 Vibe Dashboard

The Vibe Dashboard is a modern full-stack web application that demonstrates a clean integration between a REST API backend and a responsive, visually appealing frontend dashboard. The project was built to showcase structured backend development, frontend integration, and professional UI design using modern web technologies.

---

# 🚀 Tech Stack

**Backend**
- Node.js
- Express.js
- REST API
- CORS

**Frontend**
- Next.js
- Tailwind CSS
- Framer Motion
- Axios

---

# ⚙️ Features

- REST API with search functionality  
- Dynamic frontend connected to backend  
- Responsive dashboard layout  
- Glassmorphism card design  
- Smooth animations and hover effects  
- Clean and professional UI  
- Proper project structure  

---

# 🔌 API Endpoint

**GET /api/items**

Supports search query:
Example:
http://localhost:5000/api/items?search=mouse

Response format:
{
success: true,
count: number,
data: [...]
}

The API filters items based on the search query and returns matching results.

---

# 🎨 Frontend Functionality

The frontend dashboard fetches data from the backend API and displays items in animated glassmorphism cards.

Flow:
User enters search → Frontend sends request → Backend filters data → Frontend displays results instantly

This demonstrates full frontend-backend integration.

---

# 📁 Project Structure
vibe-dashboard/
│
├── backend/ # Express REST API
├── frontend/ # Next.js dashboard
└── README.md

---

# ▶️ How to Run Locally

## Start Backend

cd backend
npm install
node server.js


Runs at:

http://localhost:5000


---

## Start Frontend

cd frontend
npm install
npm run dev


Runs at:

http://localhost:3000


---

# ✅ Requirements Fulfilled

- Built REST API using Node.js and Express.js  
- Implemented GET endpoint with search functionality  
- Built frontend using Next.js and Tailwind CSS  
- Connected frontend to backend  
- Created responsive dashboard UI  
- Implemented glassmorphism design and animations  
- Structured project professionally  
- Submitted via GitHub  

---

# 👨‍💻 Author

Abhiram Phanindra  
(Note:Before Running Application in your Terminal Run command "npm install")
GitHub: https://github.com/iabhii-07/vibe-dashboard1

---

# 🏁 Summary

This project demonstrates full-stack development skills including REST API creation, frontend integration, modern UI design, and clean project architecture in a professional and production-style implementation.
