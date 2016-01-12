var element = document.querySelector("#greeting");
element.innerText = "Hello, world!";



var stocklist;
var marketlist; 
var dividendlist; 
var operationlist;

var listingstocks = document.querySelector("#stocklist");
var listingmarkets = document.querySelector("#marketlist");
var listingdividends = document.querySelector("#dividendlist");

var lists = [stocklist,marketlist,dividendlist,operationlist];
var filelist = ["companies.json","markets.json","dividends.json","operations.json"];

console.log("There are " + lists.length + " lists, and " + filelist.length + " files.");

// xmlhttp request for stocks at the porfolio

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var stocklist = JSON.parse(xmlhttp.responseText);
        console.log("stocklist: "+stocklist);
          for (i = 0; i < stocklist.length; i++) {
             
              console.log(stocklist[i]);
              listingstocks.innerHTML += "<li>" + stocklist[i].name + " ticker " + stocklist[i].ticker + "</li>";
              }
          }
};
xmlhttp.open("GET", "companies.json", true);
xmlhttp.send();


console.log('stocklist =' + stocklist);

// xmlhttp request for makets

var xmlhttp2 = new XMLHttpRequest();

xmlhttp2.onreadystatechange = function() {
    if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
        var marketlist = JSON.parse(xmlhttp2.responseText);
        console.log("stocklist: "+stocklist);
          for (i = 0; i < marketlist.length; i++) {
             
              console.log(marketlist[i]);
              listingmarkets.innerHTML += "<li>" + marketlist[i].name + "</li>";
              }
          }
};
xmlhttp2.open("GET", filelist[1], true);
xmlhttp2.send();

// xmlhttp request for dividends

var xmlhttp3 = new XMLHttpRequest();

xmlhttp3.onreadystatechange = function() {
    if (xmlhttp3.readyState == 4 && xmlhttp3.status == 200) {
        var stocklist = JSON.parse(xmlhttp.responseText);
        console.log("stocklist: "+stocklist);
          for (i = 0; i < stocklist.length; i++) {
             
              console.log(stocklist[i]);
              listingstocks.innerHTML += "<li>" + stocklist[i].name + " ticker " + stocklist[i].ticker + "</li>";
              }
          }
};
xmlhttp.open("GET", filelist[2], true);
xmlhttp.send();



//listelements (listingmarkets,marketlist);
//listelements (listingdividends,didivendlist);





