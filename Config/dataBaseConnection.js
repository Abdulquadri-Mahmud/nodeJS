const { default: Mongoose } = require("mongoose");

const dbConnection = async () => {
    await Mongoose.connect("mongodb://localhost:27017/digitic").then(() => {
        console.log("Database Connected Successfully");
    }).catch((error) => {   
        console.log("Error: ", error);
    });
   

};

module.exports = dbConnection;
