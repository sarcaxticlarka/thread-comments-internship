# TypeScript Server

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL (or use Prisma's development server)

### Installation
```bash
npm install
```

### Development
```bash
# Start development server with hot reload
npm run dev

# Type checking only
npm run type-check

# Build for production
npm run build

# Start production server
npm start
```

### Project Structure
```
src/
├── types/           # TypeScript type definitions
│   └── comment.types.ts
├── lib/             # Shared utilities
│   └── prisma.ts    # Database client
├── comments/        # Comments feature
│   ├── comments.controllers.ts
│   └── comments.routes.ts
└── index.ts         # Application entry point
```

### API Endpoints
- `GET /comments` - Get all comments
- `POST /comments` - Create a new comment
- `POST /comments/:id/like` - Like a comment
- `POST /comments/:id/reply` - Reply to a comment

### Database
The project uses Prisma with PostgreSQL. Run migrations with:
```bash
npx prisma migrate dev
```