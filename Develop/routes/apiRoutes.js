//const notesData = require("../db/db.json");
const fs = require("fs");
let path = require("path");
let filePath = path.join(__dirname, "../db/db.json");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    console.log("in api/notes");
    fs.readFile(filePath, "utf8", function(err, data) {
      if (err) throw err;
      console.log("Got data back");
      console.log(data);
    });
    res.json({ Status: "Success" });
  });

  //   app.get("/api/data", function(req, res) {
  //     res.json(data);
  //   });

  app.post("/api/notes", function(req, res) {
    tableData.push(req.body);
    res.json(true);
  });
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    notesData.length = 0;

    res.json({ ok: true });
  });
};
