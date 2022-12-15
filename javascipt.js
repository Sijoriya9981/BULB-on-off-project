function button(){document.getElementById("para").innerHTML="BULB ON/OFF PROJECT";
document.getElementById("btn1").style.display="none";

}
function button1(){
document.getElementById("bulb-container").style.display="block";
document.getElementById("button").style.display="none";
document.getElementById("para").innerHTML="BULB ON/OFF PROJECT";

}

function onbulb()
{
    document.getElementById("image").src="https://www.w3schools.com/jsref/bulbon.gif";
}
function offbulb()
{
    document.getElementById("image").src="https://www.w3schools.com/js/pic_bulboff.gif";
}