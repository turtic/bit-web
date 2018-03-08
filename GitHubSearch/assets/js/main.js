
$(document).keypress(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();

        let gitHubAPI = 'https://api.github.com/search/users?q=';
        let inputValue = $('#search-input').val();
        let searchName = gitHubAPI + inputValue;

        var request = $.ajax({
            url: searchName,
            method: "GET",
        });

        request.done(function (response) {


            for (let i = 1; i < 7; i++) {

                userName = response.items[i].login;
                userImage = response.items[i].avatar_url
                $('#person' + i + ' h5').text(userName);
                $('#person' + i + ' img').attr( "src", userImage );

            }
        });

        request.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });

    }
});