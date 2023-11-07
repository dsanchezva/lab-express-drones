// Iteration #1

// const express = require('express');
const Drone = require ('../models/Drone.model');
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/lab-express-drones")
.then(()=>{

    const drones = [
        { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
        { name: "Racer 57", propellers: 4, maxSpeed: 20 },
        { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
      ];
    console.log("Connecting people")
    return Drone.insertMany(drones)


}).then(()=>{

    console.log("Todo connected")
    return mongoose.disconnect()


}).then(()=>{

    console.log("Disconnecting people")

}).catch((error)=>{
    next (error)
})

