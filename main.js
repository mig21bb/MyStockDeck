var element = document.querySelector("#greeting");
element.innerText = "Hello, world!";

function getlist(file) {
var xmlhttp = new XMLHttpRequest();
var url = file;
xmlhttp.open("GET", url, false);
xmlhttp.send();
console.log('After send ' + xmlhttp.responseText);
var myArr = JSON.parse(xmlhttp.responseText);
return myArr;
}


var stocklist = getlist("companies.json");
var marketlist = getlist("markets.json");
var dividendlist = getlist("dividends.json");
var operationlist = getlist("operations.json");
console.log('stocklist =' + stocklist);

var listingstocks = document.querySelector("#stocklist");
var listingmarkets = document.querySelector("#marketlist");
var listingdividends = document.querySelector("#dividendlist");

function listelements (face,list) {

for (i = 0; i < 3; i++) {
  for (j = 0; j < 2; j++) {
    face.innerHTML += "<li>" + list[i][j] +" ticker "+ list[i][j] + "</li>";
  
    }
  }
}

listelements (listingstocks,stocklist);




