const config = require('../config/config');

function validateInput(body) {
  console.log('Posted data:', body);
  if (!body) {
    return { isValid: false, message: 'Request body is required' };
  }
  if (!body.data) {
    return { isValid: false, message: 'Data field is required' };
  }
  if (!Array.isArray(body.data)) {
    return { isValid: false, message: 'Data must be an array' };
  }
  if (body.data.length === 0) {
    return { isValid: false, message: 'Data array cannot be empty' };
  }
  if (body.data.length > 1000) {
    return { isValid: false, message: 'Data array too large (max 1000 items)' };
  }
  const invalidElements = body.data.filter(item => typeof item !== 'string');
  if (invalidElements.length > 0) {
    return { 
      isValid: false, 
      message: 'All array elements must be strings',
      invalid_count: invalidElements.length
    };
  }
  return { isValid: true };
}

function isNumeric(str) {
  return !isNaN(str) && !isNaN(parseFloat(str)) && isFinite(str);
}

function isAlphabetic(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function isSpecialCharacter(str) {
  return /^[^a-zA-Z0-9\s]+$/.test(str);
}

async function processArrayData(data) {
  try {
    const result = {
      is_success: true,
      user_id: config.USER_ID,
      email: config.EMAIL,
      roll_number: config.ROLL_NUMBER,
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
      special_characters: [],
      sum: "0",
      concat_string: ""
    };
    let numberSum = 0;
    const alphabetChars = [];
    for (const item of data) {
      if (isNumeric(item)) {
        const num = parseInt(item, 10);
        if (num % 2 === 0) {
          result.even_numbers.push(item);
        } else {
          result.odd_numbers.push(item);
        }
        numberSum += num;
      } else if (isAlphabetic(item)) {
        result.alphabets.push(item.toUpperCase());
        for (const char of item) {
          alphabetChars.push(char.toLowerCase());
        }
      } else if (isSpecialCharacter(item)) {
        result.special_characters.push(item);
      }
    }
    result.sum = numberSum.toString();
    if (alphabetChars.length > 0) {
      const reversedChars = alphabetChars.reverse();
      result.concat_string = reversedChars
        .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
        .join('');
    }
    return result;
  } catch (error) {
    console.error('Data processing error:', error);
    throw new Error('Failed to process array data');
  }
}

function getUserInfo() {
  return {
    user_id: config.USER_ID,
    email: config.EMAIL,
    roll_number: config.ROLL_NUMBER
  };
}

module.exports = {
  validateInput,
  processArrayData,
  getUserInfo,
  isNumeric,
  isAlphabetic,
  isSpecialCharacter
};