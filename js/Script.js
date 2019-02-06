var persone = [];
var selezionato = "maschio";//Tab attualmente selezionato

$(document).ready(function(){
  $("#invia").click(function(){
    Aggiungi();
  });
  $("#maschio").click(function(){
    AggiornaM();
  });
  $("#femmina").click(function(){
    AggiornaF();
  })
});

function Aggiungi() {//Salva la variabile nell'array di persone
    var c = 0;
    if(Riempito("#nome", "#smallnome")){
    var persona = {
        nome: $("#nome").val(),
        reddito: $("#reddito").val(),
        sesso: $("#sesso").val(),
    }
    persone.push(persona);
    $("#nome").val("");
    //Se sei nel tab maschio e aggiungi un maschio, ti aggiorna la lista
    if(persona.sesso == "maschio" && selezionato == "maschio")
    {
      AggiornaM();
    }
    //Idem per femmina
    else if(persona.sesso == "femmina" && selezionato == "femmina"){
      AggiornaF();
    }
    }
}

function Riempito(id, smallid) {//Controlla che il nome sia riempito
    if ($(id).val() == null || $(id).val() == "") {
        $(id).removeClass("border-success");
        $(id).addClass("border-danger");
        $(smallid).text("*Questo campo è obbligatorio");
        return false;
    }
    else {
        $(id).removeClass("border-danger");
        $(smallid).text("");
        return true;
    }
}

function AggiornaM() {//Quando clicchi sul tab maschio
  selezionato="maschio";
    var nmas = 0;
    var out = "<ul class = 'content'>";
    for (var i = 0; i < persone.length; i++) {
        if (persone[i].sesso == "maschio") {
            nmas++;
            out += ("<li class = 'row'><div class = 'col-sm-5'>Signor: "+ persone[i].nome + "</div><div class = 'col-sm-7'>Reddito: " + persone[i].reddito + "€</div></li>");
        }
    }
    out += ("</ul>");
    $("#stampa").html(out);
    $("#totale").html("<strong>Totale maschi:</strong> "+nmas);
}


function AggiornaF() {//Quando clicchi sul tab femmina
  selezionato="femmina";
    var nfem = 0;
    var out = "<ul class = 'content'>";
    for (var i = 0; i < persone.length; i++) {
        if (persone[i].sesso == "femmina") {
            nfem++;
            out += ("<li class = 'row'><div class = 'col-sm-5'>Signora: "+ persone[i].nome + "</div><div class = 'col-sm-7'>Reddito: " + persone[i].reddito + "€</div></li>");
        }
    }
    out += ("</ul>");
    $("#stampa").html(out);
    $("#totale").html("<strong>Totale femmine:</strong> "+nfem);
}
