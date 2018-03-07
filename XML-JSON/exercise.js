// XML

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://freegeoip.net/xml/185.29.100.156", false);
xmlhttp.send();

xmlhttp.load = function() {
var xmlDoc = xmlhttp.responseXML;



console.log(xmlDoc.getElementsByTagName("CountryName")[0].childNodes(0))
}

// JSON 

var request = new XMLHttpRequest();
request.open('GET', 'https://freegeoip.net/json/185.29.100.156', true);

request.onload = function() {
if (request.status >= 200 && request.status < 400) {
// Success!
var data = JSON.parse(request.responseText);

console.log(data.country_name)
} else {
// We reached our target server, but it returned an error

}
};

request.onerror = function() {
// There was a connection error of some sort
};

request.send();


