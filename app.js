let navbar = document.getElementById("navbar");
//navbar Top's position value
const navbarTop = navbar.offsetTop;

//when use scrolling down the window, event will happen
window.addEventListener("scroll", function(){

  let windowLength = window.pageYOffset
  if(windowLength > navbarTop){
    navbar.classList.add("sticky")
  }else{
    navbar.classList.remove("sticky")
  }
})

//smooth scroll to each sections
let links = document.querySelectorAll(".links");

links.forEach( function(link){
  link.addEventListener("click", function(e){

    //prevent default
    e.preventDefault();

    //get attribute specific element
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navbarHeight = navbar.getBoundingClientRect().height;

    let position = element.offsetTop - navbarHeight;

    window.scrollTo({
      left:0,
      top:position,
      behavior: 'smooth'
    })
  })
})
