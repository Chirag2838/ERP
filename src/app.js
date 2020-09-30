require('dotenv').config()
const express = require('express');
require('./db/mongoose');
const adminRouter = require('./api/routes/admin');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(adminRouter);
app.get('*', (req, res) => {
    res.status(404).send('404 not found');
});

app.listen(port, () => {
    console.log('server is setup on ' + port);
})