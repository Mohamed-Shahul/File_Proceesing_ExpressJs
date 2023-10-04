const express=require('express')
const app=express()
const path=require('path')

app.set('view engine','ejs')

const multer=require('multer')
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Images')
    },
    filename:(req,file,cb)=>{
        console.log(file)
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const upload=multer({storage:storage})

app.get('/upload',(req,res)=>{
    res.render('upload')
})

app.post('/upload',upload.single('image'),(req,res)=>{
    res.send('Image Uploaded')
})

app.listen(3001,()=>console.log('server is running on' ,3001))