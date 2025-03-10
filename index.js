const express = require('express');
const cors = require('cors');  
const { v4: uuidv4 } = require('uuid');
let data=[{id:"12qwe4",title:"do leetcode",description:"it can help to improve your problem solving skills"}
    ,{
        "id": "a11442fd-8f50-4b5c-b357-3299249f689b",
        "title": "do geeks for geeks 23",
        "description": "it can help to improve your problem solving skills"
    },{
        "id": "a11442fd-8f50-4b5c-b357-32992423f6123b",
        "title": "practice aptitude",
        "description": "it can help to improve your logical thiniking"
    }
];


const app = express();

// Middleware
app.use(express.json());  // Parse incoming JSON requests
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

//get all tasks
app.get('/tasks/',async(req,res)=>{
    console.log("made here");
    console.log(data,"data");
    res.status(200).json(data);

})

//testing initally
app.get('/',(req,res)=>{
    res.send("working properly");
})

//add a task
app.post('/tasks/',async(req,res)=>{
    const {title,description}=req.body;
    let task={id:uuidv4(),title,description}
    data.push(task);

    res.status(201).json(task);

})

//get a task by id
app.get('/tasks/:id',async(req,res)=>{
    const reqId=req.params.id;
    const reqData=data.filter(task=>task.id==reqId);
    if (!reqData){
        return res.status(404).json({"message": "Task not found"});
    }
    res.status(200).json(reqData);

})

//update the task with the id
app.put('/tasks/:id',async(req,res)=>{
    const {title="",description=""}=req.body;
    const reqId=req.params.id;
    const reqData=data.filter(task=>task.id==reqId);
    if (!reqData){
        return res.status(404).json({"message": "Task not found to update"});
    }
    data=data.filter(task=>task.id!=reqId);
    if(title!="")reqData["title"]=title;
    if(description!="")reqData["description"]=description;
    data.push(reqData);
    res.status(200).json({"message": "successfully submitted",reqData});
})

//delete a task with id
app.delete('/tasks/:id',async(req,res)=>{
    const reqId=req.params.id;
    const reqData=data.filter(task=>task.id==reqId);
    if (!reqData){
        return res.status(404).json({"message": "Task not found to delete task"});
    }
    data=data.filter(task=>task.id!=reqId);
    res.status(200).json({"message":"successfully deleted"});

})

//server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
