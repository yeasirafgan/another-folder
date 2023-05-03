// const rest1 = {
//   name: 'Burger villa',
//   code: 'BV',
//   orders: [],
//   foods: ['Burger', 'Pizza', 'Pasta', 'Noodles', 'French Fries'],
//   orderFood: function (
//     foodIndex = 0,
//     foodCount = 1,
//     name,
//     address,
//     time,
//     price = 100 * foodCount
//   ) {
//     console.log(
//       `${name} ordered ${foodCount} ${this.foods.push[foodIndex]}(s) from ${address} at ${time}, price: ${price}`
//     );
//     this.orders.push({
//       name: `${name}`,
//       food: `${this.foods[foodIndex]}`,
//       pieces: `${foodCount}`,
//       price: `${price}`,
//       address: `${address}`,
//       time: `${time}`,
//     });
//   },
// };

// console.log(rest1.orders);
// rest1.orderFood(3, 5, 'Shohan', 'Sirajganj', '11.00 pm');

// const momee = ['names', 'age', 'gender', 'color', 'nationality', 'dob'];
// console.log(momee);
// console.log(momee.slice(1, -2));
// console.log(momee.slice());
// console.log([...momee]);
// console.log(momee.slice(-1));
// console.log(momee.length - 1);
// console.log(momee[momee.length - 1]);
// console.log(momee[0]);
// console.log(momee.at(-1));

// const arr2 = ['j', 'k', 'l', 'm', 'n'];
// console.log(arr2.splice(3));
// console.log(arr2);
// console.log(arr2.splice(1, 2));

// const arr3 = [1, 20, 30, 40, 50, 6, 7, 23, 45, 32, 36, 76, 43, 33];
// // console.log(arr3.splice(-7, 5));
// console.log(arr3);

// const arr4 = [1, 2, 3, 4, 5, 6, 7, 23, 45, 32, 36, 76, 43, 33];
// // console.log(arr4.reverse());
// console.log(arr4);

// const jointArray = arr3.concat(arr4);
// console.log(jointArray);
// console.log([...arr3, ...arr4]);

// const words = ['This', 'is', 'a', 'nice', 'day'];
// console.log(words.join('++'));
// console.log(words);

//-----------------

// const numbers = [123, 343, 232, 123, 223, 234, 401, 503, 305, 467, 589];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// numbers.forEach(function (element, index, entirearray) {
//   if (element > 200) {
//     console.log(element);
//   }
// });
// numbers.forEach((el, i, arr) => console.log(`${i + 1}: ${el}`));

// const friends = ['Abuu', 'Amy', 'Georgie', 'Kate', 'Paula'];
// // friends.forEach((friends, i) => console.log(`${i + 1}: ${friends}`));
// for (let i = 0; i < friends.length; i++) {
//   console.log(`${i + 1}: ${friends[i]}`);
// }

// const currencies = new Map([
//   ['BDT', 'Bangladeshi Taka'],
//   ['USD', 'United State Dollar'],
//   ['EUR', 'Euro'],
// ]);
// currencies.forEach((value, key, map) => console.log(`${key}: ${value}`));
// const friendsUnique = new Set([
//   'Shohan',
//   'Tumpa',
//   'Ayesha',
//   'Nibir',
//   'Tumpa',
//   'Sohan',
//   'Sabrina',
// ]);
// console.log(friendsUnique);

// friendsUnique.forEach((value, _, set) => console.log(value, _));

// function momee(num) {
//   console.log('momee function called');
//   return num * 2;
// }
// function anotherMomee(bum) {
//   console.log('another function called');

//   momee(bum);
// }
// anotherMomee(12);

// const moem = [2, 33, 43, 23, 21, 4, 54, 21];
// moem.unshift(26);
// console.log(moem);
