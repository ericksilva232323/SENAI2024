/*
npm Init 
npm i express mysql cors
http -------> REST{GET, POST, PUT, DELETE}
npm i ------> update

*/
//dependencies - framework
const express = require("express");

const mySLQL = require("mysql");

const cors = require("cors");

const { read } = require("fs");

const { Client } = require("undici-types");

//mySLQL conection 
const con= mySLQL.createConnection({
    host: "localhost",
    user: "root",
    password: "<PASSWORD>",
    database: "teste"
})

const teste = (req, res)=>{
    res.send("back-end respondendo")
}

//CRUD - READ
const read = (req, res)=>{
    con.query("select * from clientes", (err, res)=>{
        if(err)
            res.json(err);
        else
            res.json(res);
    })
 res.json("oi")
}

const app = express();
app.use(express.json());
app.use(cors());

//Route Exit
app.get("/", teste);
app.get("/", Client, read);


app.listen(3000,()=>{
    console.log("Servidor(back-end) rodando na porta 3000" + nome);
});