import express from "express";
import userRouter from "./routes/user.routes.js";
const PORT = 3000;

const app = express();
app.disable("x-powered-by");
app.use(express.json())



app.get("/", (req, res) => {
  res.send("<h1>Hola mundo</h1>");
});

app.use("/user", userRouter);

app.use((req, res) => {
  res.send("<h1>404 Page not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server rining on http://localhost:${PORT}`);
});
