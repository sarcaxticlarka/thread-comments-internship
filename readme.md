# 💬 Threaded Comments System

A modern, full-stack web application that implements a threaded comment system with real-time interactions. This project demonstrates a complete MERN-like stack implementation with nested comment functionality, like system, and responsive UI design.

## 🚀 Features

- **Threaded Comments**: Create nested comment threads with unlimited depth
- **Real-time Interactions**: Like comments and see instant updates
- **Responsive Design**: Beautiful, mobile-friendly UI with gradient themes
- **User Experience**: 
  - Animated loading states
  - Form validation
  - Error handling
  - Visual thread indicators
  - Unique avatar generation per user
- **RESTful API**: Clean backend architecture with proper separation of concerns

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.5.4** - React framework with  
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **ESLint 9** - Code linting and formatting

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web application framework
- **MongoDB** - NoSQL database for data persistence
- **Mongoose 8.19.0** - MongoDB object modeling
- **CORS 2.8.5** - Cross-origin resource sharing
- **Nodemon 3.1.10** - Development auto-restart utility

### Architecture
- **Client-Server Architecture**: Separate frontend and backend applications
- **RESTful API Design**: Clean API endpoints for comments management
- **Component-Based Frontend**: Reusable React components
 
## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)
- **MongoDB**  

## 🚀 Setup and Installation

### 1. Clone the Repository
```bash
git clone https://github.com/sarcaxticlarka/thread-comments-internship
cd thread-comments-internship
```

### 2. Install Dependencies

**Install server dependencies:**
```bash
cd server
npm install
```

**Install client dependencies:**
```bash
cd ../client
npm install
```

### 3. Database Setup

**Option A: Local MongoDB**
1. Install MongoDB locally
 
 
### 4. Configuration

The application uses default configurations:
- **MongoDB**: `mongodb://localhost:27017/threaded-comments`
- **Server Port**: `4000`
- **Client Port**: `3000` 
To modify these settings, edit:
- Database URL: `server/src/index.js`
- Server port: `server/src/index.js`
- API proxy: `client/next.config.mjs`

## 🏃‍♂️ Running the Application

### 1. Start the Backend Server
```bash
cd server
npm start
```
The server will start on `http://localhost:4000`

### 2. Start the Frontend Client
Open a new terminal:
```bash
cd client
npm run dev
```
The client will start on `http://localhost:3000` (or next available port)

 

## 📁 Project Structure

```
thread-comments-internship/
├── client/                 # Next.js frontend application
│   ├── app/
│   │   ├── globals.css    # Global styles
│   │   ├── layout.js      # App layout
│   │   └── page.js        # Main page component
│   ├── components/
│   │   ├── avatar.jsx     # User avatar component
│   │   ├── comment.jsx    # Individual comment component
│   │   ├── commentList.jsx # Comment list with threading
│   │   └── replyForm.jsx  # Reply form component
│   ├── package.json       # Client dependencies
│   └── next.config.mjs    # Next.js configuration
├── server/                # Express.js backend application
│   ├── src/
│   │   ├── controllers/
│   │   │   └── commentsController.js # Comment logic
│   │   ├── models/
│   │   │   └── commentModel.js       # MongoDB schema
│   │   ├── routes/
│   │   │   └── comments.js           # API routes
│   │   ├── utils/
│   │   │   └── buildTree.js          # Thread building utility
│   │   └── index.js                  # Server entry point
│   └── package.json       # Server dependencies
└── README.md             # This file
```

## 🔌 API Endpoints

### Comments
- `GET /comments` - Retrieve all comments in threaded structure
- `POST /comments` - Create a new comment or reply
- `POST /comments/:id/like` - Like a specific comment

### Request/Response Examples

 
 