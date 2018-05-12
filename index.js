// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let newBoi = drivers;
  newBoi.map(function (drive) {
    console.log(drive.toLowerCase());
    return drive.toLowerCase();
  });
  return newBoi;
}
