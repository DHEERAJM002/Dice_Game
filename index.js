var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var src1="images/dice"+randomNumber1+".png";
var src2="images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",src1);
document.querySelector(".img2").setAttribute("src",src2);
if(randomNumber1>randomNumber2)
    document.querySelector("h2").innerHTML="Player 1 wins!";
else if(randomNumber1<randomNumber2)
    document.querySelector("h2").innerHTML="Player 2 wins!"
else
document.querySelector("h2").innerHTML="Its a draw!"
