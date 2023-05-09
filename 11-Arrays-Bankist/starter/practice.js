
// arr methods 
const arr = ['a','b','c','d']
// slice - this creates a set of array while also taking out the parts you want
console.log(arr.slice(0,-1));

// splice - This works like the slice method but the oly difference is that it takes out items in the array directly without creating a copy 
console.log(arr.splice(3));
console.log(arr);

// reverse - this  creates a copy and align item in ascending order
// Note: Js reverse by alphbetical order while  
const arr2 = ['z','g','a']
console.log(arr2.reverse());


// concat - This joins 2 different arrays together
const joined = arr.concat(arr2)
console.log(joined);

// join - This joins an array using the symbol added
console.log(joined.join('_'));

console.log([...arr])

const hello ={
    name: "joeboy"
}

hello['age'] = 21

console.log(hello); 


const data = [12,45,67,2,568,1]

const usdToNaira = data.map((num)=> num * 780)

// console.log(usdToNaira);

console.log(usdToNaira);



// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];

// first name initails

// map
function createUser(user){
//   return 
// const username = user.forEach(data => data.owner.toLowerCase().split(' ').map( name => name[0]).join(''))
user.forEach( function( acc){
    acc.username =  acc.owner.toLowerCase().split(' ').map( name => name[0]).join('')
})


}

// const user = 'Akpan Joseph';
createUser(accounts)
console.log(accounts);

// user accounts
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// filter
// filtering number greater than 0
const withdrawals = movements.filter(function(mov){
  return mov < 0
})

// filtering numbers less than 0
const deposit = movements.filter(mov => mov > 0)

console.log(withdrawals);
console.log(deposit);


// reducer
const numbers = [1,2,4,6,3]
//  the reducer call back function takes 4 parameter : accumlator , current iterator, index and array
const add = numbers.reduce(function(accumlator,current,index,arr){
  return accumlator + current
},0)

console.log(add);


// getting maximum values using reducer
const max = numbers.reduce(function(accumlator,current){

  // if(accumlator < current) return accumlator
  // else return current


//  const text = accumlator > current ? accumlator : current
//  return text

return accumlator > current ? accumlator : current
},numbers[0])

console.log(max);

// method 1 removing the - sign
// const outGoing = movements.filter((mov)=> mov < 0 ).reduce((acc,mov)=> acc + mov, 0).toString().replace('-','')

// method 2 removing the - sign 
const outGoing = movements.filter((mov)=> mov < 0 ).reduce((acc,mov)=> acc + mov, 0)
// converting number to absolute value
console.log(`${Math.abs(outGoing)}£`);

// console.log(a);


// find - this returns the first occurance os the item

const names = [
  {
    name : "eno",
    age: 21
  },
  {
    name : "joe",
    age: 22
  },
  {
    name : "emeka",
    age: 12
  },
]

const name = names.find( name => name.name === "emeka")

console.log(name);



// some -  this checks for any occurence of a particular incedent  unlike the include method that checks for that particular item

const check = movements.some( mov => mov === 70)
console.log(movements);
console.log(check);


// every - this method will only return if the all the item in the array matches the put condition
const depo = account1.movements.every(mov => mov > 0)
console.log(depo);


// flat - this helps us destructure sub arrays into one big array
// Note the flat method only go in one level deep by default
// In a case where you will like to go deeper flat accepts deep level parameter
const my_arr = [[1,2,3],[4,5,6],7,8,9]
const arr_sub = my_arr.flat()
console.log('flat',arr_sub);

// going multiple level deeper
const my_arr2 = [[1,[2,3]],[[4],5,6],7,[[8],9]]
const arr_sub2 = my_arr2.flat(2) // indcating deep level
console.log(arr_sub2);


// flatmap - This method is a combination of map and the flat method join together
// getting the overal balance
// Note the flatmap go only 1 level deep and it can not be changed
const overalBalance = accounts.map(mov => mov.movements).flat().reduce((mov,acc) => mov + acc ,0)
console.log(overalBalance);

// using flatmap to calculate the overalBalance 
// since the flatmap method has the combination of map and flat 
const overal_Balance_with_flat = accounts.flatMap(mov => mov.movements).reduce((mov,acc) => mov + acc ,0)
console.log(overal_Balance_with_flat);



// sort - The sort method allows us to sort data of different form
// Note the sort by default will always sort by Alphbetical order

// sorting string
const letters = ['a','c','t','b']
console.log(letters.sort());

// sorting number
const num = account1.movements
console.log(num.sort());
// now the major issue here is that js sort dosen't really know what todo the number . 
// To fix it the sort method accecpts a callback function  
// Note this method is not going to work if you a combination to stings and number

// This sort the numbers in an assending order
const num_sort = num.sort((first_num, next_num) => first_num - next_num)
console.log(num_sort);

// This sort the numbers in an desending order
const num_sort2 = num.sort((first_num, next_num) =>  next_num - first_num)
console.log(num_sort);


// automatically creating and filling an array
const x = new Array(6)
console.log(x);
x.fill(1)
console.log(x);



const a = [1,2,3,1,2,2,4,4,0]
// console.log(a.filter(n => a.con));
// console.log(a.reduce((n,x) => n,))
const sorted = []
// a.filter(n => {
//   if(!sorted.includes(n))
//   sorted.push(n)
// })

// const d_num = a.filter(n => a.find(n) > 1)

// a.forEach((n) =>{
//   if(a.ma)
// })

// const b = a.map(n => n === n).filter(n => n == 1)
// console.log(b);
