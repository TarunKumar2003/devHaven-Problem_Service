const mongoose = require("mongoose");

const problemSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title cannot be empty"]
    },
    description:{
        type: String,
        required: [true, "description cannot be empty"]
    },
    difficulty:{
        type: String,
        required:[true, "Every problem has a difficulty"],
        enum: ['Easy', 'Medium', 'Hard'],
        default:'Easy'
    },
    editorial:{
        type:String
    },
    testCases:[
        {
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                required:true
            }
        }
    ]
})

const Problem = mongoose.model('Problem', problemSchema);
module.exports = Problem;