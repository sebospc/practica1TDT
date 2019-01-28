let login = function () {
    var http = new XMLHttpRequest();
    http.open("POST", "/login", true);
    http.setRequestHeader("Content-type", "application/json");
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            result = http.responseText;
            console.log("result " + result);
            if(result == "correct"){
                window.location.replace('/formGPS/formgps.html?name='+document.getElementById("name").value)   
            }
        }
    }
    
    http.send(JSON.stringify({ name:document.getElementById("name").value , passwd: document.getElementById("password").value }));
       
}

let changeToSingup = function(){
    window.location.replace('/singin/singin.html')   
}