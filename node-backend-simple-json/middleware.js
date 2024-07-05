
import fs from "fs/promises";
import students from "./studentsData.js";
import figlet from "figlet";

//logger middleware

function logger(req, res, next) {
    console.log(`${req.method} : ${req.url}`);
    next();
}

//page laoder handler

async function htmlLoadHandler(req, res, page) {
    try {
        const refObj = {
            "/": "index.html",
            "/otherpage": "otherpage.html",
            "/otherotherpage": "otherotherpage.html"
        };
    
        const data = await fs.readFile(refObj[page])
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        
    } catch (error) {
        console.error(error);
        figletErrorHandler(req, res);
    }
};

// get student handler

function getStudentHandler(req, res, params) {
    if(params.has('student')){
        const student = params.get('student');
        const objToJson = student in students ? students[student] : students["other"];

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(objToJson));
    } else {
        figletErrorHandler(req, res);
    }
}

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
    getStudentHandler,
    figletErrorHandler,
    cssJsLoadHandler
 };