

let addValues = function(){
    
    var http = new XMLHttpRequest();
    http.open("POST", "/addInfoGps", true);
    http.setRequestHeader("Content-type", "application/json");
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            console.log("result " + http.responseText);
        }
    }
    
    http.send(JSON.stringify({ name: getQueryVariable("name"),
                               gpsLatitud: document.getElementById("latitud").value , 
                               gpsLongitud: document.getElementById("longitud").value,
                               hora: document.getElementById("hora").value,
                               fecha: document.getElementById("fecha").value }));
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}