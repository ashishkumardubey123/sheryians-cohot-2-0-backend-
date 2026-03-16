const mongoose = require("mongoose");

function connectToDB() {

    const primaryURI = process.env.MONGO_URI;
    const fallbackURI = process.env.MONGO_FALLBACK_URI;

    mongoose.connect(primaryURI)
        .then(() => {
            console.log("Connected to PRIMARY MongoDB");
        })
        .catch(err => {

            console.log("Primary DB failed, trying FALLBACK DB...");

            mongoose.connect(fallbackURI)
                .then(() => {
                    console.log("Connected to FALLBACK MongoDB");
                })
                .catch(error => {
                    console.log("Fallback DB connection also failed", error);
                });

        });
}

module.exports = connectToDB;