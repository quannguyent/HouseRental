const express = require("express");
const app = express();
const port = 8081;
const multer = require("multer");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const mongoose = require('mongoose')
const cors = require("cors");
const realStateRouter = require("./controllers/realState");
const usersRouter = require("./controllers/user");
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));
const url = process.env.MONGO_URI
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(url,)
    .then(console.log("xxxx connected"))
    .catch(err => console.log("err mongodb ", err))
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
app.use(multer({ storage: fileStorage }).any())
app.use("/real-state", realStateRouter)
app.use("/api/user", usersRouter)
app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
);
