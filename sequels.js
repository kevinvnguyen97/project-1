var a = localStorage.getItem("info");
a = JSON.parse(a);
console.log(a);

for (var i = 0; i < a.length; i++) {
    var gameImage = "https:" + a[i].cover.url;
    var highResImage = gameImage.replace("t_thumb", "t_720p");
    console.log(highResImage);
    $("#related-game-image-input" + (i + 1)).attr("src", highResImage);
    $("#related-game-image-input" + (i + 1)).attr("gameobj", JSON.stringify(a[i]));
    //$("#related-game-image-input" + (i + 1)).append(a);
    console.log(a[i].name);
    console.log('i: ' + i + ', image added');

    $("#related-game-image-input" + (i + 1)).on("click", function (event) {
        event.preventDefault();
        var gameObj = JSON.parse($(this).attr("gameobj"));

        // Game image
        var gameImage = "https:" + gameObj.cover.url;
        console.log(gameImage);
        var highResImage = gameImage.replace("t_thumb", "t_720p");
        console.log(highResImage);
        $("#main-pic").attr("src", "");
        $("#main-pic").attr("src", highResImage);

        // Game title
        $("#title").empty();
        $("#title").append(gameObj.name);
        console.log(gameObj.name);

        // Game genre
        $("#genre").empty();
        for (var j = 0; j < gameObj.genres.length; j++) {
            var genre = gameObj.genres[j].name;
            $("#genre").append(genre);
            if (j < gameObj.genres.length - 1) {
                $("#genre").append(", ");
            }
        }

        // Game mode
        $("#mode").empty();
        for (var j = 0; j < gameObj.game_modes.length; j++) {
            var mode = gameObj.game_modes[j].name;
            $("#mode").append(mode);
            if (j < gameObj.game_modes.length - 1) {
                $("#mode").append(", ");
            }
        }

        // Game year
        $("#year").empty();
        var year = gameObj.release_dates[0].human.substring(0, 4);
        $("#year").append(year);

        // Game platform
        $("#platform").empty();
        for (var i = 0; i < gameObj.platforms.length; i++) {
            platformList = gameObj.platforms[i].abbreviation;
            $("#platform").append(platformList);
            if (i !== gameObj.platforms.length - 1) {
                $("#platform").append(", ");
            }
        }

        // Game developer/company
        $("#developer").empty();
        for (var i = 0; i < gameObj.involved_companies.length; i++) {
            developers = gameObj.involved_companies[i].company.name;
            $("#developer").append(developers);
            if (i !== gameObj.involved_companies.length - 1) {
                $("#developer").append(", ");
            }
        }

        //Game Description
        var description = gameObj.summary;
        $("#description-body").empty();
        $("#description-body").append(description);
    });
}