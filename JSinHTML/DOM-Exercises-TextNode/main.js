


var test = function () {

    var a = document.querySelector('li');

    var message= a.textContent; 

    alert(a.textContent);


}

var test1 = function (message) {

    var x = document.querySelector('ul').lastElementChild;

    x.textContent = message; 


}





















// var test = function () {

//     var a = document.getElementsByClassName('active')[0].parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild
//     var b = document.getElementsByClassName('active');

//     b[0].className = ' ';
//     a.className = 'active';
// }

// var test1 = function () {

//     var a = document.getElementsByClassName('selected')[0].parentElement.nextElementSibling.firstElementChild.nextElementSibling;
//     var b = document.getElementsByClassName('selected');

//     b[0].className = 'col-4';
//     a.className = 'col-4 selected';

// }


// var changeClass = function (ourClass) {

//     return document.querySelector('ul').className = ourClass;

// }

// var changeClass1 = function (ourClass) {

//     return document.getElementById('spec').className = ourClass;

// }

// var changeClass2 = function (ourClass) {


//     var a = document.getElementsByTagName('li')

//     for (var i = 0; i < a.length; i++) {

//             a[i].className = ourClass;
//         }

// }



// var changeClass3 = function(ourClass) {
//     var ourBody = document.documentElement.childNodes[2];

//     for (var i= ourBody.childNodes.length - 1; i>0; i--) {
//         if (ourBody.childNodes[i].localName = 'ul') {

//             index = i;
//         }
//     }

//     var a = ourBody.childNodes[index].getElementsByTagName('li')

//     for (var i = 0; i < a.length; i++) {

//             a[i].className = ourClass;
//         }

// }