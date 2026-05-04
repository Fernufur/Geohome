
window.onscroll = function(){scrollBarFunc()};
function scrollBarFunc(){
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("ProgBar").style.width = scrolled + "%";
}
