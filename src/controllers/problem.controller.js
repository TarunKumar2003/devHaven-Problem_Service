const {StatusCodes} = require("http-status-codes");
const pingProblemController = (req, res)=>{
   try {
     return res.json({
         message:" Ping controller is up "
     })
   } catch (error) {
    
   }
}
const addProblem = (req, res)=>{
     try {
        return res.status(StatusCodes.NOT_IMPLEMENTED).json({
           message: "Not Implemented"
        })
     } catch (error) {
        
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
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
}