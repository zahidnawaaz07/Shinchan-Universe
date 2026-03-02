function generateQuote() {
    const quotes = [
        "I am not naughty, I am just special!",
        "Hehehehehe!",
        "Mamaaaa!",
        "Action Kamen is my hero!",
        "I love choco chips!",
        "Mummy mujhe chocolate chahiye"
    ];

    let random = Math.floor(Math.random()*quotes.length);
    document.getElementById("quote").innerHTML = quotes[random];
}
function changeColor(){
    document.body.style.backgroundColor = "#FFD700";
}