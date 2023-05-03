'use strict';
const openingHours = {
  sun: {
    open: 10,
    close: 22,
  },
  fri: {
    open: 9,
    close: 23,
  },
  wed: {
    open: 11,
    close: 22,
  },
};
const restaurant = {
  name: 'Golder Curry',
  location: 'Northdown Road, margate , clifftonville',
  categories: ['Italian', 'Indian', 'Bangladeshi', 'Thai'],
  starterMenu: [
    'Chicken Cheese Burger',
    'Beef Burger',
    'Garlic Bread',
    'Italian Spicy Pasta',
    'Bagdadi Shahi Biriany',
    'Mexican Chilli Chicken',
  ],
  mainMenu: ['Burger', 'Pizza', 'Pasta', 'Fajita', 'French Fries'],

  order: function (a, b) {
    return [this.starterMenu[a], this.mainMenu[b]];
  },
  openingHours,
  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '10.00 PM',
    address = 'Unknown',
  }) {
    console.log(
      `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delieverd to ${address} at ${time}`
    );
  },
  orderBurger: function (ing1, ing2, ing3) {
    console.log(`Here is your burger with ${ing1} ${ing2} ${ing3}`);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
console.log(restaurant);
//////////////////
//Destructing objects
//--------------------
// const { name, categories, mainMenu, starterMenu } = restaurant;
// const { location: resLocation, openingHours: hours } = restaurant;
// const { sun: sunday, wed: wednesday, fri: friday } = restaurant.openingHours;
// console.log(sunday, wednesday, friday);
//another example
// restaurant.orderDelivery({
//   starterIndex: 2,
//   mainIndex: 0,
//   time: '06:00 PM',
//   address: 'Uttara Dhaka',
// });
// restaurant.orderDelivery({
//   starterIndex: 1,
//   address: 'Dhanmondi 27',
// });
//-------------------
//default values (object);
//-------------------
// const { mainMenu, starterMenu } = restaurant;
// console.log(starterMenu, mainMenu);
// const { main = [], starterMenu = [] } = restaurant;
// console.log(main, starterMenu);
//--------------------
//Mutating variables
//--------------------
// let m = 100;
// let n = 200;
// [a, b] = [b, a];
// const obj = { m: 20, n: 30 };
// ({ m, n } = obj);

// console.log(m, n);
//---------------------
//Nested objects
//---------------------
// const abuu = {
//   friends: {
//     first: 'Amy Pretty',
//     second: 'Georgie Page',
//   },
// };
// const { first, second } = abuu.friends;
// console.log(first, second);
// const {
//   friends: { first, second },
// } = abuu; //direct from main-object
// console.log(first, second);
//----------------
//Copying object
//----------------
// const newRestaurant = restaurant;
// newRestaurant.name = 'Kebab House';

// const newRestaurant = { ...restaurant, founder: 'Amzad' };
// newRestaurant.name = 'name changed';

// console.log(restaurant);
// console.log(newRestaurant);

//////////////////////////////////////////////////

//Destructuring arrays
//--------------------
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
//----------------------
//Switching arrays
//----------------------
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// const [favstart, favmain] = restaurant.order(1, 0);
// console.log(favstart, favmain);
//----------------------
//Nested destructuring
//----------------------
// const nestedarr = [2, 4, [5, 6]];
// const [i, j, k, l] = nestedarr;
// const [i, j, k] = nestedarr;
// const [i, j, [k, l]] = nestedarr;
// console.log(i, j, k);
// const nested2 = ['Tumpa', 'Sadia', ['Nazneen', 'Barbara'], 'onita'];
// const [f1, f2, fjoint, f3] = nested2;
// console.log(f1, f2, fjoint, f3);
// const [f1, f2, [f3, f4], f5] = nested2;
// console.log(f1, f2, f3, f4, f5);
//--------------------
//Default values(array)
//--------------------
// const arrNew = [10, 30];
// const [b = 1, d = 1, e = 1, f = 100] = arrNew;
// console.log(b, d, e, f);
//--------------------
//Spread operators (...)
//--------------------
// const parray = [23, 42, 23, 11];
// const parrayCopy = [24, 67, parray[0], parray[1], parray[2], parray[3]];
// const parrayarray = [11, 12, ...parray];
// console.log(parrayarray);
// const newMenu = [...restaurant.mainMenu, 'Noodles', 'Kacchi'];
// console.log(newMenu);
// const barr = [1, 2, [3, 4]];
// console.log(...barr);
// const tarr2 = [1, 2, ...[3, 4]];
// console.log(tarr2);
//---------------
//Copy array
//---------------
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// const allFoods = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(allFoods);
//-----------------
//Join arrays
// const allFoods = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(allFoods);

//////////////////////////////////////////////////
//------------------
//Iterables: arrays, strings, maps, sets, not objects
//------------------
// const gameName = 'Call of Duty: Moddern Warfare';
// console.log(...gameName, '', '2023');
// const str = 'Shohan';
// console.log(...str);
// const [p, f, g] = [...str];
// console.log(p, f, g);
// console.log(`My name is ${str}`);
// const [first, second] = [...str];
// console.log(first, second);

// const ingredients = ['Tomato', 'Chicken', 'Letuce'];
// restaurant.orderLambMadras(...ingredients);

////////////////////////////////////////////////////
