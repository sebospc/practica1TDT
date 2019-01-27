let singup = function(){
    var http = new XMLHttpRequest();
    http.open("POST", "/singup", true);
    http.setRequestHeader("Content-type", "application/json");
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            console.log("result " + http.responseText);
        }
    }
    

    http.send(JSON.stringify({ name: document.getElementById("nameSing").value , 
                               email: document.getElementById("emailSing").value,
                               passwd: document.getElementById("passwordSing").value }));
    
}

let changeToLogin = function(){
    window.location.replace('/login/login.html')
}