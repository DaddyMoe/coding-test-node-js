const sqlite3 = require('sqlite3').verbose()

const DB_SOURCE = "db.sqlite"

let db = new sqlite3.Database(DB_SOURCE, (err: any) => {
    if (err) {
      // Cannot open database
      console.error(err.message as string)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE post (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text UNIQUE, 
            content text, 
            CONSTRAINT title_unique UNIQUE (title)
            )`,
        (err: any) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO post (title, content) VALUES (?,?)'
                db.run(insert, ["Post","content"])
                db.run(insert, ["Another Post","content"])
            }
        });

        db.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE,
            tokens text [],
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err: any) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                // var insert = 'INSERT INTO post (title, content) VALUES (?,?)'
                // db.run(insert, ["Post","content"])
                // db.run(insert, ["Another Post","content"])
            }
        });
    }
});


module.exports = db