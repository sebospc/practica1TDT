let signup = function () {
    var http = new XMLHttpRequest();
    http.responseType = 'json';
    http.open("POST", "/signup", true);
    http.setRequestHeader("Content-type", "application/json");
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            localStorage.setItem("tokenPractica1", http.response.token);
            window.location.replace('/formGPS/formgps.html')
        }
        
    }


    http.send(JSON.stringify({
        username: document.getElementById("nameSing").value,
        email: document.getElementById("emailSing").value,
        password: document.getElementById("passwordSing").value
    }));

}

let changeToLogin = function () {
    window.location.replace('/login/login.html')
}