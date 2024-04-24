
const express = require("express");
const { problemController } = require("../../controllers/index.js");

const problemRouter = express.Router();

//problemRouter.get("/ping", problemController.pingProblemController);
problemRouter.get("/:id", problemController.getProblem);




module.exports = problemRouter;