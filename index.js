// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    //returns the number of blocks given a value
   if (someValue >42){
    return someValue-42
 }
 else{
  return 42-someValue
 }
  
  }
  


  function distanceFromHqInFeet(someValue) {
    if (someValue >42){
      return (someValue-42)*264
   }
   else{
    return (42-someValue)*264
   }
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    if (start> destination){
      return (start-destination)*264
    }
    else {
      return (destination-start)*264
    }
    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let side=distanceTravelledInFeet(start, destination)
    if (side<=400){

      return 0
    }
    else if (side>400 && side<=2000){
      return ((side-400)*2)/100
    }
    else if (side>2000 && side<2500){
      return 25
    }
    else {
      return 'cannot travel that far'
    }
    
  }