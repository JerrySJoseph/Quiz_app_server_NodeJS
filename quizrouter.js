var express = require('express')
var router = express.Router()

const questions=require('./questionsPool');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/topics',(req,res)=>{
    let topics1=fetchTopics();
    const response={
        topics:topics1,
        count:topics1.length
    }
    res.send(response);
})
router.get('/questions/:topic',(req,res)=>{
    const topic=req.params.topic;
    const qarray=fetchQuestions(topic)
    const object={
        questions:qarray,
        count:qarray.length
    }
    res.send(object);

})
function fetchQuestions(topic)
{
   let filteredQuestion=[];
   questions.map((q)=>{
       if(q.topic===topic)
        filteredQuestion.push(q);
   })
   return filteredQuestion;
}
function fetchTopics()
{
    let topicsarray=[];
    questions.map((q)=>{
        if(!topicsarray.includes(q.topic))
        topicsarray.push(q.topic);
    })
    return topicsarray;
}
module.exports = router