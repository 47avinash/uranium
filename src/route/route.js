const express = require('express');
const router = express.Router();
const collagecontroller = require("../controller/CollageController")
const Interncontroller = require("../controller/InternController")



router.post("/functionup/colleges", collagecontroller)
router.post("/functionup/interns",Interncontroller.createintern )
router.get("/functionup/collegeDetails",Interncontroller.getinterns)

module.exports = router;