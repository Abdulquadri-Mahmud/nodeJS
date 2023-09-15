const { default : Mongoose } = require("mongoose")

const dbConnection = () => {
    try {
        const conn = Mongoose.connect("mongodb://localhost:27017/digitic");
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Database Error!');
    }
}

module.exports = dbConnection;