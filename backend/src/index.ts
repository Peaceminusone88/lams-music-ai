import express, { Express, Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { Server as SocketIOServer } from 'socket.io'

// Load env variables
dotenv.config()

// Import routes
import authRoutes from './routes/auth'
import musicRoutes from './routes/music'
import paymentRoutes from './routes/payment'
import userRoutes from './routes/user'
import collaborationRoutes from './routes/collaboration'

const app: Express = express()
const httpServer = createServer(app)
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ limit: '10mb', extended: true }))

// Request logging
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`)
  next()
})

// Database connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lams-music-ai')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err)
    process.exit(1)
  })

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/music', musicRoutes)
app.use('/api/payment', paymentRoutes)
app.use('/api/users', userRoutes)
app.use('/api/collaboration', collaborationRoutes)

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' })
})

// Error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err)
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  })
})

// Socket.io events
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)

  socket.on('join-studio', (roomId) => {
    socket.join(roomId)
    socket.broadcast.to(roomId).emit('user-joined', { userId: socket.id })
  })

  socket.on('leave-studio', (roomId) => {
    socket.leave(roomId)
  })

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`)
  })
})

// Start server
const PORT = process.env.PORT || 5000
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})

export default app
