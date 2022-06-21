const express = require('express');
const clc = require('cli-color');
const fs = require('fs');
const path = require('path');
const util = require('util');

const app = express();
const apiRouter = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1/countries', apiRouter);

apiRouter.get('/countries', (req, res) => {
    let url = path.join(__dirname, 'countries.json');
    let readFile = util.promisify(fs.readFile);
    readFile(url)
    .then(data => {
        console.log(data)
    })
    res.send('done');
})

const port = process.env.PORT || 8080;
app.listen(port, console.log(clc.bgBlack.red(`App connected on port ${port}`)));