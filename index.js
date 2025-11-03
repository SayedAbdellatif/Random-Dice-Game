var btn = document.querySelector(".btn");
btn.addEventListener("click", ()=>{
    diceGame()

})

const diceGame = () => {
    var randomDiceNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = (`dice${randomDiceNumber1}.png`);
var randomImageSource1 = `images/${randomDiceImage}`;
var images = document.querySelectorAll("img")[0];
images.setAttribute("src" , randomImageSource1);

var randomDiceNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = `images/dice${randomDiceNumber2}.png`;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomDiceNumber1 > randomDiceNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if(randomDiceNumber1 < randomDiceNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}else{
    document.querySelector("h1").innerHTML = "Draw"
}
    
}
diceGame()
 
