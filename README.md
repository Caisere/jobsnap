# JobSnap 🚀

A modern, full-stack job board application built with Next.js 16, TypeScript, Prisma, and PostgreSQL. JobSnap allows users to browse job listings, post jobs, and apply for positions with an intuitive and responsive interface.

## ✨ Features

### For Job Seekers
- **Browse Jobs**: Search and filter job listings by title, company, job type (full-time, part-time, contract, internship), and location
- **Apply for Jobs**: One-click application process for job positions
- **Application Tracking**: View all your job applications and their status (Pending, Reviewing, Accepted, Rejected) from your dashboard
- **User Profile**: Manage your personal profile and view application history

### For Employers
- **Post Jobs**: Create detailed job listings with title, company, location, type, description, and salary information
- **Manage Listings**: View and manage all your posted jobs from the dashboard
- **Track Applications**: Monitor applications received for your job postings

### Authentication & Security
- **Multiple Sign-in Options**: 
  - Email & Password authentication
  - GitHub OAuth integration
- **Secure Authentication**: Powered by NextAuth.js v5 with JWT sessions
- **Password Hashing**: Bcrypt encryption for secure password storage

### User Experience
- **Responsive Design**: Fully responsive UI built with Tailwind CSS
- **Real-time Notifications**: Toast notifications for user actions using Sonner
- **Modern UI Components**: Built with Radix UI and custom components
- **Server-Side Rendering**: Optimized performance with Next.js App Router
- **Data Caching**: Efficient data fetching with Next.js unstable_cache

## 🛠️ Tech Stack

### Frontend
- **Next.js 16**: React framework with App Router
- **React 19**: Latest React features
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **Radix UI**: Accessible UI components
- **Lucide React**: Icon library
- **React Hook Form**: Form management with Zod validation

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **NextAuth.js v5**: Authentication solution
- **Prisma ORM**: Type-safe database client
- **PostgreSQL**: Relational database (Neon serverless)
- **Bcrypt**: Password hashing

### DevOps & Tools
- **ESLint**: Code linting
- **Git**: Version control

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm** or **bun**
- **PostgreSQL** database (or a Neon account)
- **GitHub OAuth App** (for GitHub sign-in)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/jobsnap.git
cd jobsnap
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
# Database
DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require

# NextAuth
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# GitHub OAuth (optional, for GitHub sign-in)
AUTH_GITHUB_ID=your-github-oauth-app-id
AUTH_GITHUB_SECRET=your-github-oauth-app-secret
```

#### Setting up GitHub OAuth (Optional)
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL to: `http://localhost:3000/api/auth/callback/github`
4. Copy the Client ID and Client Secret to your `.env` file

#### Setting up PostgreSQL Database
You can use any PostgreSQL database. For a quick setup, consider using [Neon](https://neon.tech/) for serverless PostgreSQL.

### 4. Database Setup

Run Prisma migrations to set up your database schema:

```bash
npx prisma generate
npx prisma db push
```

### 5. Seed Database (Optional)

Populate your database with sample data:

```bash
npm run seed
```

### 6. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📁 Project Structure

```
jobsnap/
├── app/                      # Next.js App Router
│   ├── about/               # About page
│   ├── api/                 # API routes
│   │   ├── auth/           # NextAuth endpoints
│   │   ├── jobs/           # Job-related APIs
│   │   ├── login/          # Login endpoint
│   │   └── register/       # Registration endpoint
│   ├── browsejobs/         # Browse jobs page
│   ├── dashboard/          # User dashboard
│   ├── postjob/           # Post job page
│   ├── privacy/           # Privacy policy
│   ├── profile/           # User profile
│   ├── signin/            # Sign in page
│   ├── signup/            # Sign up page
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── applications.tsx  # Application listings
│   ├── browse-jobs-listing.tsx
│   ├── job-listing.tsx
│   ├── navbar.tsx
│   ├── post-job-form.tsx
│   ├── posted-job.tsx
│   ├── recent-jobs.tsx
│   └── signin-form.tsx
├── lib/                  # Utility functions
│   ├── actions.ts       # Server actions
│   ├── auth.ts          # NextAuth configuration
│   ├── data-services.ts # Data fetching functions
│   ├── helper.ts        # Helper functions
│   ├── prisma.ts        # Prisma client
│   └── utils.ts         # Utility functions
├── prisma/              # Database
│   ├── schema.prisma    # Database schema
│   ├── seed.ts          # Database seeding
│   └── cleanup.ts       # Database cleanup
├── public/              # Static assets
├── .env                 # Environment variables
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## 🗄️ Database Schema

### Models

- **User**: User accounts with authentication
- **Job**: Job listings posted by users
- **Application**: Job applications from users
- **Account**: OAuth account linking (NextAuth)
- **Session**: User sessions (NextAuth)
- **VerificationToken**: Email verification tokens (NextAuth)

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run seed         # Seed database with sample data
npx prisma studio    # Open Prisma Studio (database GUI)
npx prisma generate  # Generate Prisma Client

# Code Quality
npm run lint         # Run ESLint
```

## 🔐 Authentication Flow

1. **Sign Up**: Users can create an account with email and password
2. **Sign In**: Users can sign in with:
   - Email and password
   - GitHub OAuth
3. **Session Management**: JWT-based sessions with NextAuth.js
4. **Protected Routes**: Dashboard and profile pages require authentication

## 🎨 UI Components

Built with:
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling
- **Custom Components**: Button, Form, Input, Label, Spinner, Toast notifications

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set all environment variables in your deployment platform:
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` (your production URL)
- `AUTH_GITHUB_ID` (if using GitHub OAuth)
- `AUTH_GITHUB_SECRET` (if using GitHub OAuth)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues & Troubleshooting

### Database Connection Issues
- Ensure your `DATABASE_URL` is correct and the database is accessible
- For Neon, make sure you're using the pooled connection string

### Authentication Issues
- Verify `NEXTAUTH_SECRET` is set and matches across all environments
- Check that OAuth callback URLs are correctly configured

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Check existing issues for solutions

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Authentication powered by [NextAuth.js](https://next-auth.js.org/)
- Database ORM by [Prisma](https://www.prisma.io/)

---

**Made with ❤️ by the JobSnap Team**
