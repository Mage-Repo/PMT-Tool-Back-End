const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: false, default: "This Project has no description yet." },
        startDate: {type: Date,required:true},
        endDate: {type: Date,required:true},
        technologies:{ type: String, required: true },
    },
    { timestamps: true }
);

const projectModel = mongoose.model("project", projectSchema)

module.exports = projectModel