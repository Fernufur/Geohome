
function topnavFunc(){
  var x = document.getElementById("Topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

function searchBarFunc(){
  var x = document.getElementById("searchBar");
  if (x.className === "searchBar") {
    x.className += " responsive";
  } else {
    x.className = "searchBar";
  }
} 
