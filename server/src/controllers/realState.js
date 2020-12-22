const realStateRouter = require("express").Router()
const RealState = require("../models/realState");
realStateRouter.post("/get-list-landing-page", (req, res) => {
    res
})
// realStateRouter.post("")
realStateRouter.post("/for-fake-data", (req, res) => {
    console.log(req.body);
    let temp = ""
    console.log("xxx", req.files)
    if (req.files.length > 0) {
        req.files.forEach(async (el) => {
            console.log(req.files)
            let food = new RealState({
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
module.exports = realStateRouter