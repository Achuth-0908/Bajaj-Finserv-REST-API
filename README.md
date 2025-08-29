# 🚀 Full Stack REST API

> A modern Node.js REST API implementation with Docker support and cloud deployment

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Available-brightgreen)](https://bajaj-finserv-rest-api.onrender.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-Supported-blue.svg)](https://www.docker.com/)
[![Deploy](https://img.shields.io/badge/Deploy-Render-purple.svg)](https://render.com/)

## 🌟 Features

- ✨ RESTful API with comprehensive data processing
- 🐳 Docker containerization for consistent deployments
- ☁️ Production deployment on Render
- 🧪 Comprehensive test suite
- 🔄 Hot reload development environment
- 📊 Intelligent data categorization and processing

## 🎯 Live Demo

**Production API:** [https://bajaj-finserv-rest-api.onrender.com/](https://bajaj-finserv-rest-api.onrender.com/)

Try it out:
```bash
curl -X POST https://bajaj-finserv-rest-api.onrender.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

## 🚀 Quick Start

### Option 1: Docker (Recommended)

```bash
# Clone the repository
git clone <your-repo-url>
cd fullstack-rest-api

# Build and run with Docker
docker build -t fullstack-api .
docker run -p 3000:3000 fullstack-api
```

### Option 2: Local Development

#### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

#### Installation
```bash
# Install dependencies
npm install

# Update your personal details in config/config.js
# See configuration section below

# Start development server
npm run dev

# Or start production server
npm start
```

## ⚙️ Configuration

Update your personal details in `config/config.js`:

```javascript
const config = {
  USER_ID: "your_name_ddmmyyyy",     // Example: "john_doe_17091999"
  EMAIL: "your@email.com",           // Example: "john@xyz.com"
  ROLL_NUMBER: "YOUR_ROLL_NUMBER"    // Example: "ABCD123"
};
```

## 🐳 Docker Deployment

### Local Docker Build
```bash
# Build the image
docker build -t fullstack-api .

# Run the container
docker run -p 3000:3000 fullstack-api

# Run in detached mode
docker run -d -p 3000:3000 --name api-container fullstack-api
```

### Docker Compose (Optional)
```yaml
version: '3.8'
services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

## ☁️ Cloud Deployment

### Render Deployment
This API is deployed on Render for production use:

1. **Automatic Deployments**: Connected to your Git repository for CD/CI
2. **Environment Variables**: Configure your personal details via Render dashboard
3. **Health Checks**: Automatic monitoring and restart capabilities
4. **HTTPS**: SSL certificate automatically provisioned

**Production URL:** https://bajaj-finserv-rest-api.onrender.com/

## 📋 API Documentation

### Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/bfhl` | Process data array |
| `GET` | `/bfhl` | Get API information |
| `GET` | `/` | Basic API info |

### POST /bfhl

**Endpoint:** `https://bajaj-finserv-rest-api.onrender.com/bfhl`

**Request Body:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### Processing Logic

| Data Type | Processing Rule |
|-----------|----------------|
| **Numbers** | Separated into odd and even categories |
| **Alphabets** | Converted to uppercase |
| **Special Characters** | Non-alphanumeric characters |
| **Sum** | Total of all numeric values (string format) |
| **Concat String** | Alphabets in reverse order with alternating case |

## 🧪 Testing

### Quick Test Examples

**Example 1: Mixed Data**
```bash
curl -X POST https://bajaj-finserv-rest-api.onrender.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

**Example 2: Complex Mix**
```bash
curl -X POST https://bajaj-finserv-rest-api.onrender.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]}'
```

**Example 3: Alphabets Only**
```bash
curl -X POST https://bajaj-finserv-rest-api.onrender.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A","ABcD","DOE"]}'
```

### Automated Testing
```bash
# Run test suite
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📁 Project Architecture

```
📦 fullstack-rest-api/
├── 🐳 Dockerfile                   # Docker configuration
├── 📄 docker-compose.yml           # Docker Compose setup
├── 📄 server.js                    # Express server entry point
├── 📄 package.json                 # Project dependencies
├── 📄 .dockerignore                # Docker ignore rules
├── 📄 .gitignore                   # Git ignore rules
├── 📂 routes/
│   └── 📄 bfhl.js                 # API route definitions
├── 📂 controllers/
│   └── 📄 bfhlController.js       # Business logic & algorithms
├── 📂 config/
│   └── 📄 config.js               # Environment configuration
├── 📂 middleware/
│   └── 📄 validation.js           # Request validation
├── 📂 tests/
│   ├── 📄 bfhl.test.js            # Unit tests
│   └── 📄 integration.test.js     # Integration tests
└── 📂 docs/
    └── 📄 api-spec.json           # OpenAPI specification
```

## 🛠️ Development Scripts

```bash
npm start          # Production server
npm run dev        # Development with hot reload
npm test           # Run test suite
npm run test:watch # Tests in watch mode
npm run lint       # Code linting
npm run format     # Code formatting
npm run docker:build   # Build Docker image
npm run docker:run     # Run Docker container
```

## 🔧 Environment Variables

For production deployment, set these environment variables:

```env
NODE_ENV=production
PORT=3000
USER_ID=your_name_ddmmyyyy
EMAIL=your@email.com
ROLL_NUMBER=YOUR_ROLL_NUMBER
```

## 📊 Performance & Scaling

- **Containerized**: Docker ensures consistent performance across environments
- **Stateless Design**: Horizontal scaling ready
- **Cloud Ready**: Deployed on Render with auto-scaling capabilities
- **Health Monitoring**: Built-in health check endpoints

## 🔒 Security Features

- Input validation and sanitization
- CORS enabled for cross-origin requests
- Request rate limiting (production)
- Environment-based configuration
- Secure headers with Helmet.js

## 🚀 Deployment Options

### 1. Render (Current Production)
- **URL**: https://bajaj-finserv-rest-api.onrender.com/
- **Benefits**: Auto-deployments, SSL, monitoring
- **Setup**: Connected to Git repository

### 2. Docker Hub
```bash
# Pull and run from Docker Hub (when published)
docker pull your-username/fullstack-api
docker run -p 3000:3000 your-username/fullstack-api
```

### 3. Local Docker
```bash
# Build and deploy locally
docker build -t fullstack-api .
docker run -p 3000:3000 fullstack-api
```

## 📈 Monitoring & Logs

### Health Check
```bash
# Check API health
curl https://bajaj-finserv-rest-api.onrender.com/health

# Local health check
curl http://localhost:3000/health
```

### Logs Access
```bash
# Docker logs
docker logs <container-id>

# Render logs available in dashboard
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 API Examples

### JavaScript/Node.js
```javascript
const response = await fetch('https://bajaj-finserv-rest-api.onrender.com/bfhl', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ data: ["a", "1", "334", "4", "R", "$"] })
});
const result = await response.json();
```

### Python
```python
import requests

response = requests.post(
    'https://bajaj-finserv-rest-api.onrender.com/bfhl',
    json={"data": ["a", "1", "334", "4", "R", "$"]}
)
print(response.json())
```

## 📊 Response Examples

<details>
<summary>Click to see detailed response examples</summary>

**Input:** `["a", "1", "334", "4", "R", "$"]`
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

**Input:** `["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]`
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["5"],
  "even_numbers": ["2", "4", "92"],
  "alphabets": ["A", "Y", "B"],
  "special_characters": ["&", "-", "*"],
  "sum": "103",
  "concat_string": "bYa"
}
```
</details>

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process using port 3000
npx kill-port 3000

# Or use different port
PORT=3001 npm start
```

**Docker build fails:**
```bash
# Clean Docker cache
docker system prune

# Rebuild without cache
docker build --no-cache -t fullstack-api .
```

**Module not found:**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

- **API Issues**: Check [Render Status](https://status.render.com/)
- **Local Development**: Ensure Node.js v14+ is installed
- **Docker Issues**: Verify Docker daemon is running

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">

**🌟 Star this repository if you found it helpful!**

Made with ❤️ for modern web development

</div>
