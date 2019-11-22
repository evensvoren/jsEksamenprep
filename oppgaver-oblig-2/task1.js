window.onload = dropDown;

function dropDown(){
    var numbOption = "<option value='0'>select amount</option>";
    for(var i = 1; i < 20; i++){
        numbOption += "<option value='" + i + "'>" + i + "</option>";
    }
    document.getElementById("dropDown").innerHTML = numbOption;
}

function clickButton(){
    dropDown();
    var writeField = document.getElementById("inputField").value;
    var shoppinglist = [];
    var arrnumb = shoppinglist.push(writeField);
        document.getElementById("listElements").innerHTML += arrnumb + shoppinglist;
   
    console.log(shoppinglist);
    
}
function undoButton(){
    
    var writeField = document.getElementById("inputField").value;
    var shoppinglist = [];
    shoppinglist.pop(writeField);
}
