window.onload = startup;

function startup(){
    var list = "";
    for (i = 1; i < 7; i++){
       list += "<li><a href='oppgave" + i + ".html'>" + "Oppgave " + i + "</a></li>";
    }
    document.getElementById("liste").innerHTML = list;
}