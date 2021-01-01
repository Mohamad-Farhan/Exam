const express = require('express');
const connection = require('../db');
const router = express.Router();
router.get('./book', (req, res) => {
    req.json('you connect')
})