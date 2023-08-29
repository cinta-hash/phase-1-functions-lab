// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    //returns the number of blocks given a value
    if(someValue>=42){
      return someValue - 42
    }else{
      return 42 - someValue
    }
  }
  


  function distanceFromHqInFeet(someValue) {
  
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    if(someValue>=42){
      return (someValue - 42) *264
    }else{
      return (42 - someValue) * 264
    }
  }

  function distanceTravelledInFeet(start, destination) {
   if(start>destination){
    return (start - destination) * 264
   }else{
    return (destination - start) * 264
   }
    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start, destination)
    if(distance<400){
      return 0
    }else if(distance>400 && distance <= 2000){
      return ((distance - 400)*2) / 100
    }else if(distance >2000 && distance <=2500){
      return 25
    }else{
      return "cannot travel that far"
    }
    
    
  }