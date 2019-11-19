window.onload = startup;

function startup(){
    var a = 5;
    var b = 4;

    var c = a + b;
    var d = a - b;
    var e = a / b;
    var f = a * b;
    var g = b - a;
    var h = b / a;

    var maths = [c, d, e, f, g, h];
    var list = "";
    console.log(c, d, e, f, g, h)
   
    for(var i = 0; i < maths.length; i++){
        list += "<li>" + maths[i] + "</li></br>";
    }
    document.getElementById("math").innerHTML = list;
    
   

}