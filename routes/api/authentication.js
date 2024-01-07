const express = require('express');
const router = express.Router();

router.get('/registration', (req, res) => {
   res.send('ami registration')
})

router.get('/login', (req, res) => {
   res.send('ami login')
})

module.exports = router