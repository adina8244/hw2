const mongoose = require('mongoose')
const  articalSchema = new mongoose.Schema({
title:{
type:mongoose.Schema.Types.String,
required:true,
},
active:{
type:Boolean,
default:false
}
},{
timestamps:true
})
module.exports = mongoose.model('Artical', articalSchema)