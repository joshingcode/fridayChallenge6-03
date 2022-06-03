// Create a function that takes two dates and returns the number of days between the first and second date.
// Examples
// getDays(
//   new Date("June 14, 2019"),
//   new Date("June 20, 2019")
// ) ➞ 6
// getDays(
//   new Date("December 29, 2018"),
//   new Date("January 1, 2019")
// ) ➞ 3
// // Dates may not all be in the same month/year.
// getDays(
//   new Date(),
//   new Date("July 30, 2019")
// ) ➞ 10

var date1= new Date("July 20, 2019")
var date2=new Date("July 30, 2019")

function getDays(){
    let oneDay= 1000 * 60 * 60 *24
    let diff = date2.getTime()-date1.getTime()
    return Math.round(diff/oneDay)
}

console.log(getDays())




// Challenge complete !! working on use it with the dom 