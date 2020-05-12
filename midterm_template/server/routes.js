const express = require('express');
const router = express.Router();
const api = require('./app')

router.get('/search', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(await api.search(req.query.name)));
}
)


router.get('/searchById', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(await api.searchByID(req.query.id)));
}
)

module.exports = router;