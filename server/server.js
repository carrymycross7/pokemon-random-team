const express = require('express');
const app = express();
const body_parser = require('body-parser');
const cors = require('cors');
const connect = require('./db-config/dbConn');

const {QueryTypes} = require('sequelize')

const PORT = process.env.SERVER_PORT || 3000;


const sequelize = connect();

app.get('/test', (req,res) => {
    res.send('hi')
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`)
});