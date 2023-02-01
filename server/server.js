const express = require('express');
const app = express();
const body_parser = require('body-parser');
const cors = require('cors');
const connect = require('../db-config/dbConn');
const pokemon = require('./routes/pokemon')

const {QueryTypes} = require('sequelize')

const PORT = process.env.SERVER_PORT || 3000;

app.use('/api/pokemon', pokemon);

const sequelize = connect();

//app.use(cors())
app.get("/api", (req,res) => {
   res.send('hello from express')
});
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`)
});