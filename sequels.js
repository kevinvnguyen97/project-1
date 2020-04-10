var a = localStorage.getItem("info");
a = JSON.parse(a);
console.log(a);

for (var i = 0; i < a.length; i++) {
    if(a[i].cover !== undefined) {
        var gameImage = "https:" + a[i].cover.url;
        var highResImage = gameImage.replace("t_thumb", "t_720p");
        console.log(highResImage);
        $("#related-game-image-input" + (i + 1)).attr("src", highResImage);
        console.log('i: ' + i + ', image added');
    }

    else {
        $("#related-game-image-input" + (i + 1)).attr("src", "./image-not-available.jpg");
        console.log('i: ' + i + ', image not available');
    }

    $("#related-game-image-input" + (i + 1)).attr("gameobj", JSON.stringify(a[i]));
    //$("#related-game-image-input" + (i + 1)).append(a);
    console.log(a[i].name);

    $("#related-game-image-input" + (i + 1)).on("click", function (event) {
        event.preventDefault();
        $("#memes").hide();
        $("html, body").animate({scrollTop: "0"});
        var gameObj = JSON.parse($(this).attr("gameobj"));

        // Game image
        if(gameObj.cover !== undefined) {
            var gameImage = "https:" + gameObj.cover.url;
            console.log(gameImage);
            var highResImage = gameImage.replace("t_thumb", "t_720p");
            console.log(highResImage);
            $("#main-pic").attr("src", "");
            $("#main-pic").attr("src", highResImage);
        }
        else {
            $("#main-pic").attr("src", "");
            $("#main-pic").attr("src", "./image-not-available.jpg");
        }

        // Game title
        $("#title").empty();
        $("#title").append(gameObj.name);
        console.log(gameObj.name);

        // Game genre
        $("#genre").empty();
        if(gameObj.genres !== undefined) {
            for (var j = 0; j < gameObj.genres.length; j++) {
                var genre = gameObj.genres[j].name;
                $("#genre").append(genre);
                if (j < gameObj.genres.length - 1) {
                    $("#genre").append(", ");
                }
            }
        }
        else {
            $("#genre").append("N/A");
        }

        // Game mode
        $("#mode").empty();
        if(gameObj.game_modes !== undefined) {
            for (var j = 0; j < gameObj.game_modes.length; j++) {
                var mode = gameObj.game_modes[j].name;
                $("#mode").append(mode);
                if (j < gameObj.game_modes.length - 1) {
                    $("#mode").append(", ");
                }
            }
        }
        else {
            $("#mode").append("N/A");
        }

        // Game year
        $("#year").empty();
        if(gameObj.release_dates !== undefined) {
            var year = gameObj.release_dates[0].human.substring(0, 4);
            $("#year").append(year);
        }

        else {
            $("#year").append("N/A");
        }

        // Game platform
        $("#platform").empty();
        if(gameObj.platforms !== undefined) {
            for (var i = 0; i < gameObj.platforms.length; i++) {
                platformList = gameObj.platforms[i].abbreviation;
                $("#platform").append(platformList);
                if (i !== gameObj.platforms.length - 1) {
                    $("#platform").append(", ");
                }
            }
        }
        else {
            $("#platform").append("N/A");
        }

        // Game developer/company
        $("#developer").empty();
        if(gameObj.involved_companies !== undefined) {
            for (var i = 0; i < gameObj.involved_companies.length; i++) {
                developers = gameObj.involved_companies[i].company.name;
                $("#developer").append(developers);
                if (i !== gameObj.involved_companies.length - 1) {
                    $("#developer").append(", ");
                }
            }
        }
        else {
            $("#developer").append("N/A");
        }

        //Game Description
        var description = gameObj.summary;
        $("#description-body").empty();
        $("#description-body").append(description);
    });
}