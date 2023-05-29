const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.use(express.json())
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://xalide:xalide2001@cluster0.lbiijj0.mongodb.net/").then(()=>{
    console.log("connected")
})

const itemSchema=mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const Items=mongoose.model("photos",itemSchema)

app.get("/",async(req,res)=>{
    const data= await Items.find()
    res.send(data)
})
app.get("/:id",async(req,res)=>{
    const {id}=req.params
    const itemid= await Items.findById(id)
    res.send(itemid)
})

app.delete("/:id",async(req,res)=>{
    const {id}=req.params
    const deleteditem= await Items.findByIdAndDelete(id)
    res.send(deleteditem)
})

app.post("/",async(req,res)=>{
    const newitem= new Items({
        ...req.body
    })

    await newitem.save()
    res.send(newitem)
})
app.listen(8080)