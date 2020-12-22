const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { check, validationResult } = require('express-validator');
const { default: Config } = require("../../config");
const { getTokenFrom } = require("../../utils");
const usersRouter = require('express').Router()
usersRouter.post('/sign-up', [
    check("firstName", "Họ không được bỏ trống").isLength({ min: 1 }).isString().withMessage("Họ không phù hợp"),
    check("lastName", "Tên không được bỏ trống").isLength({ min: 1 }).isString().withMessage("Tên không phù hợp"),
    check("username", "Tên đăng nhập phải ít nhất 6 ký tự").isLength({ min: 6 }).isString().withMessage("Tên đăng nhập không phù hợp"),
    check("email", "Email không phù hợp").isEmail(),
    check('password', 'Mật khẩu phải có ít nhất 6 ký tự')
        .isLength({ min: 6 }).isString().withMessage("Mật khẩu không phù hợp"),
], async (req, res) => {
    console.log(req.body)
    let body = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors)
        return res.status(400).json({ errorMessage: errors.array()[0].msg, errorType: errors.array()[0].param }).end();
    }
    let checkUserExist = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] })
    if (checkUserExist) {
        return res.status(400).json({
            errorMessage: checkUserExist.email === body.email ? "Email đã tồn tại" : "Tên đăng nhập đã tồn tại",
            errorType: checkUserExist.email === body.email ? "email" : "username"
        }).end()
    }
    if (req.body) {
        const passwordHash = await bcrypt.hash(body.password, Config.saltRounds)
        let user = {
            ...req.body,
            password: passwordHash,
            status: false,
            typeAccount: Config.MEMBER_ACCOUNT,
        }
        await new User(user).save();
        return res.status(200).send("success").end()
    }
    return res.status(401).send("some error").end()
});
usersRouter.post("/sign-in", async (req, res) => {
    let user = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.username }] })
    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(req.body.password, user.password);
    if (!(user && passwordCorrect)) {
        console.log("xxx user", passwordCorrect)
        return res.status(400).json({
            error: "Tên đăng nhập hoặc mật khẩu sai"
        })
    }
    console.log("xxx id", user.id)
    const userForToken = {
        username: user.username,
        id: user.id,
    }
    console.log("xxx running continue")
    const token = jwt.sign(userForToken, process.env.SECRET);
    res.send(token).status(200).end();
})
usersRouter.post("/check-auth", async (req, res) => {
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }
    console.log(decodedToken)
    const user = await User.findById(decodedToken.id);
    if (user) {
        return res.status(200).send("success").end()
    } else {
        return res.status(401).send("invalid").end()
    }
})
usersRouter.get("/user-info", async (req, res) => {
    const token = getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id);
    console.log(user)
    res.status(200).json(user).end()
    // res.send({
    //     firstName : user.firstName,
    //     lastName : user.lastName,
    //     phone : user.phone? user.phone : ,

    // })

})
module.exports = usersRouter    