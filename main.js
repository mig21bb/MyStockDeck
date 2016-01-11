var element = document.querySelector("#greeting");
element.innerText = "Hello, world!";

var listingstocks = document.querySelector("#stocklist");
var listingmarkets = document.querySelector("#marketlist");
var listingdividends = document.querySelector("#dividendlist");

for (i = 0; i < 8; i++) {
    listingstocks.innerHTML += "<li> Stock " + i + "</li>";
}

for (i = 0; i < 6; i++) {
    listingmarkets.innerHTML += "<li> Market " + i + "</li>";
}

for (i = 0; i < 5; i++) {
    listingdividends.innerHTML += "<li> dividend " + i + "</li>";
}
