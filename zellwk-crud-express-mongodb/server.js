
import express from "express";
import url from "url";
import path from "path";

const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url) //takes this file url and gives its adress (path + file)
const __dirname = path.dirname(__filename); //gives the path do this file

// console.log(`__filename: ${__filename}`);
// console.log("import.meta.url: ", import.meta.url);
// console.log(`__dirname: ${__dirname}`);


const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello World");
// })

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html")); //origninal, works: __dirname + "/index.html"
})



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})