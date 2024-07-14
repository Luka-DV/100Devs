
import express from "express";
import url from "url";
import path from "path";
import { MongoClient } from 'mongodb'

const PORT = process.env.PORT;
const connectionUri = process.env.connectionString;

const __filename = url.fileURLToPath(import.meta.url) //takes this file url and gives its adress (path + file)
const __dirname = path.dirname(__filename); //gives the path do this file

// console.log(`__filename: ${__filename}`);
// console.log("import.meta.url: ", import.meta.url);
// console.log(`__dirname: ${__dirname}`);

const app = express();

// connection string
// const connectionString = "mongodb+srv://Mando:jejz36@cluster0.fbweskb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(connectionUri);

// setting up the Embedded JS templating engine to generate the HTML for the quotes
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true }));


async function runClient() {
    try {
        await client.connect(); //connect to DB(optional)
        console.log('Connected to Database');

        const db = client.db("star-wars-quotes"); //database
        const quotesCollection = db.collection("quotes") //returns reference/creates a new db colleciton

        // we need the the db variable to access MongoDB, so we need to put Express request handlers here

        app.post("/quotes", async (req, res) => {
            try {
                const insertResult = await quotesCollection.insertOne(req.body); //adds one item into a collection
                console.log(insertResult);
                res.redirect("/");
            }catch(err) {
                console.err(err);
            }  
        })

        app.get("/", async (req, res) => {
            //res.sendFile(path.join(__dirname, "index.html")); //origninal, works: __dirname + "/index.html"
            const results = await db.collection("quotes").find().toArray(); //finds all the quotes and returns an array
            console.log(results);
            res.render("index.ejs", { quotes: results}); //used to render the .ejs file
            //console.log(cursor);
        })

    }catch (error) {
        console.error(error);
    }
}

runClient();


// app.get("/", (req, res) => {
//     res.send("Hello World");
// })

/* app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html")); //origninal, works: __dirname + "/index.html"
}) */

// app.post("/quotes", (req, res) => {
//     console.log(req.body);
// })


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})