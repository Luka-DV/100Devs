import fs from "fs/promises";
import figlet from "figlet";

//logger middleware
function logger(req, res, next) {
    console.log(`${req.method} : ${req.url}`);
    next();
}


//page laoder handler
async function htmlLoadHandler(req, res) {
    try {
        const data = await fs.readFile("index.html")
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        
    } catch (error) {
        console.error(error);
        figletErrorHandler(req, res);
    }
};


// css/js loader handler
async function cssJsLoadHandler(req, res, page) {
    try {
        const data = await fs.readFile(page.slice(1));
        res.writeHead(200, {'Content-Type': page.endsWith(".js") ? 'text/javascript' : 'text/css'});
        res.write(data);
        res.end();
    } catch (error) {
        console.error(error);
        figletErrorHandler(req, res);
    }
}


//img loader handler
async function imgLoadHandler(req, res, page) {
    try {
        const data = await fs.readFile(page.slice(1));
        res.writeHead(200, {'Content-Type': "image/png"});
        res.write(data);
        res.end();
    } catch (error) {
        console.error(error);
        figletErrorHandler(req, res);
    }
}


//coin-flip logic
function getCoinFlipResult(req, res) {
    try {
        const result =  Math.ceil(Math.random() * 2) === 1 ? "heads" : "tails";

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    } catch (error) {
        console.error(error);
        figletErrorHandler(req, res);
    }
}


//figlet handler
function figletErrorHandler(req, res) {
    figlet('404!!!', (err, data) => {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.statusCode = 404;
        res.write(data);
        res.end();
    });
}


export default { 
    logger,
    htmlLoadHandler,
    figletErrorHandler,
    cssJsLoadHandler,
    imgLoadHandler,
    getCoinFlipResult
 };