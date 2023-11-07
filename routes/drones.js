const express = require("express");
const Drone = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/drones", async (req, res, next) => {
  try {
    const allDrones = await Drone.find();

    res.render("drones/list.hbs", {
      allDrones,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/drones/create", async (req, res, next) => {
  try {
    res.render("drones/create-form.hbs");
  } catch (error) {
    next(error);
  }
});

router.post("/drones/create", async (req, res, next) => {
  try {
    // console.log(req)
    await Drone.create({
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed,
    });

    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
  try {
    const editDrone = await Drone.findById(req.params.id);

    console.log(editDrone);
    res.render("drones/update-form.hbs", {
      editDrone,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/drones/:id/edit", async (req, res, next) => {
  try {
    console.log(req.body);
    await Drone.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed,
    });
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.post("/drones/:id/delete", async (req, res, next) => {
  try {
    console.log(req.params.id);
    await Drone.findByIdAndDelete(req.params.id);
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
