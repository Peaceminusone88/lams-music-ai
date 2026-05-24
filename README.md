# 🎵 Lams Music AI - Complete AI Music Platform

**Lams Music AI** adalah platform musik berbasis AI yang lengkap dengan fitur generate musik, streaming, kolaborasi real-time, dan sistem monetisasi terintegrasi dengan Stripe.

## ✨ Fitur Utama

### 🎼 AI Music Generation
- Generate musik berkualitas tinggi menggunakan AI
- Multiple genre dan style options
- Real-time preview
- Batch processing untuk multiple tracks
- Integration dengan Suno AI atau model custom

### 🎧 Music Streaming
- Library personal musik
- Playlist management
- Smart recommendations
- Offline download (Premium)
- High-quality audio streaming
- Search & discovery

### 👥 Collaboration
- Real-time collaboration dengan users lain
- Version control untuk tracks
- Commenting & feedback system
- Share & publish tracks
- Permission management

### 💰 Monetization System
- Subscription plans (Free, Pro, Premium)
- Stripe payment integration
- Royalty tracking & payouts
- In-app purchases
- Affiliate program

### 📊 Analytics & Dashboard
- User statistics
- Track performance metrics
- Revenue tracking
- Download analytics
- Engagement metrics

## 🏗️ Tech Stack

### Frontend
- **React 18** + TypeScript
- **Vite** (build tool)
- **TailwindCSS** (styling)
- **Redux Toolkit** (state management)
- **Axios** (HTTP client)
- **React Query** (server state)
- **Wavesurfer.js** (audio player)

### Backend
- **Node.js** + Express.js
- **MongoDB** (database)
- **Redis** (caching & queue)
- **JWT** (authentication)
- **Stripe API** (payments)
- **Socket.io** (real-time features)

### AI Service
- **Python 3.10+**
- **FastAPI** (API framework)
- **PyTorch/TensorFlow** (ML frameworks)
- **Librosa** (audio processing)
- **FFmpeg** (media conversion)

### Infrastructure
- **Docker** & Docker Compose
- **AWS S3** (file storage)
- **GitHub Actions** (CI/CD)

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+
- Python 3.10+
- Git

### Installation

1. **Clone repository**
```bash
git clone https://github.com/Peaceminusone88/lams-music-ai.git
cd lams-music-ai
```

2. **Setup environment variables**
```bash
cp .env.example .env
# Edit .env dengan konfigurasi Anda
```

3. **Jalankan dengan Docker Compose**
```bash
docker-compose up -d
```

4. **Setup awal backend**
```bash
docker-compose exec backend npm run seed
```

5. **Akses aplikasi**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- AI Service: http://localhost:8000

### Manual Development Setup

**Backend:**
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

**AI Service:**
```bash
cd ai-service
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## 📁 Project Structure

```
lams-music-ai/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── store/          # Redux store
│   │   ├── hooks/          # Custom hooks
│   │   └── utils/          # Utilities
│   └── package.json
├── backend/                  # Node.js server
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Business logic
│   │   ├── models/         # MongoDB models
│   │   ├── middleware/     # Express middleware
│   │   ├── services/       # Business services
│   │   └── utils/          # Utilities
│   └── package.json
├── ai-service/               # Python AI service
│   ├── app/
│   │   ├── routes/         # API endpoints
│   │   ├── models/         # ML models
│   │   ├── services/       # AI services
│   │   └── utils/          # Utilities
│   └── requirements.txt
├── docker-compose.yml
├── .env.example
└── docs/
    ├── API.md
    ├── DEPLOYMENT.md
    └── ARCHITECTURE.md
```

## 🔐 Authentication

- JWT-based authentication
- Secure password hashing (bcrypt)
- Refresh token rotation
- Social login ready (OAuth2)
- Email verification

## 💳 Payment Integration

- **Stripe** untuk subscription & one-time payments
- Webhook handling untuk payment events
- Automatic invoice generation
- Revenue sharing untuk creators
- Subscription plan management

## 📚 API Documentation

API documentation tersedia di: `http://localhost:5000/api/docs`

Atau lihat file [docs/API.md](./docs/API.md)

## 🧪 Testing

```bash
# Backend tests
cd backend
npm run test

# AI Service tests
cd ai-service
pytest
```

## 🐛 Troubleshooting

### Port already in use
```bash
# Change ports in docker-compose.yml atau .env
```

### MongoDB connection error
```bash
docker-compose logs mongodb
docker-compose restart mongodb
```

### AI Service not responding
```bash
docker-compose logs ai-service
pip install -r requirements.txt
```

## 📖 Documentation

- [Frontend Guide](./frontend/README.md)
- [Backend Guide](./backend/README.md)
- [AI Service Guide](./ai-service/README.md)
- [API Reference](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Architecture](./docs/ARCHITECTURE.md)

## 📊 Roadmap

- **Week 1:** Foundation & Infrastructure
- **Week 2:** Core Features (Generation, Streaming)
- **Week 3:** Monetization & Advanced Features
- **Week 4:** Testing, Optimization & Deployment

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💻 Support

Untuk bantuan dan pertanyaan:
- GitHub Issues: [Create Issue](https://github.com/Peaceminusone88/lams-music-ai/issues)
- Email: support@lamsmusicai.com
- Discord: [Join Community](https://discord.gg/lamsmusicai)

## 🙏 Acknowledgments

- Built with ❤️ for music lovers and creators
- Inspired by platforms like Suno AI, Splice, dan BeatStars

---

**Start creating amazing music with Lams Music AI today!** 🚀🎵
