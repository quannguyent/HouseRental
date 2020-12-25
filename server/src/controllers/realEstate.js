const realEstateRouter = require("express").Router()
const { getTokenFrom } = require("../../utils");
const RealEstate = require("../models/realEstate");
const jwt = require('jsonwebtoken');
realEstateRouter.post("/get-list-property", async (req, res) => {
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }
    let listProperty = await RealState.find({ userId: decodedToken.id })
    res.status(200).json(listProperty)
})
// realEstateRouter.post("/add-favorites" )
realEstateRouter.post("/add-property", async (req, res) => {
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }
    console.log(decodedToken)
    console.log(req.body);
    if (req.files.length < 3) {
        return res.status(400).send({ errorMessage: "Cần ít nhất 3 ảnh", errorType: "image" })
    } else {
        let arrImagePath = [];
        req.files.forEach(el => {
            arrImagePath.push("/images/" + el.filename)
        })
        let realEstate = new RealEstate({
            ...req.body,
            imagePath: arrImagePath,
            status: false,
            userId: decodedToken.id,
            createTime: new Date().getTime()
        })
        await realState.save()
    }
    console.log(req.files.length)
    res.status(200).end()
})
realEstateRouter.post("/for-fake-data", (req, res) => {
    console.log(req.body);
    console.log("xxx", req.files)
    if (req.files.length > 0) {
        req.files.forEach(async (el) => {
            console.log(req.files)
            let food = new RealEstate({
                ...req.body,
                imagePath: "/images/" + el.filename
            })
            await food.save()
        })

        return res.status(200).send(`success`).end();
    }
    // let realState = new RealState
    res.status(401).end()
})
module.exports = realEstateRouter