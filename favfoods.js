// fav food game--Push, arrays, expanding and changing arrays
var myFavFoods = ['French Fries', 'Red Velvet Cupcakes', 'Mac and Cheese'];
console.log(myFavFoods[0]);
console.log(myFavFoods[1]);
console.log(myFavFoods[2]);
console.log(myFavFoods);
var myFavFoods = ['French Fries', 'Red Velvet Cupcakes', 'Mac and Cheese'];
myFavFoods[0] = 'French Fries';
myFavFoods[1] = 'Red Velvet Cupcakes';
myFavFoods[2] = 'Mac and Cheese';
myFavFoods.push('Chocolate');
console.log(myFavFoods);
document.getElementById('welcome-message').innerHTML =
    'myFavFoods';
var myFavFoods = ['French Fries', 'Red Velvet Cupcakes', 'Mac and Cheese'];
for (var i = 0; i < myFavFoods.length; i++) {
    console.log(myFavFoods[i]);
}
// update loop in HTML
var FoodString = ['French Fries', 'Red Velvet Cupcakes', 'Mac and Cheese'];
for (var i = 0; i < myFavFoods.length; i++) {
    FoodString += myFavFoods[i] + 'French Fries', 'Red Velvet Cupcakes', 'Mac and Cheese';
}
document.getElementById('my-Fav-Foods').innerHTML = FoodString;
