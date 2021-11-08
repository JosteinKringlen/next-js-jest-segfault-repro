const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

async function createServer({ port = 3000, development = dev } = {}) {
    const app = next({ dev: development, port });
    const handle = app.getRequestHandler();

    const server = express();

    await app.prepare();

    server.all('*', (req, res) => handle(req, res));

    return server;
}

module.exports = createServer;
