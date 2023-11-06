// Iteration #

const mongoose = require("mongoose")
const dronSchema = new mongoose. Schema({

    name: String,

    propellers: Number,

    maxSpeed: Number,


})

const Drone = mongoose.model("Drone", dronSchema)

module.exports = Drone