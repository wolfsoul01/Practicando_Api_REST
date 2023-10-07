import express from 'express'
import { readJSON } from "./utils/readJSON.js";
const PORT = 3000;


const app = express()

app.get('/',(req,res)=>{

    const data = readJSON('../db/local/db.json')

    res.json(data)
})

app.listen(PORT,()=>{
    console.log(`Server rining on http://localhost:${PORT}`);
})