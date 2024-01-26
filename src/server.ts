// Create express app
const express = require("express");
const app = express()
const db = require("./database.ts")

// Server port
const HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port http://localhost:%PORT%/".replace("%PORT%", HTTP_PORT.toString()))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({ "message": "Ok" })
});

app.get("/api/posts", (req, res, next) => {
    const sql = "select * from post"
    const params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({ "error": err.message });
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

// Insert here other API endpoints

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
