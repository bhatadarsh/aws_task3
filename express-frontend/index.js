const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express (Task 3 Frontend)!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Express app running on port ${PORT}`);
});
