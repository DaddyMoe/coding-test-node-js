const sqlite3 = require('sqlite3').verbose()

const DB_SOURCE = "db.sqlite"

let db = new sqlite3.Database(DB_SOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE post (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text UNIQUE, 
            content text, 
            CONSTRAINT title_unique UNIQUE (title)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO post (title, content) VALUES (?,?)'
                db.run(insert, ["Post","content"])
                db.run(insert, ["Another Post","content"])
            }
        });
    }
});


module.exports = db