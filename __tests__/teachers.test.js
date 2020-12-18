const connection = require("../src/database");
const supertest = require('supertest');
const app = require('../src/app');

afterAll(async () => {
	connection.end();
});

describe('GET /teachers', () => {
    it('should return 200 on success getting teachers', async () => { 
        const response = await supertest(app).get('/api/teachers').send();
        expect(response.status).toBe(200);
    });
});