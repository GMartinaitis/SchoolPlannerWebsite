function NavDropDownFunct(){
  let x = document.getElementById("topNav");
   if (x.className === "navMain") {
       x.className += " responsive";
   } else {
       x.className = "navMain";
   }
}
function DisplayUserInputPopup(){
  let x = document.getElementById("popUpInput");
  if(x.className === "popupIntake") {
    x.className += " show";
  }
  else{
    x.className = "popupIntake";
  }
}
