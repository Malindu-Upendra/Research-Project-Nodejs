const uploadController = require('../controller/uploads.controller');

const express = require("express");
const router = express.Router();

router.post("/audio-upload", uploadController.uploadfile);
router.get("/test-api", (req,res) => {
    res.send({message:"Hello World"});
})

module.exports = router;