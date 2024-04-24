const sanitizeMarkdownContent = require("../utils/markdownSanitizer.js")

class ProblemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository
    }

    async createProblem(problemData) {
        // 1. Sanitize the markdown for description
        problemData.description = sanitizeMarkdownContent(problemData.description);

        const problem = await this.problemRepository.createProblem(problemData);

        return problem;
    }
}

module.exports = ProblemService;