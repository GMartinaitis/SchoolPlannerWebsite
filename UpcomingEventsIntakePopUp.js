
function DisplayUserInputPopup(){
  let x = document.getElementById("popUpInput");
  if(x.className === "popupIntake") {
    x.className += " show";
  }
  else{
    x.className = "popupIntake";
  }
}
