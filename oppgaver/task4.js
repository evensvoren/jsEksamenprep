
function startup(){
    var numbfelt1 = document.getElementById("input1").value;
    var numbfelt2 = document.getElementById("input2").value;
   var plus = document.getElementById("plus").value;
    document.getElementById("minus").value;
    document.getElementById("gange").value;
    document.getElementById("dele").value;

    if(plus === true){
        var res = numbfelt1 + numbfelt2;
        document.getElementById("svaret").innerHTML = res;
    }
}