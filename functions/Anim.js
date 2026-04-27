
window.onscroll = function(){scrollBarFunc()};
function scrollBarFunc(){
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("ProgBar").style.width = scrolled + "%";
} 

var i = 0;
const typeText = ["GEOSINIA the literary megaproject created by StudioGEOS","The repositories of any github projects I have", "Mods made for a multitude of games"];
var speed = 15;

function typeWriter() {
  if(typeText[0]){
    if (i < typeText[0].toString().length) {
    document.getElementById("geosinia-intro").innerHTML += typeText[0].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
  }  
}
