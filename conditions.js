// single condition(if else)
var married = false;

if (married == true) {
    console.log('you can rent');
} else {
    console.log('you better get married');
}
//multiple conditions
//and statement
var beGraduate = true;
var gpa = 3;
if (beGraduate == true && gpa >= 3) {
    console.log('you can apply for the job');
}
else {
    console.log('you have to complete gratuation with gpa above 3')
}
//or statement
var foodPrice = 50;
var goodQuality = true;
if (foodPrice == 150 || goodQuality == true) {
    console.log('give me the food');
} else {
    console.log('i dont want the food');
}
//use and if both
var tourCost = 7000;
var ourMoney = 6000;
var totalPeople = 10;
var tourDuration = 3;

if ((tourCost < 10000 && tourDuration >= 3) || (totalPeople <= 8)) {
    console.log('wow! we go on vacation!!!');
} else {
    console.log("we can no't go");
}