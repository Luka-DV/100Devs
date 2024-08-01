
const update = document.querySelector("#update-button");
const deleteButton = document.querySelector("#delete-button");

update.addEventListener("click", async () => {
    try {
        const res = await fetch("/quotes", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Darth Vader",
                quote: "I find your lack of faith disturbing."
            })
        });

        if(res.ok) {
            const response = await res.json();
            console.log("UPDATE response: ", response);
            document.querySelector("#message").textContent = "";
            updateDOM("PUT");
            //window.location.reload(); //reloads the entire page
        }

    } catch (error) {
        console.error(error);
    }
    
});


deleteButton.addEventListener("click", async () => {
    try {
        const res = await fetch("/quotes", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Darth Vader"
            })
        });

        if(res.ok) {
            const response = await res.json();
            console.log("DELETE response: ", response);
            if (response === "No quote to delete") {
                document.querySelector("#message").textContent = "No Darth Vader quote to delete";
            } else {
                updateDOM("DELETE");
                //window.location.reload(true);
            }
           
        }

    } catch (error) {
        console.error(error);
    }
    
});


function updateDOM(method) {
    const quotes = document.querySelectorAll(".quote");

    if(method === "PUT") {

        let yodaQuoteFound = false;
        const vaderQuote = "Darth Vader: I find your lack of faith disturbing.";
    
        for(let quote of quotes) {
            if(quote.innerText.startsWith("Yoda:")) {
                quote.innerText = vaderQuote;
                yodaQuoteFound = true;
                break;
            }
        }
    
        if(!yodaQuoteFound) {
            const newLiElement = document.createElement("li");
            newLiElement.innerText = vaderQuote;
            newLiElement.classList.add("quote");
            document.querySelector(".quotes").appendChild(newLiElement);
        }

    } else if (method === "DELETE") {

        for(let quote of quotes) {
            if(quote.innerText.startsWith("Darth Vader:")) {
                quote.remove();
                break;
            }
        }
    }
    
}



