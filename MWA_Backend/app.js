
const express = require('express');
const logger = require('morgan');
const playerRouter = require('./routes/players');
const teamRouter = require('./routes/teams');
const app = express();
app.use(express.json());
app.use(logger('dev'));


app.use("/players", playerRouter);
app.use("/teams", teamRouter);

app.use((req, res) => {
 res.status(404).send("Sorry page not found!")
});

module.exports = app;
