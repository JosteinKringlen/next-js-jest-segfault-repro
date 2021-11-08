const createServer = require('./server');

const port = 3000;
createServer({ port })
    .then((server) => server.listen(port))
    .then(() => {
        console.log(`> Server listening on port ${port}`);
    });
