const express = require("express");
const morgan = require("morgan");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const dbConnection = require("./Config/dataBaseConnection");

// Added this package to log the requests in the console
app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.send("Hello from server");
});

// Since connecting to the database takes some time we will use async/await to make sure that the server is listening only after the database is connected

const startServer = async () => {
  try {
    // Connecting to the database
    await dbConnection();
    // Starting the server
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT}`);
    });
  } catch (error) {
    console.error(`Error starting the server`);
    console.error(error);
  }
};

startServer();
