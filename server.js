const express = require('express');
const app = express();
const body_parser = require('body-parser');
const cors = require('cors');
const connect = require('./config/dbConn');

const {QueryTypes} = require('sequelize')

const PORT = process.env.port || 3000;


let corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

const sequelize = connect();

app.get('/', async (req,res) => {
    res.send('HOME');
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`)
});