'use strict'

// function to indicate wether the temperature is cold or hot
function buttonClicked(){
  // variables for user's temperature input
  let temp = parseFloat(document.getElementById("temp").value)
   
  // if statement that checks if the temperature is hot, cold, or just right
  if(temp < 0){
    // tells user it's cold
    document.getElementById('answer').innerHTML = "It's cold. >:("
    
  } else if (temp > 10){
    // tells user it's hot
    document.getElementById('answer').innerHTML = "It's hot. :3"
    
  } else {
    // tells user it's the perfect temperature
    document.getElementById('answer').innerHTML = "It's the perfect temperature. :D"
  }
}