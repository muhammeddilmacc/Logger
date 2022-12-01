const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendStatus(2000);
});

app.listen(4000);