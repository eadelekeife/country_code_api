const express = require('express');
const clc = require('cli-color');
const fs = require('fs');
const path = require('path');
const util = require('util');

const app = express();
const apiRouter = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', apiRouter);

const port = process.env.PORT || 8080;
app.listen(port, console.log(clc.bgBlack.red(`App connected on port ${port}`)));