

let addValues = function(){
    
    var http = new XMLHttpRequest();
    http.open("POST", "/addInfoGps", true);
    http.setRequestHeader("Content-type", "application/json");
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            console.log("result " + http.responseText);
        }
    }
    http.setRequestHeader("authorization", localStorage.getItem("tokenPractica1"));
    http.send(JSON.stringify({ token: localStorage.getItem("tokenPractica1"),
                               gpsLatitud: document.getElementById("latitud").value , 
                               gpsLongitud: document.getElementById("longitud").value,
                               hora: document.getElementById("hora").value,
                               fecha: document.getElementById("fecha").value }));
}
