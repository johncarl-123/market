import express from 'express'
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "user"


})

app.post("/login", (req, res)=> {

    const sql = "INSERT INTO accounts ('username', 'email', 'password', confirmPassword') VALUES (?, ?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.confirmPassword
    ]
    db.query(sql, [values], (err, result) =>{
        if(err) return res.json({Message: "Error in Node"});
        return res.json(result);
    })
})
 

app.listen(8081, ()=> {
    console.log("Connected to the server");
})
