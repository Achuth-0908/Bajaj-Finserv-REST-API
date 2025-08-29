const request = require('supertest');
const app = require('../server');

describe('Full Stack REST API', () => {
  describe('GET /', () => {
    it('should return API information', async () => {
      const res = await request(app)
        .get('/')
        .expect(200);

      expect(res.body).toHaveProperty('message');
      expect(res.body).toHaveProperty('version');
      });
    });
  });

  describe('POST /bfhl', () => {
    it('should process Example A correctly', async () => {
      const inputData = {
        data: ["a", "1", "334", "4", "R", "$"]
      };

      const res = await request(app)
        .post('/bfhl')
        .send(inputData)
        .expect(200);

      expect(res.body.is_success).toBe(true);
      expect(res.body.odd_numbers).toEqual(["1"]);
      expect(res.body.even_numbers).toEqual(["334", "4"]);
      expect(res.body.alphabets).toEqual(["A", "R"]);
      expect(res.body.special_characters).toEqual(["$"]);
      expect(res.body.sum).toBe("339");
      expect(res.body.concat_string).toBe("Ra");
    });

    it('should process Example B correctly', async () => {
      const inputData = {
        data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
      };

      const res = await request(app)
        .post('/bfhl')
        .send(inputData)
        .expect(200);

      expect(res.body.odd_numbers).toEqual(["5"]);
      expect(res.body.even_numbers).toEqual(["2", "4", "92"]);
      expect(res.body.alphabets).toEqual(["A", "Y", "B"]);
      expect(res.body.special_characters).toEqual(["&", "-", "*"]);
      expect(res.body.sum).toBe("103");
      expect(res.body.concat_string).toBe("ByA");
    });

    it('should process Example C correctly', async () => {
      const inputData = {
        data: ["A", "ABcD", "DOE"]
      };

      const res = await request(app)
        .post('/bfhl')
        .send(inputData)
        .expect(200);

      expect(res.body.odd_numbers).toEqual([]);
      expect(res.body.even_numbers).toEqual([]);
      expect(res.body.alphabets).toEqual(["A", "ABCD", "DOE"]);
      expect(res.body.special_characters).toEqual([]);
      expect(res.body.sum).toBe("0");
      expect(res.body.concat_string).toBe("EoDdCbAa");
    });

    it('should handle empty array', async () => {
      const inputData = {
        data: []
      };

      const res = await request(app)
        .post('/bfhl')
        .send(inputData)
        .expect(400);

      expect(res.body.is_success).toBe(false);
    });

    it('should handle missing data field', async () => {
      const inputData = {};

      const res = await request(app)
        .post('/bfhl')
        .send(inputData)
        .expect(400);

      expect(res.body.is_success).toBe(false);
    });

    it('should handle large input array', async () => {
      const inputData = {
        data: Array(10001).fill("1")
      };

      const res = await request(app)
        .post('/bfhl')
        .send(inputData)
        .expect(400);

      expect(res.body.is_success).toBe(false);
      expect(res.body.message).toContain('large');
    });

    it('should include metadata in response', async () => {
      const inputData = {
        data: ["a", "1"]
      };

      const res = await request(app)
        .post('/bfhl')
        .send(inputData)
        .expect(200);

      expect(res.body).toHaveProperty('metadata');
      expect(res.body.metadata).toHaveProperty('processing_time_ms');
      expect(res.body.metadata).toHaveProperty('timestamp');
      expect(res.body.metadata).toHaveProperty('api_version');
    });

    it('should handle negative numbers correctly', async () => {
      const inputData = {
        data: ["-1", "-2", "3", "4"]
      };

      const res = await request(app)
        .post('/bfhl')
        .send(inputData)
        .expect(200);

      expect(res.body.odd_numbers).toEqual(["-1", "3"]);
      expect(res.body.even_numbers).toEqual(["-2", "4"]);
      expect(res.body.sum).toBe("4");
    });

    it('should handle decimal numbers correctly', async () => {
      const inputData = {
        data: ["1.5", "2.0", "a"]
      };

      const res = await request(app)
        .post('/bfhl')
        .send(inputData)
        .expect(200);

      expect(res.body.odd_numbers).toEqual(["2.0"]);
      expect(res.body.even_numbers).toEqual([]);
      expect(res.body.alphabets).toEqual(["A"]);
    });
  });

  describe('GET /bfhl', () => {
    it('should return operation information', async () => {
      const res = await request(app)
        .get('/bfhl')
        .expect(200);

      expect(res.body).toHaveProperty('operation_code');
      expect(res.body).toHaveProperty('message');
      expect(res.body).toHaveProperty('expected_format');
    });
  });

  describe('404 handler', () => {
    it('should handle non-existent routes', async () => {
      const res = await request(app)
        .get('/nonexistent')
        .expect(404);

      expect(res.body.is_success).toBe(false);
      expect(res.body.message).toContain('not found');
    });
  });