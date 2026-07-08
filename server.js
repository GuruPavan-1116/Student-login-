const express=require("express");
const cors=require("cors");
const db=require("./db");

const app=express();

app.use(cors());
app.use(express.json());

app.post("/login",(req,res)=>{

const {rollNumber,password}=req.body;

const sql=
"SELECT * FROM students WHERE roll_number=? AND password=?";

db.query(sql,[rollNumber,password],(err,result)=>{

if(err){
return res.status(500).json(err);
}

if(result.length>0){
res.json({
success:true,
student:result[0]
});
}else{
res.json({
success:false
});
}
});
});

app.get("/student/:id",(req,res)=>{

db.query(
"SELECT * FROM students WHERE id=?",
[req.params.id],
(err,result)=>{
res.json(result[0]);
});
});

app.get("/marks/:id",(req,res)=>{

db.query(
"SELECT * FROM marks WHERE student_id=?",
[req.params.id],
(err,result)=>{
res.json(result[0]);
});
});

app.get("/timetable",(req,res)=>{

db.query(
"SELECT * FROM timetable",
(err,result)=>{
res.json(result);
});
});

app.listen(5000,()=>{
console.log("Server Running On 5000");
});