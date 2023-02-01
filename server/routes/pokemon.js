const express = require("express");
const router = express.Router();
const connect = require('../../db-config/dbConn')

const sequelize = connect();

router.get('/', (req, res) => {
    res.json([
        {
            name: 'bulbasaur',
            game: 'red'
        }
    ])
})

module.exports = router;