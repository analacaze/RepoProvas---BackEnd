const connection = require("../src/database");
const supertest = require('supertest');
const app = require('../src/app');

afterAll(async () => {
	connection.end();
});

describe('GET /tests', () => {
    it('should return 200 on success getting tests', async () => { 
        const response = await supertest(app).get('/api/tests').send();
        expect(response.status).toBe(200);
    });
});