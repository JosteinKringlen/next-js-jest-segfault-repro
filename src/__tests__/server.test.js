const request = require('supertest');
const createServer = require('../server');

let agent;
beforeAll(async () => {
    agent = request(await createServer({ port: 3031, development: false }));
});

test('index should respond with 200 OK', async () => {
    await agent.get('/').expect(200);
});

test('page b should respond with 200 OK', async () => {
    await agent.get('/a').expect(200);
});

test('page a should respond with 200 OK', async () => {
    await agent.get('/b').expect(200);
});
