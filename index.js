// Write your solution in this file!
<<<<<<< HEAD
const driver ={

};
function updateDriverWithKeyAndValue(driver, key, value) {
  const driverN = { ...driver };

  driverN[key] = value;

  return driverN;
}


function destructivelyUpdateDriverWithKeyAndValue(driver ,key ,value){
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver ,key ){
  const newObj = Object.assign({}, driver);

   delete newObj[key];

  return newObj;
}
function destructivelyDeleteFromDriverByKey(driver ,key ){
  delete driver[key];

  return driver;
}
=======
function updateDriverWithKeyAndValue(driver ,key ,value){

  driver[key] = value;

  return driver;

}

function destructivelyUpdateDriverWithKeyAndValue(driver ,key ,value){
  dconst newObj = { ...driver };

  newObj[key] = value;

  return newObj;
}
>>>>>>> 0fdcb458b14c7cc1bdb41b4e7902dc79909474d3
