

function clickButton(){

    var sjekkBrukernavn = document.getElementById("userInput");
    var sjekkPassord = document.getElementById("passord");

    if(sjekkBrukernavn == "" && sjekkPassord == ""){
        alert("Fill the empty space");
    }
    else if(sjekkBrukernavn == ""){
        alert("You need to write your username");
    }
    else if(sjekkPassord == ""){
        alert("You need to fill inn your password");
    }
    else if(sjekkBrukernavn.value == sjekkPassord.value){
        alert("You can't use the username as password");
    }
    else if (sjekkBrukernavn.value.length <= 2){
        alert("Your username is too short");
    }
    else if(sjekkBrukernavn.value.length >= 50){
        alert("Your username is too long");
    }

    else if(sjekkPassord.value.length <= 8 ){
        alert("Your password is too short");
    }
    else if(sjekkPassord.value.length >= 32){
        alert("Your password is too long");
    }
    else{
        var goodusername = sjekkBrukernavn.value;
        var goodpassword = sjekkPassord.value;
        alert("Welcome cocksucker!");
        console.log(goodusername, goodpassword);
    }
}