window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementByClassName("user-nav").style.backgroundColor = "rgb(104, 187, 203)";
    document.getElementByClassName("user-nav").style.boxShadow = "0 .6rem 1rem rgba(0,0,0, .2)";
  } else {
    document.getElementByClassName("user-nav").style.backgroundColor = "transparent";
    document.getElementByClassName("user-nav").style.boxShadow = "none";
  }
}