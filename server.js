const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

const wonders = [
  { name: "Mount Everest", location: "Nepal", visited: false },
  { name: "Grand Canyon", location: "Arizona", visited: false },
  { name: "Botanical Gardens", location: "Singapore", visited: true },
  { name: "Pantheon", location: "Greece", visited: false },
  { name: "Colosseum", location: "Italy", visited: true },
];



app.get("/wonders", function (req, res) {
  console.log("GET /wonders was called");
  res.send(wonders);
  
});

app.post("/wonders", (req, res) => {
  const newWonder = { ...req.body, visited: false };
  wonders.push(newWonder);
  console.log("POST /wonders:", newWonder);
  res.status(201).send(newWonder);
});

const port = 1337; //because why not
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});
