window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "rgb(34, 34, 34)";
    document.getElementById("header").style.boxShadow = "0 .6rem 1rem rgba(0,0,0, .2)";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("header").style.boxShadow = "none";
  }
}