const express = require('express');
const userModel = require("../Model/UserModel")

const router = express.Router()

router.post("/register", async (req, res) => {
    try {
        const newUser = new userModel({ ...req.body, verified: true })
        console.log(newUser);
        console.log(req.body);

        await newUser.save() //create a new user
        res.send("User registration successful")
    } catch (error) {
        res.send(error)
    }
})


router.post("/login", async (req, res) => {
    try {
        console.log(`Request ${req.body}`);
        const user = await userModel.findOne({
            email: req.body.email,
            password: req.body.password,
            verified: true
        })
        if (user) {
            res.send({ message: true, user })
        } else {
            res.send({ message: false, user })
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get("/user/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        console.log(`UserId ${userId}`)
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error);
    }
});




module.exports = router