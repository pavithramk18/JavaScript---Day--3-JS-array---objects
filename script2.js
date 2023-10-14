//Q3:Using the same rest countries print the names,regions,subregions and population

console.log("JavaScript - Day -3: JS Array & objects");

//Solution

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    var reslen=result.length;

    //Display the name,region,subregion and population from restcounties api

    for(var i=0;i<=reslen;i++)
    {
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion);
        console.log(result[i].population);

    }
}