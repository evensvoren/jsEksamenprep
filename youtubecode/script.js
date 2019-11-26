    
    
    //Appendchild
    let d = document.getElementById("destination");
    for(let i = 0; i < 10; i++){
        for(let k = i; k >= 0; k--){
            d.append(k + " ");
        }
        var br = document.createElement('br');
        d.appendChild(br);
    }
    //Do/While løkke
    function buttonOnClick(){
        var text = "";
        var b = 1;
        do {
            text += "I got 99 problems, but a bitch ain't " + b + "</br>";
            b++;
        }
        while (b <= 5);
        document.getElementById("whilelok").innerHTML = text;
    }
    //Canvas sirkel Eksamen
    var canvas = document.querySelector("canvas");
    canvas.width = 400;
    canvas.height = 400;
    var x = 0;
    var y = 200;
    var c = canvas.getContext("2d");
    for(x = 0; x < 400; x++){
        for(var radius = 4; radius < 40; radius++){
            radius += 2.8;
            c.beginPath();
            c.arc(x, y, radius, 0, Math.PI *2, false);
            c.strokeStyle = "black";
            c.stroke();
        }
        x += 40;
    }
    
    function arrayClick(){
    var tall = [2,3,4,2,3,6,7,5,5];
    for(var s = 0; s < tall.length; s++){
        var likeTall = 0;
        for(var j = 0; j < tall.length; j++){
            if(tall[j] === tall[s]){
                likeTall++;
            }
        }
        if(likeTall === 1){
            document.getElementById("arrayet").innerHTML += tall[s] + " ";
        }
       
    }
}