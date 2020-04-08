var a=localStorage.getItem("info");
a = JSON.parse(a)

//Game Title//
var title = a[0].name
$("#title").empty();
$("#title").append(title);

//Game Description//
var description = a[0].summary
$("#description-body").empty();
$("#description-body").append(description);

//Game Image//
// var imageCode = a[0].cover
// var mainImage=$("<img>").attr("src", imageCode);
// $("#main-pic").empty();
// $("#main-pic").append(mainImage);