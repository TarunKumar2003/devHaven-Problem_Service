const mongoose = require("mongoose");
const MONGODB_URI = require("../config/server.config.js")

const dbConnect = async()=>{
    try {
        const db = await mongoose.connect(MONGODB_URI || "");
        console.log(db.connection.host);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = dbConnect;