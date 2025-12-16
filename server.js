const express = require("express");
const app = express();

app.use(express.json());

app.post("/order", (req, res) => {
  res.json({ message: "Order received successfully" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
