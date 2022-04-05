const express =require('express');
const mongoose =require('mongoose')
const bodyParser=require('body-parser');
const cors = require('cors')
const app =express();
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));

const PORT =8003;



const DB_URL=`mongodb+srv://afProject2022:af2022proj12A@afprojectcluster.t6kdd.mongodb.net/Research_Management_DB?retryWrites=true&w=majority`;
mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected')
    
})
.catch((err)=>console.log('DB connection error',err))

app.listen(PORT,()=>{

    console.log(`App is runnning on ${PORT}`);
});










