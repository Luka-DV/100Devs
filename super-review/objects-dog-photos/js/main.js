//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const urlString = data.message;
        let dogBreed = urlString.split("/")[4];

        if(dogBreed.includes("-")) {
            dogBreed = dogBreed.split("-").reverse()
            .map(word => word = word[0].toUpperCase() + word.slice(1))
            .join(" ");
        } else {
            dogBreed = dogBreed[0].toUpperCase() + dogBreed.slice(1);
        }

        document.querySelector("img").src = data.message;
        document.querySelector("img").alt = `Photo of the dog breed ${dogBreed}.`
        document.querySelector("h2").innerText = dogBreed;

    })
    .catch(error => {
        console.log(error)
    })


