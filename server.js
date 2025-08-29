const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bfhlRouter = require('./routes/bfhl');

app.use('/bfhl', bfhlRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Full Stack REST API',
    endpoints: {
      'POST /bfhl': 'Process array data and return categorized results'
    }
  });
});

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    is_success: false,
    message: 'Internal server error'
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Main Endpoint: http://localhost:${PORT}/bfhl`);
});

module.exports = app;
