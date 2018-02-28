var test = function (a, dom) {
    var sum = '';

    for (i = 0; i < a.length; i++) {

        sum = sum + '<option>' + a[i] + '</option>';
    }

    document.querySelector(dom).innerHTML = '<select>' + sum + '<select>'

}


// test([1,2,3,4,5,], 'div:nth-child(1)')
// test([1,2,3,4,5,], 'div:nth-child(2)')


var test1 = function (a, node) {
    var newDropDown = document.createElement("select");

    for (i = 0; i < a.length; i++) {
        // Create a new element and store it in a variable
        var option = document.createElement('option');

        // Create text node and store it in a variable
        var newText = document.createTextNode(a[i]);

        // Attach the text node to the element
        option.appendChild(newText);

        newDropDown.appendChild(option);
    }

    node.appendChild(newDropDown);
}

var node = document.querySelectorAll('div')[1];
test1([1,2,3,4,5,], node)