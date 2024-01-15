const express = require('express');
const app = require('./app');

const port = 8080;

app.listen(port, () => {
    console.log(`TP app listening on port http://localhost:${port}`);
})