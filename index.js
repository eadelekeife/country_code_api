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
    readFile(url, 'utf-8')
        .then(data => {
            console.log(JSON.parse(data)[0])
        })
    res.send('done');
})

apiRouter.get('/country/:name', (req, res) => {
    let url = path.join(__dirname, 'countries.json');
    let readFile = util.promisify(fs.readFile);
    readFile(url, 'utf-8')
        .then(data => {
            let newCountryData = JSON.parse(data);
            let filteredCountry = newCountryData.find(country => {
                if (country.code.toLowerCase() === req.params.name.toLowerCase()) {
                    return country;
                }
            })
            if (filteredCountry) {
                let successMessage = {
                    status: 200,
                    statusMessage: "success",
                    summary: 'Country data fetched successfully',
                    message: filteredCountry
                };
                res.json(successMessage);
            } else {
                let errorMessage = {
                    status: 404,
                    statusMessage: "error",
                    summary: 'Country not found',
                    message: ''
                };
                res.json(errorMessage);
            }
        })
        .catch(err => {
            let errorMessage = {
                status: 400,
                statusMessage: "error",
                summary: 'Failed to fetch Country data',
                message: ''
            };
            res.json(errorMessage);
        })
})

apiRouter.get('/country/flag/:name', (req, res) => {
    let url = path.join(__dirname, 'countries.json');
    let readFile = util.promisify(fs.readFile);
    readFile(url, 'utf-8')
        .then(data => {
            let newCountryData = JSON.parse(data);
            let filteredCountry = newCountryData.find(country => {
                if (country.code.toLowerCase() === req.params.name.toLowerCase()) {
                    return country;
                }
            })
            if (filteredCountry) {
                let successMessage = {
                    status: 200,
                    statusMessage: "success",
                    summary: 'Country data fetched successfully',
                    message: filteredCountry.flag
                };
                res.json(successMessage);
            } else {
                let errorMessage = {
                    status: 404,
                    statusMessage: "error",
                    summary: 'Country not found',
                    message: ''
                };
                res.json(errorMessage);
            }
        })
        .catch(err => {console.log(err)
            let errorMessage = {
                status: 400,
                statusMessage: "error",
                summary: 'Failed to fetch Country data',
                message: ''
            };
            res.json(errorMessage);
        })
})

apiRouter.get('/currency/:name', (req, res) => {
    let url = path.join(__dirname, 'countries.json');
    let readFile = util.promisify(fs.readFile);
    readFile(url, 'utf-8')
        .then(data => {
            let newCountryData = JSON.parse(data);
            let filteredCountry = newCountryData.filter(country => {
                if (country.code.toLowerCase() === req.params.name.toLowerCase()) {
                    return country.currency;
                }
            })
            res.send(filteredCountry)
        })
})

apiRouter.get('/states/:name', (req, res) => {
    let url = path.join(__dirname, 'countries.json');
    let readFile = util.promisify(fs.readFile);
    readFile(url, 'utf-8')
        .then(data => {
            let newCountryData = JSON.parse(data);
            let filteredCountry = newCountryData.filter(country => {
                if (country.code.toLowerCase() === req.params.name.toLowerCase()) {
                    return country.states;
                }
            })
            res.send(filteredCountry)
        })
})

apiRouter.get('/continent/:name', (req, res) => {
    let url = path.join(__dirname, 'countries.json');
    let readFile = util.promisify(fs.readFile);
    readFile(url, 'utf-8')
        .then(data => {
            let newCountryData = JSON.parse(data);
            let filteredCountry = newCountryData.filter(country => {
                if (country.code.toLowerCase() === req.params.name.toLowerCase()) {
                    return country.continent;
                }
            })
            res.send(filteredCountry)
        })
})

apiRouter.get('/continent', (req, res) => {
    let url = path.join(__dirname, 'countries.json');
    let readFile = util.promisify(fs.readFile);
    readFile(url, 'utf-8')
        .then(data => {
            let newCountryData = JSON.parse(data);
            let continentCountries = [];
            newCountryData.forEach(country => {
                if (country.continent.toLowerCase() === req.params.name.toLowerCase()) {
                    continentCountries.push(country);
                }
            })
            res.send(continentCountries)
        })
})

const port = process.env.PORT || 8080;
app.listen(port, console.log(clc.bgBlack.red(`App connected on port ${port}`)));