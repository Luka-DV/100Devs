
import http from 'http';
import utils from "./utils.js";

const PORT = process.env.PORT;
const baseUrl = process.env.BASEURL;

const {
    logger, 
    htmlLoadHandler,
    cssJsLoadHandler,
    imgLoadHandler,
    getCoinFlipResult,
    figletErrorHandler
} = utils;

const server = http.createServer((req, res) => {
    logger(req, res, () => {
        const urlObj = new URL(req.url, baseUrl);
        const page = urlObj.pathname;

        console.log("urlOBJ: ", urlObj)
        console.log("page:", page)

        switch(page) {
            case "/": 
                htmlLoadHandler(req, res);
                break; 
            case "/css/normalize.css" :  
            case "/css/style.css" :  
            case "/js/main.js":
                cssJsLoadHandler(req, res, page);
                break;
            case "/img/1_euro_coin_S.png" : 
            case "/img/1_euro_mozart_S.png":
                imgLoadHandler(req, res, page);
                break;
            case "/flip-coin":
                getCoinFlipResult(req, res);
                break;
            default:
                figletErrorHandler(req, res);
        }
    
        // if (page === "/") {
        //     htmlLoadHandler(req, res);
        // } 
        // else if (page === "/css/normalize.css" || page === "/css/style.css" || page === "/js/main.js"){
        //     cssJsLoadHandler(req, res, page);
        // }
        // else if(page === "/img/1_euro_coin_S.png" || page === "/img/1_euro_mozart_S.png") {
        //     imgLoadHandler(req, res, page);
        // }
        // else if (page == "/flip-coin") {
        //     getCoinFlipResult(req, res);
        // }
        // else{
        //     figletErrorHandler(req, res);
        // }
    });
});

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
