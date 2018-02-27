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

//     window.history
// Play around with the browser forward/back navigation.
// Implement a function that navigates two pages back.

var ourBack = function () {
    history.back()
}



var ourForward = function () {
    history.forward()
}

// setTimeout(ourForward, 5000);


var goForward = function (n) {
    history.go(n)
}

var myAlert = function (n) {
    window.alert(n)
}

// Create a function that shows the user a greeting message using alert
// Then a question is presented to the user using prompt
// When the user provides the answer, that answer is used in the confirm dialog
// The format of the message in the dialog should be: "We will submit this answer now! " + the answer
// If the user clicks OK, show alert with success message
// If the user clicks Cancel, don't show anything

var ourTest = function () {

    window.alert("Hello Stevane!");

    var result = prompt("How are you?");

    window.confirm("We will submit this answer now! " + result);

    if (window.confirm) {
        window.alert("Success");
    } 
}