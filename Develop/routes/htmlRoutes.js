const path = require("path");
const ecpress = require("express");

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.post("/api/db.json", function(req, res) {
    let newNotes = req.body;
    console.log(newNotes);
    notes.push(newNotes);
  });
};
