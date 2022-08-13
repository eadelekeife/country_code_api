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

apiRouter.get('/', (req, res) => {
    let url = path.join(__dirname, 'countries.json');
    let readFile = util.promisify(fs.readFile);
    readFile(url, 'utf-8')
        .then(data => {
            let successMessage = {
                status: 200,
                statusMessage: "success",
                summary: 'Country data fetched successfully',
                message: JSON.parse(data)
            };
            res.json(successMessage);
        })
        .catch(err => {
            let errorMessage = {
                status: 404,
                statusMessage: "error",
                summary: 'An error occurred while fetching country data. Please try again',
                message: ''
            };
            res.json(errorMessage);
        })
})

apiRouter.get('/country', (req, res) => {
    if (req.query.countryCode || req.query.name) {
        let url = path.join(__dirname, 'countries.json');
        let readFile = util.promisify(fs.readFile);
        readFile(url, 'utf-8')
            .then(data => {
                let newCountryData = JSON.parse(data);
                let filteredCountry = newCountryData.find(country => {
                    if ((country.code.toLowerCase() === req.query?.countryCode?.toLowerCase()) ||
                        (country.name.toLowerCase() === req.query?.name?.toLowerCase())
                    ) {
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
    } else {
        let errorMessage = {
            status: 400,
            statusMessage: "error",
            summary: 'Please search for country data using either name or country code',
            message: ''
        };
        res.json(errorMessage);
    }
})

apiRouter.get('/unicode', (req, res) => {
    if (req.query.countryCode || req.query.name) {
        let url = path.join(__dirname, 'countries.json');
        let readFile = util.promisify(fs.readFile);
        readFile(url, 'utf-8')
            .then(data => {
                let newCountryData = JSON.parse(data);
                let filteredCountry = newCountryData.find(country => {
                    if ((country.code.toLowerCase() === req.query?.countryCode?.toLowerCase()) ||
                        (country.name.toLowerCase() === req.query?.name?.toLowerCase())
                    ) {
                        return country;
                    }
                })
                if (filteredCountry) {
                    let successMessage = {
                        status: 200,
                        statusMessage: "success",
                        summary: 'Country data fetched successfully',
                        message: filteredCountry.unicode
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
    } else {
        let errorMessage = {
            status: 400,
            statusMessage: "error",
            summary: 'Please search for country data using either name or country code',
            message: ''
        };
        res.json(errorMessage);
    }
})

apiRouter.get('/flag', (req, res) => {
    if (req.query.countryCode || req.query.name) {
        let url = path.join(__dirname, 'countries.json');
        let readFile = util.promisify(fs.readFile);
        readFile(url, 'utf-8')
            .then(data => {
                let newCountryData = JSON.parse(data);
                let filteredCountry = newCountryData.find(country => {
                    if ((country.code.toLowerCase() === req.query?.countryCode?.toLowerCase()) ||
                        (country.name.toLowerCase() === req.query?.name?.toLowerCase())
                    ) {
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
            .catch(err => {
                let errorMessage = {
                    status: 400,
                    statusMessage: "error",
                    summary: 'Failed to fetch Country data',
                    message: ''
                };
                res.json(errorMessage);
            })
    } else {
        let errorMessage = {
            status: 400,
            statusMessage: "error",
            summary: 'Please search for country data using either name or country code',
            message: ''
        };
        res.json(errorMessage);
    }
})

apiRouter.get('/continent', (req, res) => {
    if (req.query.countryCode || req.query.name) {
        let url = path.join(__dirname, 'countries.json');
        let readFile = util.promisify(fs.readFile);
        readFile(url, 'utf-8')
            .then(data => {
                let newCountryData = JSON.parse(data);
                let filteredCountry = newCountryData.find(country => {
                    if ((country.code.toLowerCase() === req.query?.countryCode?.toLowerCase()) ||
                        (country.name.toLowerCase() === req.query?.name?.toLowerCase())
                    ) {
                        return country;
                    }
                })
                if (filteredCountry) {
                    let successMessage = {
                        status: 200,
                        statusMessage: "success",
                        summary: 'Country data fetched successfully',
                        message: filteredCountry.continent
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
    } else {
        let errorMessage = {
            status: 400,
            statusMessage: "error",
            summary: 'Please search for country data using either name or country code',
            message: ''
        };
        res.json(errorMessage);
    }
})

apiRouter.get('/dialCode', (req, res) => {
    if (req.query.countryCode || req.query.name) {
        let url = path.join(__dirname, 'countries.json');
        let readFile = util.promisify(fs.readFile);
        readFile(url, 'utf-8')
            .then(data => {
                let newCountryData = JSON.parse(data);
                let filteredCountry = newCountryData.find(country => {
                    if ((country.code.toLowerCase() === req.query?.countryCode?.toLowerCase()) ||
                        (country.name.toLowerCase() === req.query?.name?.toLowerCase())
                    ) {
                        return country;
                    }
                })
                if (filteredCountry) {
                    let successMessage = {
                        status: 200,
                        statusMessage: "success",
                        summary: 'Country data fetched successfully',
                        message: filteredCountry.dialCode
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
    } else {
        let errorMessage = {
            status: 400,
            statusMessage: "error",
            summary: 'Please search for country data using either name or country code',
            message: ''
        };
        res.json(errorMessage);
    }
})

apiRouter.get('/currency', (req, res) => {
    if (req.query.countryCode || req.query.name) {
        let url = path.join(__dirname, 'countries.json');
        let readFile = util.promisify(fs.readFile);
        readFile(url, 'utf-8')
            .then(data => {
                let newCountryData = JSON.parse(data);
                let filteredCountry = newCountryData.find(country => {
                    if ((country.code.toLowerCase() === req.query?.countryCode?.toLowerCase()) ||
                        (country.name.toLowerCase() === req.query?.name?.toLowerCase())
                    ) {
                        return country;
                    }
                })
                if (filteredCountry) {
                    let successMessage = {
                        status: 200,
                        statusMessage: "success",
                        summary: 'Country data fetched successfully',
                        message: filteredCountry.currency
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
    } else {
        let errorMessage = {
            status: 400,
            statusMessage: "error",
            summary: 'Please search for country data using either name or country code',
            message: ''
        };
        res.json(errorMessage);
    }
})

apiRouter.get('/currencySymbol', (req, res) => {
    if (req.query.countryCode || req.query.name) {
        let url = path.join(__dirname, 'countries.json');
        let readFile = util.promisify(fs.readFile);
        readFile(url, 'utf-8')
            .then(data => {
                let newCountryData = JSON.parse(data);
                let filteredCountry = newCountryData.find(country => {
                    if ((country.code.toLowerCase() === req.query?.countryCode?.toLowerCase()) ||
                        (country.name.toLowerCase() === req.query?.name?.toLowerCase())
                    ) {
                        return country;
                    }
                })
                if (filteredCountry) {
                    let successMessage = {
                        status: 200,
                        statusMessage: "success",
                        summary: 'Country data fetched successfully',
                        message: filteredCountry?.currency?.split('-')[1]?.trim()
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
                console.log(err)
                let errorMessage = {
                    status: 400,
                    statusMessage: "error",
                    summary: 'Failed to fetch Country data',
                    message: ''
                };
                res.json(errorMessage);
            })
    } else {
        let errorMessage = {
            status: 400,
            statusMessage: "error",
            summary: 'Please search for country data using either name or country code',
            message: ''
        };
        res.json(errorMessage);
    }
})

apiRouter.get('/region', (req, res) => {
    if (req.query.regionName) {
        let url = path.join(__dirname, 'countries.json');
        let readFile = util.promisify(fs.readFile);
        readFile(url, 'utf-8')
            .then(data => {
                let newCountryData = JSON.parse(data);
                let filteredCountry = []
                newCountryData.filter(country => {
                    if ((country.continent.toLowerCase() === req.query?.regionName?.toLowerCase())) {
                        filteredCountry.push(country)
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
    } else {
        let errorMessage = {
            status: 400,
            statusMessage: "error",
            summary: 'Please search for countries in a continent data using the continent name',
            message: ''
        };
        res.json(errorMessage);
    }
})

apiRouter.get('/commoncurrency', (req, res) => {
    if (req.query.currencyName || req.query.currencySymbol) {
        let url = path.join(__dirname, 'countries.json');
        let readFile = util.promisify(fs.readFile);
        readFile(url, 'utf-8')
            .then(data => {
                let newCountryData = JSON.parse(data);
                let filteredCountry = [];
                newCountryData.filter(country => {
                    if ((country?.currency?.split('-')[0]?.toLowerCase() === req.query?.currencyName?.toLowerCase()?.trim()) ||
                        (country?.currency?.split('-')[1]?.toLowerCase() === req.query?.currencySymbol?.toLowerCase()?.trim())
                    ) {
                        filteredCountry.push(country)
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
                console.log(err)
                let errorMessage = {
                    status: 400,
                    statusMessage: "error",
                    summary: 'Failed to fetch Country data',
                    message: ''
                };
                res.json(errorMessage);
            })
    } else {
        let errorMessage = {
            status: 400,
            statusMessage: "error",
            summary: 'Please search for country data using either currency name or currency code',
            message: ''
        };
        res.json(errorMessage);
    }
})

commoncurrency
commondialcodes //Some countries have same dialcodes
commoncontinent

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
        .catch(err => {
            console.log(err)
            let errorMessage = {
                status: 400,
                statusMessage: "error",
                summary: 'Failed to fetch Country data',
                message: ''
            };
            res.json(errorMessage);
        })
})

apiRouter.get('/country/name/:name', (req, res) => {
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
                    message: filteredCountry.name
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
            console.log(err)
            let errorMessage = {
                status: 400,
                statusMessage: "error",
                summary: 'Failed to fetch Country data',
                message: ''
            };
            res.json(errorMessage);
        })
})

apiRouter.get('/country/unicode/:name', (req, res) => {
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
                    message: filteredCountry.unicode
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
            console.log(err)
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