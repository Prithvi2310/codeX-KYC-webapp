const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const authRoute = require('./routes/authRoutes');
const kycRoute = require('./routes/kycRoutes');

app.use(bodyParser.json());
app.use('/', authRoute);
app.use('/', kycRoute);

app.get('/', (req, res) => {
    res.send("This works!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});