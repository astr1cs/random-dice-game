var random=Math.floor(Math.random()*6)+1 ;

var randomDiceImages="dice"+random+".png";
var randomDiceImagesSource="images/"+randomDiceImages;


var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImagesSource);

var random2=Math.floor(Math.random()*6) +1;
var radomImageSource2="images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",radomImageSource2);

if(random>random2)
{
document.getElementById("demo").innerHTML="Player 1 Wins 🚩"
}
else
{
    document.getElementById("demo").innerHTML="🚩 Player 2 Wins"
}
