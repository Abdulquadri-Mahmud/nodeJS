const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const dbConnection =  require('./Config/dataBaseConnection');
dbConnection();

app.use('/', (req, res) => {
    res.send('Hello from server');
});

app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT ${PORT}`);
});