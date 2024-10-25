const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ currencies: ['USD', 'EUR', 'GBP', 'JPY', 'AUD'] });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
