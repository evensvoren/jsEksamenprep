

function plusKnapp(){
    var numbfelt1 = document.getElementById("input1").value;
    var numbfelt2 = document.getElementById("input2").value;
    var integer1 = parseInt(numbfelt1, 10);
    var integer2 = parseInt(numbfelt2, 10);
    var resplus = integer1 + integer2;
    document.getElementById("svaret").innerHTML = resplus;
}

function minusKnapp(){
    var numbfelt1 = document.getElementById("input1").value;
    var numbfelt2 = document.getElementById("input2").value;

    var resmin = numbfelt1 - numbfelt2;
    document.getElementById("svaret").innerHTML = resmin;
}

function gangeKnapp(){
    var numbfelt1 = document.getElementById("input1").value;
    var numbfelt2 = document.getElementById("input2").value;

    var resgang = numbfelt1 * numbfelt2;
    document.getElementById("svaret").innerHTML = resgang;
}

function deleKnapp(){
    var numbfelt1 = document.getElementById("input1").value;
    var numbfelt2 = document.getElementById("input2").value;

    var resdel = numbfelt1 / numbfelt2;
    document.getElementById("svaret").innerHTML = resdel;
}