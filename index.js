// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let newBoi = drivers;
  let carl = newBoi.map(function (drive) {
    console.log(drive.toLowerCase());
    return drive.toLowerCase();
  });
  return carl;
}

function nameToAttributes(drivers) {
  let newBoi = drivers;
  let carl = newBoi.map(function (drive) {
    let index = drive.indexOf(' ');
    let first = drive.slice(0,index);
    let last = drive.slice(index+1,drive.length);
    let returnVal = {};
    returnVal.firstName = first;
    returnVal.lastName = last;
    return returnVal;
  });
  return carl;
}

function attributesToPhrase(drivers) {
  
}
