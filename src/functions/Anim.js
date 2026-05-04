window.onscroll = function(){scrollHeaderFunc(),scrollBarFunc()};

function scrollHeaderFunc(){
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    document.getElementById("header").style.height = "4em";
    document.getElementById("logo").style.fontSize = "25px";
  }else{
    document.getElementById("header").style.height = "7em";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
function scrollBarFunc(){
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("ProgBar").style.width = scrolled + "%";
}
