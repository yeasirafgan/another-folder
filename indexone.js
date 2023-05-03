///////////////////////////////Spread because on right side of (=) equal operator
//////////////////////////////

// const somearr = [1, 2, ...[3, 4]];
// console.log(somearr);

///////////////////////////////Rest operator Here is rest operator always have to be last element and always will be left side of (=) equal operator
//////////////////////////////

// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(others);
// const [x, y, ...friends] = ['abuu', 'amy', 'georgie', 'kate', 'paula'];
// console.log(x, y, friends);
// const [burgers, , pasta, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(burgers, pasta, otherFood);

/////////////////////////////
//Object rest operator
//////////////////////////////

// const { fri: friday, ...otherDays } = restaurant.openingHours;
// console.log(friday);
// console.log(otherDays);

///////////////////////////////Function ( Rest Parameter )
/////////////////////////////

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(2, 3, 5);
// add(2, 3, 5, 6, 7, 8);
// add(50, 34);

// const arr = [33, 4, 55];
// add(...arr);
// restaurant.orderPizza('Mushroom'),
//   restaurant.orderPizza('Mushroom', 'onion', 'tomato', 'spinach');

///////////////////////////////Short circuiting
/////////////////////////////

// console.log(3 || 'Abuu');
// console.log('' || 'Amy Pretty');
// console.log(false || 0);
// console.log(undefined || null);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Maysha' || 23 || null);
// console.log(false || true);
// console.log(0 || '');
// restaurant.guests = 0;
// restaurant.guests = 30;
// const guests = restaurant.guests ? restaurant.guests : 50;
// console.log(guests);

// const guests2 = restaurant.guests || 20;
// console.log(guests2);

// restaurant.founder = 'Tamba';
// const founder = restaurant.founder || 'Amzad';
// console.log(founder);

// console.log(0 && 'Shohan');
// console.log(7 && 'Spiderman');
// console.log('abuu' && 'amy' && null && 0 && 'Georgie');
// console.log(false && true);
// console.log('Ben' && 12 && ' ' && 23 && true && undefined);
//Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'onions', 'tomatoes');
// }
// restaurant.orderPizza && restaurant.orderPizza('pepper', 'cheese', 'chicken');

///////////////////////////////Nullish coalescing operator
//Nullish values: null, undefined(not 0 and '')
/////////////////////////////

// restaurant.guests = 0;
// const guests = restaurant.guests ?? 20;
// console.log(guests);

///////////////////////////////Logical assignment operator
/////////////////////////////

// const rest1 = {
//   name: 'Pizza Club',
//   guests: 0,
// };
// const rest2 = {
//   name: 'Food Island',
//   owner: 'Ayesha',
// };

// rest1.guests = rest1.gusets || 10;
// rest2.guests = rest2.guests || 50;
// rest1.guests ||= 30;
// console.log(rest1.guests);
// rest2.guests ||= 50;
// console.log(rest2.guests);

// rest1.guests ??= 30;
// console.log(rest1.guests);
// rest2.guests ??= 50;
// console.log(rest2.guests);

// rest1.owner = rest1.owner && 'Timpa';
// rest2.owner = rest2.owner && 'Tompa';
// console.log(rest2.owner);

// rest1.owner &&= 'Bumpa';
// rest2.owner &&= 'Gumpa';
// console.log(rest1.owener);
// console.log(rest2.owner);

///////////////////////////////
//For of loop
/////////////////////////////
// const arr = [23, 45, 34, 23, 45, 25];
// for (const number of arr) {
//   console.log(number);
// }

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(...menu.entries());
// for (const [index, food] of menu.entries()) {
//   {
//     console.log(`${index + 1}: ${food}`);
//   }
// }
// for (const [i, food] of menu.entries()) {
//   console.log(`${i + 1}: ${food}`);
// }

// const friends = [
//   'nicki',
//   'shelly',
//   'abuu',
//   'paula',
//   'linda',
//   'mina',
//   'nolin',
//   'soumi',
// ];
// const friendEntries = friends.entries();
// for (const [i, friend] of friendEntries) {
//   console.log(`${i + 1}: ${friend}`);
// }
///////////////////////////////
//Optioional chaining
////////////////////
// console.log(restaurant?.openingHours?.sat?.open);
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.fri?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'Day off';
//   // console.log(open);
//   console.log(`On ${day}, opens ${open} `);
// }

// console.log(restaurant.order?.(0, 1));
// console.log(restaurant.orderPasta?.(1, 1));
// /////////////////////////////////
//////////////////
//Looping objects
//Property names (key)
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// for (const day of properties) {
//   console.log(day);
// }
// //Property values (values)
// const values = Object.values(restaurant.openingHours);
// console.log(values);
// for (const day of values) {
//   console.log(day.open);
//   console.log(day.close);
// }
// //Property entries (key, value)
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);
// for (const [key, value] of entries) {
//   console.log(
//     `On ${key}, We are open at ${value.open} and close at ${value.close}`
//   );
// }

//////////////////
//Sets
//////////////////

// const foods = new Set([
//   'Pizza',
//   'Burger',
//   'Pizza',
//   'Pasta',
//   'Pizza',
//   'Noodles',
// ]);
// console.log(foods.size);
// console.log(foods.has('Pizza'));
// foods.add('Fajita');
// foods.delete('Pasta');
// // foods.clear();
// console.log(foods);

// const arr = [20, 11, 22, 20, 41, 11, 10, 1, 0, 10, 10, 20, 41, 11];
// const uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);
//--------------------
//////////////////
