const express = require('express');
const projectModel = require("../Model/ProjectModel")
const router = express.Router()

router.post("/addProject",async(req,res)=>{
try{
const projects = new projectModel({...req.body})
console.log(`body ${projects}`)
await projects.save()
res.send("Project Succesfully Added");
}
catch(error){
res.send(error);
}
})

router.get("/getProjects",async(req,res)=>{
    try{
        const projects = await projectModel.find();
        res.status(200).send(projects)
 
    }
    catch(error){
        res.status(400).send(error)

    }
})

router.post("/getProjectDetailsSearchCriteria",async(req,res)=>{

    console.log("getProjectDetailsSearchCriteria", req.body);
    const { page = 1, pageSize = 20 } = req.body;
    //const page = 2  
    //const pageSize = 20;
    try{
           const project = await projectModel.find()
           .skip((page - 1) * pageSize)
           .limit(pageSize)
           .exec();
           res.status(200).send(project)
    }
    catch(error){
        console.log("Error on getProjectDetailsSearchCriteria", error);
        res.status(400).send(error)

    }

})

// router.post("",async(req,res) =>{

//     try{


//     }
//     catch(error){

//     }

// })
module.exports = router