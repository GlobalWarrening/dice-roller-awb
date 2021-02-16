//Alex Burgess
//CSPS-44000
//Functions for dice roller to play farkle

function HelpButton(){
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
        });
    }
}

function RollDice(){
    document.getElementById("dice0").value = Math.floor(Math.random()*6)+1;
    document.getElementById("dice1").value = Math.floor(Math.random()*6)+1;
    document.getElementById("dice2").value = Math.floor(Math.random()*6)+1;
    document.getElementById("dice3").value = Math.floor(Math.random()*6)+1;
    document.getElementById("dice4").value = Math.floor(Math.random()*6)+1;
    document.getElementById("dice5").value = Math.floor(Math.random()*6)+1;
}


