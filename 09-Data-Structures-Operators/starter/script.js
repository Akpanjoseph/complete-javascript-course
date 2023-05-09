'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23, 
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
  
// console.log(restaurant.openingHours && restaurant.openingHours.mon)

// if (restaurant.openingHours && restaurant.openingHours.mon){
//   console.log(restaurant.openingHours && restaurant.openingHours.mon)
// }


// optional chaining operator

// console.log(restaurant.openingHours.fri?.open);





const opening_days = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23, 
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
}



// get object items
// const obj = Object.keys(opening_days)

// console.log(...obj);

// let open_sentence = `We open on ${obj.length} days: `;

// for (const day of obj){
//   open_sentence =open_sentence + `${day} ,`
// }

// console.log(open_sentence);



// get the whole object data using entries
// const obj2 = Object.entries(opening_days)

// for (const [day,{open,close }] of obj2){
//   console.log(`we on ${day} at ${open} and close by ${close}`);
// }



// map

// creating a new map object
const map_item = new Map();

map_item.set(1,'name')
.set('name','joe')
.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set(true,"we are open")
.set(false,"we are closed")
.set('open',11)
.set('closed',23)

// console.log(map_item);


// getting items from a map
// console.log(map_item.get(9));



// performing operation with map
// const time = 12 ;
// console.log(map_item.get(time > map_item.get('open') && time < map_item.get('closed')))

// using arrays as map key
// const arr = [1,2]
// map_item.set(arr,'heloo')
// console.log(map_item.get(arr));


// converting map to array
// const new_arr = [...map_item]
// console.log(new_arr);

// map methods 
// map_items.keys()
// map_items.values()
// map_items.set()
// map_items.get()
// map_items.has()



// join string methods

// const a = "syntax"
// const b = "designer"

// const c = [1,2,3,4,5,67,4].join('--')
  
// console.log(c)



// converting first letter in each word to capital letter

// const word = "my name is syntax";

// const a = []

// const b = word.split(' ')
// for (const n of b){
//   const text = n.replace(n[0],n[0].toUpperCase())
//   a.push(text)
// }

// console.log(a.join(' '))


// adding padding to text
// const a = "Hello "
// const b = "world"
// const start =[a.padStart(30,'-'),b.padEnd(30,'-')]
// // const end =a.padEnd(30,'-')

// console.log(start.join(' '));


// credit card digit hider

// const maskCard = function(number){
//   const str = String(number)
//   const last = str.slice(-4)
//   const mask = last.padStart(str.length,'*')
//   return mask

// }
  
// console.log(maskCard(466577676464242));



// repeat 
const message = 'i am fine ...'
console.log(message.repeat(5))