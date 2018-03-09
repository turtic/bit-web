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


            for (let i = 0; i < 6; i++) {

                userName = response.items[i].login;
                userImage = response.items[i].avatar_url
                $('#person' + (i + 1) + ' h5').text(userName);
                $('#person' + (i + 1) + ' img').attr("src", userImage);

            }
        });

        request.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });

    }
});