var a=localStorage.getItem("info");
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
var genres = [];
for (var i = 0; i < a[0].genres.length; i++) {
    genres[i] = a[0].genres[i].name;
    $("#genre").append(genres[i]);
    if (i !== a[0].genres.length - 1) {
        $("#genre").append(", ");
    }
}

// Game mode
$("#mode").empty();
var modes = [];
for (var i = 0; i < a[0].game_modes.length; i++) {
    modes[i] = a[0].game_modes[i].name;
    $("#mode").append(modes[i]);
    if (i !== a[0].game_modes.length - 1) {
        $("#mode").append(", ");
    }
}

// Game year
//$("#year").empty();
//var unixDate = new Date(a[0].date);
//console.log(unixDate);
//var utcString = unixDate.toUTCString();
//console.log(utcString);

// Game platform
$("#platform").empty();
var platformList = [];
for (var i = 0; i < a[0].platforms.length; i++) {
    platformList[i] = a[0].platforms[i].abbreviation;
    $("#platform").append(platformList[i]);
    if (i !== a[0].platforms.length - 1) {
        $("#platform").append(", ");
    }
}

// Game developer/company
$("#developer").empty();
var developers = [];
for (var i = 0; i < a[0].involved_companies.length; i++) {
    developers[i] = a[0].involved_companies[i].company.name;
    $("#developer").append(developers[i]);
    if (i !== a[0].involved_companies.length - 1) {
        $("#developer").append(", ");
    }
}


//Game Description
var description = a[0].summary;
$("#description-body").empty();
$("#description-body").append(description);

//Game Image//
// var imageCode = a[0].cover
// var mainImage=$("<img>").attr("src", imageCode);
// $("#main-pic").empty();
// $("#main-pic").append(mainImage);