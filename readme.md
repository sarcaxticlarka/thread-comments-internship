# 💬 Thread Comments System# 💬 Thread Comments System

A modern, scalable threaded comments system built with **Turborepo** monorepo architecture, featuring lazy loading, authentication, and real-time interactions with unlimited nesting depth.A modern, scalable threaded comments system built with TypeScript, Next.js, Express, Prisma, and PostgreSQL. Features lazy loading, authentication, and real-time interactions.



## 🏗️ Architecture## 🚀 Quick Start



This project uses **Turborepo** to manage a monorepo with two main packages:### Prerequisites

- **Client**: Next.js 15 React frontend with Tailwind CSS- Node.js 18+ 

- **Server**: TypeScript Express.js backend with Prisma ORM- PostgreSQL database

- npm or yarn

## 🚀 Quick Start

### One-Command Setup

### Prerequisites```bash

- **Node.js** 18+ # Clone and setup everything

- **PostgreSQL** databasegit clone <your-repo-url>

- **npm** (recommended) or yarncd thread-comments-internship

npm install

### One-Command Setupnpm run setup

```bash```

# Clone repository

git clone <your-repo-url>### Manual Setup

cd thread-comments-internship```bash

# Install dependencies

# Install all dependencies for both client and servernpm install

npm install

# Set up environment variables

# Set up environment variables (see Environment Setup below)cp server/.env.example server/.env

# Then build and start everything# Edit server/.env with your database URL

npm run start

```cp client/.env.example client/.env.local

# Edit client/.env.local with your API URL

The `npm run start` command will:

1. Build both client and server applications using Turborepo# Generate Prisma client and build

2. Start the production server (Express.js backend)npm run db:generate

3. Start the production client (Next.js frontend)npm run build

```

## 🛠️ Development

## � Project Structure

### Development Mode

```bash```

# Start both client and server in development modethread-comments-internship/

npm run dev├── client/                 # Next.js frontend

```│   ├── app/               # App router pages

│   ├── components/        # React components

This runs:│   └── package.json

- **Server**: Express.js with hot reload on `http://localhost:3001`├── server/                # Express backend

- **Client**: Next.js with hot reload on `http://localhost:3000`│   ├── src/

│   │   ├── comments/      # Comment controllers & routes

### Individual Package Commands│   │   ├── auth/          # Authentication

```bash│   │   ├── middleware/    # Express middleware

# Build everything│   │   ├── utils/         # Utilities (buildTree, etc)

npm run build│   │   └── index.ts       # Server entry point

│   ├── prisma/            # Database schema

# Clean build artifacts│   └── package.json

npm run clean├── turbo.json             # Turborepo configuration

└── package.json           # Root workspace

# Database operations```

npm run db:push          # Push schema to database

npm run db:generate      # Generate Prisma client## 🛠️ Development Scripts

npm run db:studio        # Open Prisma Studio

npm run db:migrate       # Run migrations### Start Development (Both Apps)

npm run db:seed          # Seed database with sample data```bash

```npm run dev                # Start both client and server in dev mode

```

## ⚙️ Environment Setup

### Individual Development

### Server Environment```bash

Create `server/.env` with:npm run server:dev         # Start only backend server

```envnpm run client:dev         # Start only frontend client

# Database```

DATABASE_URL="postgresql://username:password@localhost:5432/thread_comments"

### Database Operations

# JWT```bash

JWT_SECRET="your-super-secret-jwt-key"npm run db:generate        # Generate Prisma client

npm run db:push           # Push schema to database

# Servernpm run db:migrate        # Create and run migrations

PORT=3001npm run db:studio         # Open Prisma Studio

NODE_ENV=developmentnpm run db:seed           # Seed database with sample data

``````



### Client Environment  ### Build & Production

Create `client/.env.local` with:```bash

```envnpm run build             # Build both applications

# API Configurationnpm run start             # Start both applications in production

NEXT_PUBLIC_API_URL=http://localhost:3001/api```

```

### Utilities

## 🗄️ Database Setup```bash

npm run lint              # Lint all projects

1. **Create PostgreSQL database**:npm run type-check        # TypeScript type checking

   ```bashnpm run clean             # Clean build artifacts

   createdb thread_comments```

   ```

## 🔧 Environment Variables

2. **Configure DATABASE_URL** in `server/.env`

### Server (.env)

3. **Initialize database**:```env

   ```bashDATABASE_URL="postgresql://username:password@localhost:5432/comments_db"

   npm run db:push      # Create tablesJWT_SECRET="your-secret-key-here"

   npm run db:generate  # Generate Prisma clientPORT=8000

   npm run db:seed     # Add sample data (optional)```

   ```

### Client (.env.local)

## 📦 Tech Stack```env

NEXT_PUBLIC_API_URL=http://localhost:8000

### Monorepo Management```

- **Turborepo** - Build system and task orchestration

- **npm Workspaces** - Package management## 🎯 Features



### Frontend (Client)### ✅ Core Features

- **Next.js 15** - React framework with App Router- **Threaded Comments**: Nested comment structure with visual threading

- **React 19** - UI library with latest features- **Lazy Loading**: Load replies on-demand for better performance

- **Tailwind CSS 4** - Utility-first CSS framework- **Authentication**: JWT-based auth with login/logout

- **TypeScript** - Type safety (via JSConfig)- **Real-time Updates**: Optimistic UI updates

- **Responsive Design**: Mobile-friendly interface

### Backend (Server)  

- **Node.js** - JavaScript runtime### ✅ Technical Features

- **Express.js** - Web framework- **TypeScript**: Full type safety across frontend and backend

- **TypeScript** - Type safety and modern JS features- **Prisma ORM**: Type-safe database operations

- **Prisma** - Database ORM and migrations- **Turborepo**: Monorepo with optimized build caching

- **PostgreSQL** - Relational database- **Modern React**: Next.js 15 with App Router

- **JWT** - Authentication tokens- **Express Server**: RESTful API with middleware

- **PostgreSQL**: Robust relational database

### Development Tools

- **ESLint** - Code linting## 📚 API Endpoints

- **Prettier** - Code formatting  

- **PostCSS** - CSS processing### Comments

- **Docker** - Containerization support- `GET /comments` - Get paginated root comments

- `POST /comments` - Create new comment (auth required)

## 🎯 Key Features- `GET /comments/:id/replies` - Get replies for specific comment

- `POST /comments/:id/reply` - Reply to comment (auth required)

### Comments System- `POST /comments/:id/like` - Like comment (auth required)

- **Unlimited nesting depth** - Comments can be nested infinitely

- **Lazy loading** - Load replies on demand for performance### Authentication

- **Real-time updates** - Instant comment posting and loading- `POST /auth/login` - Login with credentials

- **User authentication** - JWT-based auth with user sessions

## 🧪 Demo Authentication

### Performance Optimizations

- **Tree building algorithm** - Efficient comment hierarchy constructionFor testing purposes, use these credentials:

- **Lazy loading** - Load nested replies only when requested- **Username**: Any username you like

- **Caching** - Turborepo build caching for faster builds- **Password**: `demo123`

- **Component-based architecture** - Reusable React components

## 🏗️ Architecture Decisions

### Developer Experience

- **Unified commands** - Single commands to manage entire monorepo### Lazy Loading Strategy

- **Type safety** - Full TypeScript support across frontend and backend- Parent comments load immediately

- **Hot reload** - Instant development feedback- Child comments load on-demand via "Load replies" button

- **Database tooling** - Prisma Studio, migrations, and seeding- Supports infinite nesting levels

- Pagination support for large reply threads

## 📁 Project Structure

### Database Design

```- Self-referencing Comment model with `parentId`

thread-comments-internship/- String IDs using `cuid()` for better performance

├── package.json                 # Root Turborepo configuration- Optimized queries with proper indexing

├── turbo.json                  # Turborepo build configuration

├── README.md                   # This file### Authentication Flow

│- JWT tokens with 24-hour expiration

├── client/                     # Next.js Frontend Package- Token stored in localStorage

│   ├── package.json           # Client dependencies and scripts- Protected routes for write operations

│   ├── next.config.mjs        # Next.js configuration- Automatic login state persistence

│   ├── tailwind.config.js     # Tailwind CSS configuration

│   ├── app/                   # Next.js App Router## 🔮 Future Enhancements

│   │   ├── layout.js          # Root layout

│   │   ├── page.js            # Home page- [ ] Real-time updates with WebSockets

│   │   └── globals.css        # Global styles- [ ] Comment reactions (beyond likes)

│   ├── components/            # React Components- [ ] User profiles and avatars

│   │   ├── comment.jsx        # Individual comment display- [ ] Comment moderation system

│   │   ├── commentList.jsx    # Comments container- [ ] Full-text search

│   │   ├── replyForm.jsx      # Reply input form- [ ] Email notifications

│   │   └── avatar.jsx         # User avatar component- [ ] Comment threading depth limits

│   └── utils/                 # Client utilities- [ ] Rich text editor support

│       └── api.js            # API fetch wrapper

│## 🤝 Contributing

└── server/                    # Express.js Backend Package

    ├── package.json          # Server dependencies and scripts1. Fork the repository

    ├── tsconfig.json         # TypeScript configuration2. Create a feature branch: `git checkout -b feature/amazing-feature`

    ├── prisma/               # Database Schema and Migrations3. Commit changes: `git commit -m 'Add amazing feature'`

    │   ├── schema.prisma     # Database schema definition4. Push to branch: `git push origin feature/amazing-feature`

    │   └── seed.ts           # Database seeding script5. Open a Pull Request

    └── src/                  # TypeScript source code

        ├── index.ts          # Express server entry point## 📄 License

        ├── controllers/      # Request handlers

        │   └── commentsController.jsThis project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

        ├── models/           # Data models

        │   └── commentModel.js---

        ├── routes/           # API route definitions

        │   └── comments.jsBuilt with ❤️ using modern web technologies

        └── utils/            # Server utilities 

            └── buildTree.js  # Comment tree builder## 📋 Prerequisites

```

Before running this application, make sure you have the following installed:

## 🔧 Available Scripts

- **Node.js** (v16 or higher)

### Root Level (Turborepo)- **npm** (v7 or higher)

```bash- **MongoDB**  

npm run dev          # Start both apps in development mode

npm run build        # Build both apps for production## 🚀 Setup and Installation

npm run start        # Build and start both apps in production

npm run clean        # Clean all build artifacts### 1. Clone the Repository

npm run setup        # Initial project setup script```bash

```git clone https://github.com/sarcaxticlarka/thread-comments-internship

cd thread-comments-internship

### Database Scripts (run from root)```

```bash

npm run db:push      # Push Prisma schema to database### 2. Install Dependencies

npm run db:generate  # Generate Prisma client

npm run db:studio    # Open Prisma Studio (database GUI)**Install server dependencies:**

npm run db:migrate   # Run database migrations```bash

npm run db:seed      # Seed database with sample datacd server

npm run db:reset     # Reset database (caution: deletes data)npm install

``````



## 🐳 Docker Support**Install client dependencies:**

```bash

The project includes Docker configuration for containerized deployment:cd ../client

npm install

```bash```

# Build and run with Docker Compose

docker-compose up --build### 3. Database Setup



# Or build individual containers**Option A: Local MongoDB**

docker build -t thread-comments-client ./client1. Install MongoDB locally

docker build -t thread-comments-server ./server 

``` 

### 4. Configuration

## 🤝 API Integration

The application uses default configurations:

The client uses an environment-based API wrapper located at `client/utils/api.js`:- **MongoDB**: `mongodb://localhost:27017/threaded-comments`

- **Server Port**: `4000`

```javascript- **Client Port**: `3000` 

// Automatically uses NEXT_PUBLIC_API_URL from environmentTo modify these settings, edit:

import { apiRequest } from '../utils/api';- Database URL: `server/src/index.js`

- Server port: `server/src/index.js`

// Example usage- API proxy: `client/next.config.mjs`

const comments = await apiRequest('/comments');

const newComment = await apiRequest('/comments/create', {## 🏃‍♂️ Running the Application

  method: 'POST',

  body: { content: 'Hello world!', parentId: null }### 1. Start the Backend Server

});```bash

```cd server

npm start

## 🔍 Troubleshooting```

The server will start on `http://localhost:4000`

### Common Issues

### 2. Start the Frontend Client

**Build failures:**Open a new terminal:

```bash```bash

npm run cleancd client

npm installnpm run dev

npm run build```

```The client will start on `http://localhost:3000` (or next available port)



**Database connection issues:** 

1. Verify PostgreSQL is running

2. Check `DATABASE_URL` in `server/.env`## 📁 Project Structure

3. Run `npm run db:push` to create tables

```

**Port conflicts:**thread-comments-internship/

- Server runs on port 3001├── client/                 # Next.js frontend application

- Client runs on port 3000│   ├── app/

- Check if ports are available or update configurations│   │   ├── globals.css    # Global styles

│   │   ├── layout.js      # App layout

**Environment variables:**│   │   └── page.js        # Main page component

- Ensure `server/.env` and `client/.env.local` are properly configured│   ├── components/

- Restart dev servers after environment changes│   │   ├── avatar.jsx     # User avatar component

│   │   ├── comment.jsx    # Individual comment component

## 📝 Development Workflow│   │   ├── commentList.jsx # Comment list with threading

│   │   └── replyForm.jsx  # Reply form component

1. **Clone and setup**:│   ├── package.json       # Client dependencies

   ```bash│   └── next.config.mjs    # Next.js configuration

   git clone <repo-url>├── server/                # Express.js backend application

   cd thread-comments-internship│   ├── src/

   npm install│   │   ├── controllers/

   ```│   │   │   └── commentsController.js # Comment logic

│   │   ├── models/

2. **Configure environment** (see Environment Setup above)│   │   │   └── commentModel.js       # MongoDB schema

│   │   ├── routes/

3. **Initialize database**:│   │   │   └── comments.js           # API routes

   ```bash│   │   ├── utils/

   npm run db:push│   │   │   └── buildTree.js          # Thread building utility

   npm run db:generate│   │   └── index.js                  # Server entry point

   ```│   └── package.json       # Server dependencies

└── README.md             # This file

4. **Start development**:```

   ```bash

   npm run dev## 🔌 API Endpoints

   ```

### Comments

5. **Build for production**:- `GET /comments` - Retrieve all comments in threaded structure

   ```bash- `POST /comments` - Create a new comment or reply

   npm run build- `POST /comments/:id/like` - Like a specific comment

   npm run start

   ```### Request/Response Examples



## 🚀 Production Deployment 

 
For production deployment:

1. **Set production environment variables**
2. **Build the applications**:
   ```bash
   npm run build
   ```
3. **Start production servers**:
   ```bash
   npm run start
   ```

The unified Turborepo setup ensures consistent builds and deployments across all environments.

---

Built with ❤️ using Turborepo, Next.js, and TypeScript.