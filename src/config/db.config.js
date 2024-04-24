const mongoose = require("mongoose");
const {MONGODB_URI} = require("./server.config.js")

// const mongoose = require('mongoose');
// const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');


// async function connectToDB() {

//     try {
//         if(NODE_ENV == "development") {
//             await mongoose.connect(ATLAS_DB_URL);
//         } 
//     } catch(error) {
//         console.log('Unable to connect to the DB server');
//         console.log(error);
//     }

// }


const dbConnect = async()=>{
    try {
        const db = await mongoose.connect(`${MONGODB_URI}`);
        console.log("Connected to db")
        console.log(db);
    } catch (error) {
        console.log("Unable to connect to dataBase ", error);
        process.exit(1);
    }
}

module.exports = dbConnect;