const express = require("express");
const path = require("path");
const fs = require("fs");
const indexFile = require("./db/db.json");
const PORT = process.env.port || 3001;
const { v4: uuidv4 } = require("uuid");
const { json } = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// this allows to excess other routes like the index filies
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

app.post("/api/notes", (req, res) => {
  // Let the client know that their post request was received

  // Read the contents of db.json
  const data = fs.readFileSync("./db/db.json");
  const notes = JSON.parse(data);

  // Add the new note to the array
  const newNote = { id: uuidv4(), title: req.body.title, text: req.body.text };
  notes.push(newNote);

  // Write the updated notes array back to db.json
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(newNote);
});

app.delete(`/api/notes/:id`, (req, res) => {
  const data = fs.readFileSync("./db/db.json");
  const notes = JSON.parse(data);
  const index = notes.findIndex((data) => {
    return data.id === req.params.id;
  });
  notes.splice(index, 1);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);
});

app.get("/api/notes", (req, res) => {
  const data = fs.readFileSync("./db/db.json");
  const notes = JSON.parse(data);
  res.json(notes);
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
