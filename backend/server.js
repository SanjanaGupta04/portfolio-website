const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {

  res.send("Backend Server Running");

});

app.get("/projects", (req, res) => {

  res.json([
    {
      title: "Portfolio Website",
      description: "Modern portfolio project"
    },

    {
      title: "AI Tool Website",
      description: "AI-powered web application"
    }
  ]);

});

app.listen(5000, () => {

  console.log("Server running on port 5000");

});