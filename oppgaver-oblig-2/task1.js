window.onload = dropDown;
var shoppinglist = [];
function dropDown(){
    var numbOption = "<option value='0'>select amount</option>";
    for(var i = 1; i < 20; i++){
        numbOption += "<option value='" + i + "'>" + i + "</option>";
    }
    document.getElementById("dropDown").innerHTML = numbOption;
}

function clickButton(){
    var writeField = document.getElementById("inputField").value;
        var arrnumb = shoppinglist.push(writeField);
        var lastElement = shoppinglist[shoppinglist.length -1];
        document.getElementById("listElements").innerHTML = shoppinglist + " ";
        document.getElementById("funStuff").innerHTML = shoppinglist[0] +  " " + lastElement +  " " + arrnumb + " ";
    
    console.log(shoppinglist);
    
}
function undoButton(){
    var arrlength = shoppinglist[shoppinglist.length];
    var lastElement = shoppinglist[shoppinglist.length -1];
    var popped = shoppinglist.pop();
    console.log(popped);
    document.getElementById("listElements").innerHTML = shoppinglist;
    document.getElementById("funStuff").innerHTML = shoppinglist[0] + " " + lastElement + "  " + arrlength + " ";
}
