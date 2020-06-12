//Url grabber
var link=window.location.search;
var x=link.slice(1);


//Url validater
function isValidUrl(string) {
    try {
      new URL(string);
    } catch (_) {
      return false;  
    }
  
    return true;
}

if(isValidUrl(x)==true)
{
    window.onload = localStorage.setItem("linkadd",x);
    window.location.replace("wait.html");

}



//Input box
function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    
    // Displaying the value
   
    
    document.getElementById("demo").innerHTML = "https://anonlinks.now.sh?"+inputVal;
}




//var link2 = localStorage.getItem("linkadd");


function continuenext(){

    window.location.replace("process.html");

}

function showlink(){
    var link2 = localStorage.getItem("linkadd");

    window.open(
        link2,
        '_blank' // <- This is what makes it open in a new window.
      );
}

window.onload = function(){
    document.getElementsByName("submit")[0].disabled = true;
    setTimeout(function(){  
        var element = document.getElementsByName("submit")[0] ;
        element.disabled = false;
    }, 15000);
}










