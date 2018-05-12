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
    let firstName = drive.slice(0,index);
    let lastName = drive.slice(index+1,drive.length);
    let returnVal = {
      "first":firstName;
      "last":lastName;
    }
    return returnVal;
  });
  return carl;
}
