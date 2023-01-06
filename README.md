# Fixed navigation bar, smooth scrolling effect 

# 1. How it works 
Scrolling down the page, nav bar will stay on the top, and when click the menu links, it will move smoothly at once 

# 2. What I learned 
 - offsetTop : returns the top position (in pixels) relative to the parent <br>
 - window.pageYOffset : returns the pixels a document has scrolled from the upper left corner of the window.<br>
 - Event.currentTarget : returns the element whose event listeners triggered the event. <br>
 In this project, I want to know which link user clicked, so I can calculate a specific element's position <br>
 - getAttribute : The getAttribute() method returns the value of an element's attribute <br>
 - getBoundingClientRect() : Returns the size of an element and its position relative to the viewport.<br>
 - window.scrollTo : Scrolls to a particular set of coordinates in the document. <br>
 I used 3 options. Position of top,left and behavior. In oder to make smooth scrooling effect, I used behavior option 

