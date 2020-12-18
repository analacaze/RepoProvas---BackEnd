const connection = require("../src/database");
const supertest = require('supertest');
const app = require('../src/app');

afterAll(async () => {
	connection.end();
});

describe('GET /tests/teacher/:id', () => {
    it('should return 200 on success getting tests', async () => { 
        const response = await supertest(app).get('/api/tests/teacher/6').send();
        expect(response.status).toBe(200);
    });
});

describe('GET /tests/subject/:id', () => {
    it('should return 200 on success getting tests', async () => { 
        const response = await supertest(app).get('/api/tests/subject/6').send();
        expect(response.status).toBe(200);
    });
});