const express = require("express");
const app = express();
const cors = requires("cors");

app.use(cors());
app.use(express.json());
app.listen(4000, () => console.log("Server running on port 4000"));
