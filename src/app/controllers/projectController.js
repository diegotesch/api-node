const express = require('express');
const authMiddleaware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleaware);

router.get('/', (req, res) => {
    res.send({ ok: true, user: req.userId });
});

module.exports = app => app.use('/projects', router);