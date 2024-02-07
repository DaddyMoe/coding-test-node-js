const express = require("express");
const app = express();
const db = require("./database.ts");
const postRouter = require("./routers/post");

const port = process.env.PORT || 3030;

app.use(express.json());
app.use(postRouter);

app.listen(port, () => {
    console.log("Serveris runnig on port " + port)
})
// app.use(function(req, res){
//     res.status(404);
// });
