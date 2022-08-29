var grade = 55;

if (grade < 50) {
    console.log('grade F');
} else if (grade > 50 && grade < 60) {
    console.log('grade D');
} else if (grade > 60 && grade < 70) {
    console.log('grade C');
} else if (grade > 70 && grade < 80) {
    console.log('grade B');
} else if (grade > 80 && grade < 90) {
    console.log('grade A');
} else if (grade < 90) {
    console.log('grade A+');
} else {
    console.log('Enter the right number');
}