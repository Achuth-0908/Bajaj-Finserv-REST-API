#Full Stack REST API

A Node.js REST API implementation
## 🚀 Quick Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm

### Installation

1. **Clone/Download the project files**
2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Update your personal details** in `config/config.js`:
   ```javascript
   const config = {
     USER_ID: "your_name_ddmmyyyy",     // e.g., "john_doe_17091999"
     EMAIL: "your@email.com",            // e.g., "john@xyz.com"
     ROLL_NUMBER: "YOUR_ROLL_NUMBER"     // e.g., "ABCD123"
   };
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

The server will run at: `http://localhost:3000`

## 📋 API Usage

### POST /bfhl
**Endpoint:** `http://localhost:3000/bfhl`

**Request Format:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response Format:**
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

## 🧪 Testing

### Test with curl:
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

### Test Examples:

**Example A:**
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

**Example B:**
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]}'
```

**Example C:**
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A","ABcD","DOE"]}'
```

### Run automated tests:
```bash
npm test
```

## 📁 Project Structure

```
📦 fullstack-rest-api/
├── 📄 server.js                    # Main Express server
├── 📄 package.json                 # Dependencies
├── 📂 routes/
│   └── 📄 bfhl.js                 # API routes
├── 📂 controllers/
│   └── 📄 bfhlController.js       # Business logic
├── 📂 config/
│   └── 📄 config.js               # Configuration
└── 📂 tests/
    └── 📄 bfhl.test.js            # Test cases
```

## ⚙️ Configuration

Update your details in `config/config.js`:

- **USER_ID**: Format should be `firstname_lastname_ddmmyyyy` (all lowercase)
- **EMAIL**: Your email address
- **ROLL_NUMBER**: Your college roll number

## 🔍 API Logic

- **Numbers**: Categorized as odd or even
- **Alphabets**: Converted to uppercase
- **Special Characters**: Non-alphanumeric characters
- **Sum**: Total of all numeric values (returned as string)
- **Concat String**: All alphabetic characters in reverse order with alternating capitalization

## 📞 Endpoints

- `POST /bfhl` - Main processing endpoint
- `GET /bfhl` - API information
- `GET /` - Basic API info

## 🛠️ Available Scripts

- `npm start` - Start the server
- `npm run dev` - Start with auto-reload (nodemon)
- `npm test` - Run test suite

---
