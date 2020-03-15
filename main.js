var xhr = new XMLHttpRequest();
/*JS in-built object to consume APIs*/
xhr.open("GET", "https://swapi.co/api/");
/*GET - when retrieving data from a server*/
/*POST - when sending data to a server*/
xhr.send();
/*send - sends the request*/

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { 
        /*xhr object has various states while being performed
        4 means it's been completed
        status of 2 - means content delivered*/
        document.getElementById("data").innerHTML = this.responseText;
        /*the responseText that comesback from the xhr object*/
        console.log(JSON.parse(this.responseText));
        /*response text is a string unless parsed*/
    }
};