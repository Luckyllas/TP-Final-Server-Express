const express = require('express');
const app = express();
const dbConnect = require('./database/dbConnection');
const jwt = require('jsonwebtoken');

app.use(express.json());

const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const getUsdValue = require('./routes/usd');

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/usd', getUsdValue);


dbConnect();

module.exports = app;