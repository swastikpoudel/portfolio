import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import contactRoutes from './routes/contact.js';
import projectRoutes from './routes/projects.js';

const app = express();
const prisma = new PrismaClient();

// Middleware - Allow both www and non-www
app.use(cors({
  origin: ['https://swastikpoudel.com.np', 'https://www.swastikpoudel.com.np'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});