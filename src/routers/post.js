const express = require('express')
const router = new express.Router()

router.get("/", (req, res, next) => {
    res.json({ "message": "Ok" })
});

router.get("/api/posts", (req, res, next) => {
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


module.exports = router;