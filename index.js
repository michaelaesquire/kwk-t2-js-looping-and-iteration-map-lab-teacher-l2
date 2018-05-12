// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let newBoi = drivers;
  newBoi.map(function (drive) { 
    return drive.toLowerCase(); 
  });
  return newBoi;
}
