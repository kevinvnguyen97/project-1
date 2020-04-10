var a = localStorage.getItem("info");
a = JSON.parse(a);
console.log(a);

// Game image
var gameImage = "https:" + a[0].cover.url;
console.log(gameImage);
var highResImage = gameImage.replace("t_thumb", "t_720p");
console.log(highResImage);
$("#main-pic").attr("src", "");
$("#main-pic").attr("src", highResImage);

// Game Title
var title = a[0].name;
$("#title").empty();
$("#title").append(title);

// Game Genre
$("#genre").empty();
for (var i = 0; i < a[0].genres.length; i++) {
    var genres = a[0].genres[i].name;
    $("#genre").append(genres);
    if (i !== a[0].genres.length - 1) {
        $("#genre").append(", ");
    }
}

// Game mode
$("#mode").empty();
for (var i = 0; i < a[0].game_modes.length; i++) {
    var modes = a[0].game_modes[i].name;
    $("#mode").append(modes);
    if (i !== a[0].game_modes.length - 1) {
        $("#mode").append(", ");
    }
}

// Game year
$("#year").empty();
var year = a[0].release_dates[0].human.substring(0, 4);
$("#year").append(year);

// Game platform
$("#platform").empty();
for (var i = 0; i < a[0].platforms.length; i++) {
    platformList = a[0].platforms[i].abbreviation;
    $("#platform").append(platformList);
    if (i !== a[0].platforms.length - 1) {
        $("#platform").append(", ");
    }
}

// Game developer/company
$("#developer").empty();
for (var i = 0; i < a[0].involved_companies.length; i++) {
    developers = a[0].involved_companies[i].company.name;
    $("#developer").append(developers);
    if (i !== a[0].involved_companies.length - 1) {
        $("#developer").append(", ");
    }
}


//Game Description
var description = a[0].summary;
$("#description-body").empty();
$("#description-body").append(description);

// //Game Image//
// // var imageCode = a[0].cover
// // var mainImage=$("<img>").attr("src", imageCode);
// // $("#main-pic").empty();
// // $("#main-pic").append(mainImage);

// //we're creating related games links (names)

// $('.related-game').on("click", function (event) {
//     event.preventDefault();

//     // Fields
//     // id - game ID
//     // name - game name
//     // cover.url - image of cover
//     // date - date of release (must convert from timestamp to date using .toDateString())
//     // game_modes.name - list of game modes
//     // involved_companies.company.name - names of the companies/developers
//     // platforms.abbreviation - abbreviated names of platforms
//     // genres.name - names of genres
//     // summary - description of game

//     // USE EXPANDER
//     gameQueryURL = "https://api-v3.igdb.com/games/?search=" + gameName + "&fields=id,name,cover.url,game_modes.name,involved_companies.company.name,platforms.abbreviation,genres.name,summary";

//     $.ajax({
//         url: cors + gameQueryURL,//cors + queryURL + gameName,
//         headers: {
//             "user-key": "0cc1bfecc2736937e59cd1a85bf85210"
//         },
//         method: "POST"
//     }).then(function (gameResponse) {
//         console.log(gameResponse);
//         localStorage.setItem("infos", JSON.stringify(gameResponse));
//     }).catch(function (error) {
//         console.log(error);
//     });
// });
