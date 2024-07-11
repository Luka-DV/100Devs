
document.querySelector("#coin-heads").addEventListener("click", () => {
    makeReq("heads");
});

document.querySelector("#coin-tails").addEventListener("click", () => {
    makeReq("tails");
});

async function makeReq(coinSide) {
    try {
        const res = await fetch("/flip-coin");
        const data = await res.json();
        console.log(data);

        document.querySelector("img").src = data === "heads" ? "img/1_euro_mozart_S.png" : "img/1_euro_coin_S.png";
        document.querySelector("img").alt = data === "heads" ? "The heads side of an 1 euro coin" : "The tails side of an 1 euro coin";

        document.querySelector("#result").textContent = `You ${data === coinSide ? "won" : "lost"} the game!`;


    } catch (error) {
        console.log(error);
    }
}