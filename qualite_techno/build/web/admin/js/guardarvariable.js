var dato1;
function leerDato(){
    dato1 = document.getElementById("datoNombre").value;
    sessionStorage.setItem("dataKey", dato1);
}

var dato2 = "jolakase"
function insertarDato(){
    
    document.getElementById("existencias").value = sessionStorage.getItem("dataKey");
}

function alertaDato(){
    alert(dato1);
}