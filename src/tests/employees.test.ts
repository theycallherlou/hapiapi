import request from 'supertest';
import app from '../lib/app';

describe('Employee API', () => {
  describe('GET /api/v1/employees', () => {
    it('should return a list of employees', async () => {
      const response = await request(app).get('/api/v1/employees');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });
});
