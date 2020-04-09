let express = require("express");
let app = express();

app.get("/api", (req, res) => {
  res.json([
    { id: 1, username: "jaye" },
    { id: 2, username: "austin" },
  ]);
});

app.listen("3001", () => {
  console.log("listening on port 3001");
});
