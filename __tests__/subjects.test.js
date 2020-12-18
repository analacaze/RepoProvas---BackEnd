const connection = require("../src/database");
const supertest = require('supertest');
const app = require('../src/app');

afterAll(async () => {
	connection.end();
});

describe('GET /subjects', () => {
    it('should return 200 on success getting subjects', async () => { 
        const response = await supertest(app).get('/api/subjects').send();
        expect(response.status).toBe(200);
    });
});