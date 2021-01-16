const realEstateRouter = require("express").Router()
const { getTokenFrom } = require("../../utils");
const RealEstate = require("../models/realEstate");
const jwt = require('jsonwebtoken');

realEstateRouter.get("/get-list-property", async (req, res) => {
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }
    let listProperty = await RealEstate.find({ userId: decodedToken.id })
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
    if (req.body.imagePath.length < 3) {
        return res.status(400).send({ errorMessage: "Cần ít nhất 3 ảnh", errorType: "image" })
    } else {
        let arrImagePath = [];
        req.body.imagePath.forEach(el => {
            arrImagePath.push(el)
        })
        let realEstate = new RealEstate({
            ...req.body,
            imagePath: arrImagePath,
            status: false,
            isApprove: false,
            userId: decodedToken.id,
            createTime: new Date().getTime()
        })
        await realEstate.save()
    }
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
                isApprove: false,
                imagePath: el.filename
            })
            await food.save()
        })
        return res.status(200).send(`success`).end();
    }
    // let realState = new RealState
    res.status(401).end()
})

//getById
realEstateRouter.get("/get-property/:id", async (req, res) => {    
    const id = req.params.id;
    console.log(id)
    // const token = getTokenFrom(req)
    // const decodedToken = jwt.verify(token, process.env.SECRET)
    // if (!token || !decodedToken.id) {
    //     return res.status(401).json({ error: 'token missing or invalid' })
    // }
    let property = await RealEstate.findOne({ _id: id})
    res.status(200).json(property)
})

//edit
realEstateRouter.post("/edit-property/:id", async (req, res) => {
    const id = req.params.id;
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }
    await RealEstate.findOneAndUpdate({ _id: id }, { ...req.body, isApprove: false }, {
    new: true,
    })
    console.log(req.body)
    res.status(200).end()
});

//xóa
realEstateRouter.delete("/delete-property/:id", async (req, res) => {
    const id = req.params.id;
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }
    const realEstate = await RealEstate.findOne({_id: id,});
    if (!realEstate) return res.status(401).json({ error: 'không tìm thấy người dùng' })
    await RealEstate.deleteOne({ _id: id });
    res.status(200).end()
});
    
// get all
realEstateRouter.get("/get-propertysView", async (req, res) => {    
    let listProperty = await RealEstate.find({ isApprove: true })
    res.status(200).json(listProperty)
})

realEstateRouter.post("/get-property-filter", async (req, res) => {
    const { title, addressDetail, typeRealEstate } = req.body;

    const realEstate = await RealEstate.find({
        $and: [
        { title: { $regex: new RegExp(`.*${title}.*`), $options: "i" } },
        { addressDetail: { $regex: new RegExp(`.*${addressDetail}.*`), $options: "i" } },
        { typeRealEstate: { $regex: new RegExp(`.*${typeRealEstate}.*`), $options: "i" } },
        {isApprove: true}
      ]
    }).exec();
    if (!realEstate) return res.status(401).json({ error: 'không có phòng nào khớp với những điều kiện trên' })
    res.status(200).json(realEstate)
});

//approve room
realEstateRouter.post("/approve-property/:id", async (req, res) => {
    const id = req.params.id;
    // const token = getTokenFrom(req)
    // const decodedToken = jwt.verify(token, process.env.SECRET)
    // if (!token || !decodedToken.id) {
    //     return res.status(401).json({ error: 'token missing or invalid' })
    // }
    await RealEstate.findOneAndUpdate({ _id: id }, {isApprove: true}, {
    new: true,
    })
    console.log(req.body)
    res.status(200).end()
});

module.exports = realEstateRouter