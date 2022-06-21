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
    readFile(url,'utf-8')
    .then(data => {
        console.log(JSON.parse(data)[0])
    })
    res.send('done');
})

apiRouter.get('/countries/:name', (req, res) => {
    let url = path.join(__dirname, 'countries.json');
    let readFile = util.promisify(fs.readFile);
    readFile(url,'utf-8')
    .then(data => {
        let newCountryData = JSON.parse(data);
        let filteredCountry = newCountryData.filter(country => {
            if(country.code.toLowerCase() === req.params.name.toLowerCase()) {
                return country;
            }
        })
        res.send(filteredCountry)
    })
    // res.send('done');
})

const port = process.env.PORT || 8080;
app.listen(port, console.log(clc.bgBlack.red(`App connected on port ${port}`)));