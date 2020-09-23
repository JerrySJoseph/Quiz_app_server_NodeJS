const express=require('express');
const { response } = require('express');

const router=require('./quizrouter')
const app=express();
const cors=require('cors');


const PORT=process.env.PORT || 5000;

app.use(cors());
app.use('/api',router)


app.listen(PORT,()=>{
    console.log("Quiz Server is up and running on PORT: "+PORT);
})