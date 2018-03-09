// var mainModule = (function (UIModule, dataModule) {

//     function addLoginButtonListener() {

//         document.querySelector(UIModule.UISelectors.buttonSelector).addEventListener('click', function () {







//         });
//     }

//     return {
//         init: function () {
//             console.log("lets go...");
//             addLoginButtonListener();
//         }
//     }

// })(UIModule, dataModule);

// mainModule.init();



// $('#search-input').keypress(function (e) {

// if (e.keyCode == 13) {
//     e.preventDefault();

//     let gitHubAPI = 'http://api.tvmaze.com/search/shows?q=';
//     let inputValue = $('#search-input').val();
//     let searchName = gitHubAPI + inputValue;

//     var request = $.ajax({
//         url: searchName,
//         method: "GET",
//     });

//     request.done(function (response) {

//         console.log(response);
//         for (let i = 0; i < 6; i++) {

//             showName = response[i].show.name;
//             showImage = response[i].show.image.original;
//             showURL = response[i].show.url;
//             // showCrew = showURL + '/crew';
//             // showAKA = showURL +'/akas';
//             // showEpisodes = showURL + '/episodes'
//             // http://api.tvmaze.com/mrrobot/1/crew

//             $('#person' + (i + 1) + ' h5').text(showName);
//             $('#person' + (i + 1) + ' img').attr("src", showImage);
//             $('#person' + (i + 1) + ' a').attr("href", showEpisodes);


//         }
//     });

//     request.fail(function (jqXHR, textStatus) {
//         alert("Request failed: " + textStatus);
//     });

// }
// });



// ++++++++++++++++++++++++++++++++++++ GIT SEARCH ++++++++++++++++++++++++++++++++++++

let gitHubAPI = 'http://api.tvmaze.com/shows';

var request = $.ajax({
    url: 'http://api.tvmaze.com/shows',
    method: "GET",
});

request.done(function (response) {

    console.log(response);
    for (let i = 0; i < 50; i++) {

        showName = response[i].name;
        // console.log(showName);
        showImage = response[i].image.original;
        // showURL = response[i].show.url;

        let element = `<div class="col-12 col-md-6 col-lg-4">
<div id="person${i}" class="card animated zoomin">
    <a href="">
        <img class="card-img-top" src="${showImage}" alt="Card image cap">
    </a>
    <div class="card-body">
        <a href="">
            <h5 class="card-title name1">${showName}</h5>
        </a>

    </div>
</div>
</div>`
        $(".card-deck").append(element);



        // $('#person' + (i + 1) + ' h5').text(showName);
        // $('#person' + (i + 1) + ' img').attr("src", showImage);
        // $('#person' + (i + 1) + ' a').attr("href", showEpisodes);


    }
});

request.fail(function (jqXHR, textStatus) {
    alert("Request failed: " + textStatus);
});



$(document).keypress(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();

        let gitHubAPI = 'http://api.tvmaze.com/search/shows?q=';
        let inputValue = $('#search-input').val();
        let searchName = gitHubAPI + inputValue;

        var request = $.ajax({
            url: searchName,
            method: "GET",
        });

        // delete top50
        $(".card-deck").html(' ');

        request.done(function (response) {

            console.log(response);
            for (let i = 0; i < 10; i++) {

                showName = response[i].show.name;
                showImage = response[i].show.image.original;
                // showURL = response[i].show.url;

                let element = `<div class="col-12 col-md-6 col-lg-4">
<div id="person${i}" class="card animated zoomin">
    <a href="">
        <img class="card-img-top" src="${showImage}" alt="Card image cap">
    </a>
    <div class="card-body">
        <a href="">
            <h5 class="card-title name1">${showName}</h5>
        </a>

    </div>
</div>
</div>`
                $(".card-deck").append(element);


            }
        });

        request.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });

    }
});


$('a').click(function (e) {

    // document.querySelector()


    var showID = $(this).attr("href"); // not necessary to store it, could be use as it in the if statement

    console.log(showID);

    //         let gitHubAPI = 'http://api.tvmaze.com/search/shows?q=';
    //         let inputValue = $('#search-input').val();
    //         let searchName = gitHubAPI + inputValue;

    //         var request = $.ajax({
    //             url: searchName,
    //             method: "GET",
    //         });

    //         // delete top50
    //         $(".card-deck").html(' ');

    //         request.done(function (response) {

    //             console.log(response);
    //             for (let i = 0; i < 10; i++) {

    //                 showName = response[i].show.name;
    //                 showImage = response[i].show.image.original;
    //                 // showURL = response[i].show.url;

    //                 let element = `<div class="col-12 col-md-6 col-lg-4">
    // <div id="person${i}" class="card animated zoomin">
    //     <a href="">
    //         <img class="card-img-top" src="${showImage}" alt="Card image cap">
    //     </a>
    //     <div class="card-body">
    //         <a href="">
    //             <h5 class="card-title name1">${showName}</h5>
    //         </a>

    //     </div>
    // </div>
    // </div>`
    //                 $(".card-deck").append(element);


    //             }
    //         });

    //         request.fail(function (jqXHR, textStatus) {
    //             alert("Request failed: " + textStatus);
    //         });

    //     }
});