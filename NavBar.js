function NavDropDownFunct(){
  let x = document.getElementById("topNav");
   if (x.className === "navMain") {
       x.className += " responsive";
   } else {
       x.className = "navMain";
   }
}
