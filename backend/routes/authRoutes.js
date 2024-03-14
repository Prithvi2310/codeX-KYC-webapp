const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Perform authentication logic here
    if (username === 'exampleUser' && password === 'examplePassword') {
        res.status(200).json({ message: 'Authentication successful' });
    } else {
        res.status(401).json({ message: 'Authentication failed' });
    }
});

module.exports = router;
