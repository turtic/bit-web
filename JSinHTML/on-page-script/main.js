var test = function () {
    var welcomeMessage = "Hello World!";
    console.log(welcomeMessage);
}



var info = function () {

    console.log(navigator.platform);
    console.log(navigator.appVersion);
    console.log(navigator.vendor);
}


var isOnline = function () {
    console.log(navigator.onLine);
}

var browserWidthHeight = function () {
    console.log("Height: " + screen.height)
    console.log("Width: " + screen.width)
}

var maxHeight = function () {
    console.log("maxHeight: " + screen.availWidth)
}

var locationFull = function () {
    console.log("full url address: " + location.href);
    console.log("domain name: " + location.origin);
    console.log("Protocol: " + location.protocol);
    console.log("Parameters which are part of URL: " + location.search);

}

var reloadMe = function () {
    location.reload()
}

var redirectMe = function () {
    location.href = 'https://v4-alpha.getbootstrap.com/utilities/typography/'
}

var storage = localStorage;

var storePassedData = function (key, value) {

   return storage.setItem(key, value);

}

var readPassedData = function (key) {
if (storage.getItem(key) == null) {
    return console.log("There is no data");
}

    return console.log(storage.getItem(key));

}

var removeData = function (key) {
    if (storage.getItem(key) == null) {
        return console.log("There is no data");
    }
    
        return console.log(storage.removeItem(key));
    
    }
