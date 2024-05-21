import express, { json } from 'express';
import connection from './config/db.js';
import Todo from './model/todomodel.js'
import Jeni from './model/jeni.js';
connection ();
const app = express();

app.get('/', (req, res) => {
    res.send('app is running');
});
app.get('/jeni', (req, res) => {
    res.send({name:"jeni"});
});
app.post("/api/todo",async(req,res)=>{
const todo=await Todo.create({
    title:"test",
    desc:"test desc"
});
res.json(todo);
});
app.post("/api/jeni",async(req,res)=>{
    const jeni=await Jeni.create({
        name:"test",
        age:15,
        mobile:555
    });
    
    res.json(jeni);
    });
    app.get("/api/jeni",async(req,res)=>{
        const jenis=await Jeni.find();({
            
        });
        
        res.json(jenis);
        });

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
