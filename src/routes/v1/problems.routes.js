
const express = require("express");
const {ProblemController} = require("../../controllers/index.js");

const problemRouter = express.Router();

problemRouter.get("/ping", ProblemController.pingProblemController);
problemRouter.get("/:id", ProblemController.getProblem);




module.exports = problemRouter;