//const notesData = require("../db/db.json");
const fs = require("fs");
let path = require("path");
let filePath = path.join(__dirname, "../db/db.json");

const router = express.Router();

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    console.log("in api/notes");
    fs.readFile(filePath, "utf8", function(err, data) {
      if (err) throw err;
      console.log("Got data back");
      // Return all data as a JSON instead of an array
      console.log(data);
      res.json({ notes: data });
    });
  });

  app.post("/api/notes", function(req, res) {
    // Check what the body is
    //console.log(req.body);
    // Create a note using req.body
    let note = req.body;
    // Read from the db.json file
    fs.readFile(filePath, "utf8", function(err, data) {
      if (err) throw err;
      // Return all data as a JSON instead of an array
      let notes = JSON.parse(data);
      // Append to the data that was read
      notes.push(note);
      // Insert new notes bacl into the db which in our case is just a json file
      fs.writeFile(filePath, JSON.stringify(notes), function(err, data) {
        if (err) throw err;
        res.json(note);
      });
    });
    // Send a response back
    //notesData.push(req.body);
  });

  app.delete("/api/notes/:id", function(req, res) {
    // Extract id and console.log it
    console.log(req.params.id);
    let noteId = req.params.id;
    // // Read from the db.json file
    fs.readFile(filePath, "utf8", function(err, data) {
      if (err) throw err;
      // Return all data as a JSON instead of an array
      let notes = JSON.parse(data);
      // Remove the note with the given noteId
      let newArr = notes.filter(note => {
        return note._id != noteId;
      });
      console.log(newArr);
      //  Insert new notes back into the db which in our case is just a json file
      fs.writeFile(filePath, JSON.stringify(newArr), function(err, data) {
        if (err) throw err;
        res.json(newArr);
      });
    });
  });
};
module.exports = router;
