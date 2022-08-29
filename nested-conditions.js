var productPrice = 200;
var wellPack = true;
var reputedBuyer = true;
var myBudget = 1000;

if (productPrice < myBudget) {
    if (wellPack == false) {
        console.log('it is packed well');
    } else if (reputedBuyer == true) {
        console.log('reputed buyer');
    }
} else {
    console.log('it is not good product');
}