//making a more readable and newer version 

import http from 'http';

import utils from "./middleware.js";

const PORT = process.env.PORT;
const baseUrl = process.env.BASEURL;

const { 
    logger, 
    htmlLoadHandler, 
    getStudentHandler, 
    figletErrorHandler, 
    cssJsLoadHandler 
} = utils;

const server = http.createServer((req, res) => {
    logger(req, res, () => {
        const urlObj = new URL(req.url, baseUrl);
        const page = urlObj.pathname;
        const params = urlObj.searchParams;

        if (page == '/' || page == '/otherpage' || page == '/otherotherpage') {
            htmlLoadHandler(req, res, page);
        } 
        else if (page == '/api') {
            getStudentHandler(req, res, params)
        }
        else if (page == '/css/style.css' || page == '/js/main.js'){
            cssJsLoadHandler(req, res, page)
        }
        else{
            figletErrorHandler(req, res);
        }
    });
});

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
