const express = require('express');
const router = express.Router();

router.post('/kyc', (req, res) => {
    const { username, aadhar_number, pan_number, dob, address } = req.body;

    res.status(200)
        .json({
        username: username,
        aadhar_number: aadhar_number,
        pan_number: pan_number,
        dob: dob,
        address: address
    });
});

module.exports = router;