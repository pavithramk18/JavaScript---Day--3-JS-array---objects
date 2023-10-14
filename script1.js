//Q2:By using RestContry API show all the country flags in the console

console.log("JavaScript - Day -3: JS Array & objects");

//Solution

// Step1:Create a XHR object

// Synatx:var variablename= new XMLHttpRequest();

var req = new XMLHttpRequest();
// Step2 :Specify the URL of the API

// Syntax:varname.open("GET","URL API to be specified")

req.open("GET", "https://restcountries.com/v3.1/all");

// STEP3:Send the request

req.send(); //Sends our request to the API

// Step 4: Once the request data is there on the server data is successfully loaded

req.onload = function () {
  var result = JSON.parse(req.response);
  console.log(result);
  var reslen = result.length;
  for (var i = 0; i <= reslen; i++) {
    console.log(result[i].flags);
  }
};


