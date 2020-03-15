var xhr = new XMLHttpRequest();
/*JS in-built object to consume APIs*/

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://swapi.co/api/");

xhr.send();