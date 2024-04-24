const {StatusCodes} = require("http-status-codes");
const {ProblemRepository} = require("../repositories/index")
const {ProblemService} = require("../services/index")

const problemService = new ProblemService(new ProblemRepository());

const addProblem = async(req, res, next)=>{
     try {
        console.log("incoming request", req.body);
        const newProblem = await problemService.createProblem(req.body);
        res.status(StatusCodes.CREATED).json({
         success: true,
         message: 'Successfully created a new problem',
         error: {},
         data: newProblem
        })
     } catch (error) {
        next(error);
     }
}

const getProblem = (req, res)=>{
    try {
        return res.status(StatusCodes.NOT_IMPLEMENTED).json({
           message: "Not Implemented"
        })
     } catch (error) {
        
     }
}

const getProblems = (req,res)=>{
    try {
        return res.status(StatusCodes.NOT_IMPLEMENTED).json({
           message: "Not Implemented"
        })
     } catch (error) {
        
     }
}

const deleteProblem = (req, res)=>{
    try {
        return res.status(StatusCodes.NOT_IMPLEMENTED).json({
           message: "Not Implemented"
        })
     } catch (error) {
        
     }
}

const updateProblem = (req, res)=>{
    try {
        return res.status(StatusCodes.NOT_IMPLEMENTED).json({
           message: "Not Implemented"
        })
     } catch (error) {
        
     }
}

module.exports = {
    //pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
}