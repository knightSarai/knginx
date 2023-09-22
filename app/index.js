const express = require('express');
const os = require('os');

const app = express();
const port = 8080;
const hostname = os.hostname();

app.get('/', (_, res) => {
    res.send(`Hello from ${hostname}`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
