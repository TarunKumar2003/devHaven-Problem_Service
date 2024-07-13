const { StatusCodes } = require("http-status-codes");
const { ProblemRepository } = require("../repositories");
const { ProblemService } = require("../services");
const { NotFoundError } = require("../errors");

const problemService = new ProblemService(new ProblemRepository());

const addProblem = async (req, res, next) => {
  try {
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

const getProblem = async (req, res, next) => {
  const { id } = req.params;
  if (!id) return null;
  try {
    const response = await problemService.getProblem(id);

    if (!response) {
      throw new NotFoundError("Problem", id);
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "successfully fetch specific problem",
      error: {},
      data: response,
    });
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

const deleteProblem = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) {
      throw NotFoundError("Problem", id);
    }
    const response = await problemService.deleteProblem(id);

    if (!response) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Problem not found  ",
        error: {},
        data: {},
      });
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problem deleted successfully ",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

// update the Problem
const updateProblem = async (req, res, next) => {};

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
