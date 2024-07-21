
const update = document.querySelector("#update-button");

update.addEventListener("click", async () => {
    try {
        const res = await fetch("/quotes", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Dart Vader",
                quote: "I find your lack of faith disturbing."
            })
        });

        if(res.ok) {
            const response = await res.json();
            console.log(response);
            window.location.reload(); //reloads the entire page
        }

    } catch (error) {
        console.error(error);
    }
    
});