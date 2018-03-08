// https://api.github.com/search/users?q=stefansavic89

$(document).keypress(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();

        let gitHubAPI = 'https://api.github.com/search/users?q=';
        let inputValue = $('search-input').val();
        let searchName = gitHubAPI + inputValue;

        var request = $.ajax({
            url: searchName,
            method: "GET",
        });

        request.done(function (response) {
            console.log(response);
            console.log(response.items);

            for (let i = 10; i < 16; i++) {
                a = response.items[i].login + ' ' + response.items[i].avatar_url
                console.log(a);
            }
        });

        request.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });

    }
});