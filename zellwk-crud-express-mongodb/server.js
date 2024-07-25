
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

// middleware for parsing POST msg-es from the form element
app.use(express.urlencoded({extended: true }));
// so the server can parse json data
app.use(express.json());
// middleware to make the public folder accessible to the public - serves static files that are in the folder
app.use(express.static("public"));

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
                console.log("POST result: ", insertResult);
                res.redirect("/");
            }catch(err) {
                console.err(err);
            }  
        })

        app.put("/quotes", async (req, res) => {
            try {
                console.log("Request body:", req.body);
                const result = await quotesCollection.findOneAndUpdate( //This method lets us find and change one item in the database: .findOneAndUpdate(query, update, options)
                    { name: "Yoda" }, 
                    {
                        $set: {
                            name: req.body.name,
                            quote: req.body.quote,
                        },
                    },
                    {
                        upsert: true,
                    }
                );

                console.log("PUT result: ", result);
                res.json("Success");

            } catch (error) {
                console.error(error);
            }
        })

        app.delete("/quotes", async (req, res) => {

            try {
                const result = await quotesCollection.deleteOne( //or findOneAndDelete()
                    { name: req.body.name }
                );

                console.log("DELETE result: ", result);

                if (result.deletedCount === 0) {
                    return res.json("No quote to delete")
                  }
                res.json("Deleted Darth Vader's quote");

            } catch (error) {
                console.error(error);
            }
            
            
        })

        app.get("/", async (req, res) => {
            // await db.collection('quotes').deleteMany({}); //deletes all the documents in the collection
            // res.sendFile(path.join(__dirname, "index.html")); //origninal, works: __dirname + "/index.html"
            const results = await db.collection("quotes").find().toArray(); //finds all the quotes and returns an array
            console.log("GET results: ", results);
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