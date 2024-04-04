
const pingProblemController = (req, res)=>{
    return res.json({
        message:" Ping controller is up "
    })
}
const addProblem = (req, res)=>{
     return res.status(501).json({
        message: "Not Implemented"
     })
}

const getProblem = (req, res)=>{
    return res.status(501).json({
        message: "Not Implemented"
     })
}

const getProblems = (req,res)=>{
    return res.status(501).json({
        message: "Not Implemented"
     })
}

const deleteProblem = (req, res)=>{
    return res.status(501).json({
        message: "Not Implemented"
     })
}

const updateProblem = (req, res)=>{
    return res.status(501).json({
        message: "Not Implemented"
     })
}

module.exports = {
    pingProblemController,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
}