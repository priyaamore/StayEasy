const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/StayEasy";

const initDB = async () => {
    await Listing.deleteMany({});
   initData.data = initData.data.map((obj) =>({...obj , owner:"6a53dfea1b8f2bd190ac71be"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

async function main() {
    await mongoose.connect(MONGO_URL);
    await initDB();
    console.log("connected to DB");
}

if (require.main === module) {
    main().catch((err) => {
        console.log(err);
    });
}

module.exports = { initDB };