const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            name: 'bulbasaur',
            game: 'red'
        }
    ])
})

module.exports = router;