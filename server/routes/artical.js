const express = require("express")
const router = express.Router()
const Artical = require("../models/Artical");
const Artical = require("../models/Artical");
router.post("/", async (req,res)=>{
const {title} = req.body
const artical = await Artical.create({title:title});
res.json(artical)
})
module.exports = router