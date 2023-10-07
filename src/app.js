import http from "node:http";
import { readJSON } from "./utils/readJSON.js";
const PORT = 3000;

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  const data = readJSON("../db/local/db.json");

  res.end(JSON.stringify(data))
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
