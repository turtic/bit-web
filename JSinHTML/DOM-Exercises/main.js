var changeClass = function (ourClass) {

    return document.querySelector('ul').className = ourClass;

}

var changeClass1 = function (ourClass) {

    return document.getElementById('spec').className = ourClass;

}

var changeClass2 = function (ourClass) {


    var a = document.getElementsByTagName('li')

    for (var i = 0; i < a.length; i++) {
            
            a[i].className = ourClass;
        }

}



var changeClass3 = function(ourClass) {
    var ourBody = document.documentElement.childNodes[2];

    for (var i= ourBody.childNodes.length - 1; i>0; i--) {
        if (ourBody.childNodes[i].localName = 'ul') {

            index = i;
        }
    }

    var a = ourBody.childNodes[index].getElementsByTagName('li')

    for (var i = 0; i < a.length; i++) {
            
            a[i].className = ourClass;
        }

}