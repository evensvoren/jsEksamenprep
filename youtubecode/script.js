    /*let d = document.getElementById("destination");
    for(let i = 0; i < 10; i++){
        for(let k = i; k >= 0; k--){
            d.append(k + " ");
        }
        var br = document.createElement('br');
        d.appendChild(br);
    }


    function printArray(a) {
        var len = a.length, i = 0;
        if (len == 0){
        console.log("Empty Array");
        }
        else {
            do {
                console.log(a[i]);
            }
            while (++i < len);
        }
    }*/

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