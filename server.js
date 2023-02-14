const express = require("express");
const path = require("path");
const PORT = 3001;

// const apiRoute = require("./routes/api");
// const htmlRoute = require("./routes/html");

const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// this allows to excess other routes like the index filies
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.get("/notes", (req, res) => {
  const filePath = path.join(__dirname, "./Develop/public/notes.html");
  console.log("File path:", filePath);
  res.sendFile(filePath);
});
// console.log(path.join(__dirname, "/public/notes.html"));
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
