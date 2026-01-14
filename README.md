# 📚 ASE Student Notes App

A **Single Page Application (SPA)** designed to help students organize, manage, and share their course and lab notes efficiently. The platform allows students to write in Markdown, upload attachments, and collaborate via study groups.

## 🔗 Live Demo
👉 **Access the application here:** [https://web-app-for-taking-notes-during-courses.onrender.com](https://web-app-for-taking-notes-during-courses.onrender.com)

---

## 🚀 Key Features

* **🔐 Authentication:** Secure login with Google OAuth (specifically optimized for `@stud.ase.ro` accounts).
* **📂 Subject Management:** Create, edit, and delete subjects (e.g., Cybernetics, Marketing) to keep notes organized.
* **📝 Markdown Editor:** Real-time note editing with Markdown support (formatting, lists, code blocks).
* **📎 File Attachments:** Support for uploading images and documents directly to notes.
* **🏷️ Organization:** Tagging system for easy filtering (e.g., #exam, #project) and search functionality.
* **👥 Study Groups:** Create groups, invite colleagues via email, and manage memberships.
* **🤝 Sharing:** Share specific notes with study groups to collaborate with peers.

## 🛠️ Tech Stack

### Client (Frontend)
* **React.js (Vite)** - For a fast and reactive UI.
* **React Router** - For client-side routing.
* **SimpleMDE** - Markdown editor integration.
* **React Markdown** - Rendering markdown content.
* **CSS3** - Custom styling.

### Server (Backend)
* **Node.js & Express** - RESTful API architecture.
* **Sequelize** - ORM for database interaction.
* **SQLite** - Lightweight, file-based relational database.
* **Passport.js** - Google OAuth 2.0 authentication strategy.
* **Multer** - Middleware for handling file uploads.

### Deployment
* **Render** - Hosting for both the Static Site (Frontend) and Web Service (Backend).

## ⚙️ Installation & Setup (Local Development)

Follow these steps if you want to run the project locally on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/focsaiuliastefania/Web-technologies-Web-app-for-taking-notes-during-courses
cd Web-technologies-Web-app-for-taking-notes-during-courses
```

### 2. Backend Setup
```bash
cd server
npm install
```

Environment Variables (.env): Create a file named .env in the server folder with your own credentials:
```
PORT=8080
JWT_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret
```

Note: For local development, ensure your Google Cloud Console allows redirects to http://localhost:8080.

Start the backend server:
```bash
node server.js
```

### 3. Frontend Setup, in a new Terminal
```bash
cd client
npm install
```

Start the React development server:
```bash
npm run dev
```