const express = require('express');
const router = express.Router();
const { processArrayData, validateInput } = require('../controllers/bfhlController');

router.post('/', async (req, res) => {
  try {
    const validation = validateInput(req.body);
    if (!validation.isValid) {
      return res.status(400).json({
        is_success: false,
        message: validation.message
      });
    }
    
    const result = await processArrayData(req.body.data);
    res.status(200).json(result);
  } catch (error) {
    console.error('Processing error:', error);
    res.status(500).json({
      is_success: false,
      message: 'Failed to process data'
    });
  }
});

router.get('/', (req, res) => {
  res.status(200).json({
    operation_code: 1,
    message: 'This endpoint accepts POST requests only'
  });
});

module.exports = router;