import request from 'supertest';
import app from '../lib/app';

describe('GET /users', () => {
  it('should return a list of users', async () => {
    const response = await request(app).get('/api/v1/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
