import express from "express";
import { readJSON } from "./utils/readJSON.js";
const PORT = 3000;

const app = express();

function middelware(req, res, next) {
  console.log("Prueba 1");
  next();
}


app.get("/", [middelware], (req, res) => {

    res.send('<h1>Hola mundo </h1>')
});

app.get("/user", (req, res) => {
  const data = readJSON("../db/local/db.json");

  res.json(data);
});


app.use((req,res)=>{

    res.send('<h1>404 Page not Found</h1>')
})

app.listen(PORT, () => {
  console.log(`Server rining on http://localhost:${PORT}`);
});
