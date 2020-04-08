var a=localStorage.getItem("info");
a = JSON.parse(a)
var title = a[0].name
console.log(a[0].name) //name or title
$("#title").append(title);
// $('#genre')