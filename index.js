require("dotenv").config();

const express = require('express');

const db = require("./db");

const models = require("./models");
models.init();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World :)');
});

const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Example app listening on port ${port}!`);
}
);