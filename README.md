🖼️ MERN Image Search App (with OAuth + Unsplash API)
A full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
Users can log in using Google OAuth, search for images using the Unsplash API, view top search terms, and check their personal search history — all securely handled through a backend–frontend integration.

🚀 Project Overview
This project demonstrates a real-world end-to-end full-stack workflow — from backend setup, authentication, and API integration to frontend UI and state management.

Core features:

Secure login with Google OAuth (via Passport.js)

Search for images fetched from Unsplash API

View a dynamic Top 5 most searched terms banner

View your personal search history

Multi-select images in a grid view

Backend with Express + MongoDB

Frontend with React.js

🧱 Tech Stack
Layer	Technology
Frontend	React.js, Axios, React Router
Backend	Node.js, Express.js
Database	MongoDB Atlas
Authentication	Passport.js (Google OAuth 2.0)
API Integration	Unsplash Developer API
Session Management	express-session / cookie-session
Version Control	Git + GitHub

🗂️ Project Structure
pgsql
Copy code
mern-image-search-oauth/
│
├── client/                # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── SearchPage.jsx
│   │   │   └── TopSearchBanner.jsx
│   │   ├── App.js
│   │   └── api.js
│   └── package.json
│
├── server/                # Express backend
│   ├── index.js
│   ├── config/db.js
│   ├── auth/passport.js
│   ├── models/
│   │   ├── User.js
│   │   └── Search.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── search.js
│   └── package.json
│
├── .env.example
├── .gitignore
└── README.md
⚙️ Environment Variables
Create a file named .env inside the server/ folder and fill it like this:

env
Copy code
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/yourdb
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
UNSPLASH_ACCESS_KEY=<your_unsplash_access_key>
SESSION_SECRET=your_random_secret
FRONTEND_URL=http://localhost:3000
🔍 How to get these values
MONGO_URI → From MongoDB Atlas (Connection string)

GOOGLE_CLIENT_ID / SECRET → From Google Cloud Console under OAuth credentials

UNSPLASH_ACCESS_KEY → From Unsplash Developers

SESSION_SECRET → Any random string (used to secure cookies)

FRONTEND_URL → Your frontend URL (default: http://localhost:3000)

🧩 Installation and Setup (for Local Development)
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/<your-username>/mern-image-search-oauth.git
cd mern-image-search-oauth
2️⃣ Install dependencies
Backend
bash
Copy code
cd server
npm install
Frontend
bash
Copy code
cd ../client
npm install
3️⃣ Setup environment file
Inside /server, create .env and paste your keys as shown above.

4️⃣ Run both servers
Go to the root folder and run:

bash
Copy code
npm run start
This uses concurrently to start:

Backend → http://localhost:5000

Frontend → http://localhost:3000

🌐 API Endpoints (Backend)
Endpoint	Method	Description
/auth/google	GET	Redirects user to Google login
/auth/google/callback	GET	Callback route for Google OAuth
/auth/logout	GET	Logout current user
/api/search	POST	Search Unsplash for a term (authenticated users only)
/api/top-searches	GET	Get top 5 most searched terms
/api/history	GET	Get logged-in user's search history

🧠 Phases You Completed (Terminology Explained)
Phase 0 – Setup & Git
You created a GitHub repo and folder structure (client/ and server/).

Added a .gitignore to keep secrets and node_modules out of Git.

Learned to use git add, git commit, and git push safely.

Terminology:

Repository: a project folder tracked by Git.

Commit: a saved snapshot of your code.

Branch: a separate line of development (you used branches like backend/setup).

Phase 1 – Backend Setup
Installed Express, Mongoose, and dotenv.

Connected to MongoDB using your MONGO_URI.

Created models for User and Search.

Terminology:

Express: Node.js framework for APIs.

Mongoose: library to work with MongoDB easily.

Schema/Model: defines how your data looks (like a blueprint).

Phase 2 – OAuth Authentication
Implemented Google Login with Passport.js.

Created routes for /auth/google and /auth/google/callback.

Stored user profiles in MongoDB.

Terminology:

OAuth: standard login system using external providers (Google, GitHub).

Passport.js: middleware that handles authentication in Express.

Session: keeps user logged in across requests.

Phase 3 – Unsplash API Integration
Created /api/search route.

Stored search term + user in MongoDB.

Called Unsplash API to fetch image results.

Terminology:

API: Application Programming Interface — a way for software to communicate.

Axios: a tool to make API requests in JavaScript.

Phase 4 – Top Searches & History
Created /api/top-searches using MongoDB aggregation.

Added /api/history for logged-in user’s past searches.

Terminology:

Aggregation: combining data using operations like count, group, and sort.

Phase 5 – Frontend Setup
Built React components: Login, SearchPage, TopSearchBanner, History.

Connected to backend using Axios.

Used React Router for navigation.

Terminology:

React Component: a reusable UI block.

State: memory inside React that stores data (like selected images or search results).

Phase 6 – Multi-Select & UI
Displayed image results in a 4-column grid.

Added checkboxes to multi-select images.

Created a counter: “Selected: X images”.

Displayed user’s search history dynamically.

Phase 7 – Documentation & Deployment
Added .env.example to show what keys are needed.

Created README (this file).

Prepared screenshots and Postman API collection (if required).

📸 Visual Proof (Optional for Submission)
Include screenshots/GIFs in /docs/ folder:

OAuth Login page

Top Searches Banner

Search Results with Multi-Select

Search History Section

Add them to your README like:

markdown
Copy code
![Login Page](./docs/login.png)
![Search Results](./docs/search-grid.png)
🧾 Example API Test (Postman / curl)
Search Images
bash
Copy code
curl -X POST http://localhost:5000/api/search \
  -H "Content-Type: application/json" \
  -d '{"term":"sunsets"}' \
  -b cookies.txt
Top Searches
bash
Copy code
curl -X GET http://localhost:5000/api/top-searches
🧰 Tools Used During Development
VS Code – writing & debugging code

GitHub – version control & branch management

Postman – testing APIs

MongoDB Atlas – cloud database

Google Cloud Console – OAuth credentials

Unsplash Developer Portal – image search key

📚 What I Learned
✅ How to integrate OAuth authentication in Express
✅ How to use MongoDB to track user data
✅ How to fetch data from a third-party API (Unsplash)
✅ How to build an interactive React frontend
✅ How to manage Git branches and commits properly
✅ How to secure sensitive data with .env files

🧾 License
This project is for educational purposes as part of a Full Stack Developer internship assignment.

