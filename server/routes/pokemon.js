const express = require("express");
const router = express.Router();
const connect = require('../../db-config/dbConn');
const Db = require('../../db-config/models/Pokemon');
const Op = Db.Op;
const get_models = Db.get_models;

router.get('/', async (req, res) => {
    try {
        let {pokemon} = await get_models();
        let found = await pokemon.findAll({
            where: {
                games: {
                    red: true
                }
            }
        });
        res.json([
            {
                name: 'bulbasaur',
                game: 'red'
            }
        ])
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;