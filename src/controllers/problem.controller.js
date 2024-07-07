const { StatusCodes } = require("http-status-codes");
const { ProblemRepository } = require("../repositories/index");
const { ProblemService } = require("../services/index");
const NotImplementedError = require("../errors/notImplemented.error");

const problemService = new ProblemService(new ProblemRepository());

const addProblem = async (req, res, next) => {
  try {
    console.log("incoming request", req.body);
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
};

const getProblem = (req, res, next) => {
  try {
    throw new NotImplementedError("addProblem");
  } catch (error) {
    next(error);
  }
};

const getProblems = async (req, res, next) => {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "All the Problems fetched Successfully",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProblem = (req, res, next) => {
  try {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
      message: "Not Implemented",
    });
  } catch (error) {
    next(error);
  }
};

const updateProblem = (req, res, next) => {
  try {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
      message: "Not Implemented",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  //pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
