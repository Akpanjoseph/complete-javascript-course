// 'use strict'


// // const addVat = (value,rate) => value + value * rate
// // console.log(addVat(100,0.23));

// const record = []

// const space= {
//     airline : "Airpeace",
//     book(name,seat){
//         console.log(`flight line ${this.airline} has ${name} on ${'AP'+seat} `);
//         record.push({space:this.airline,name:name,seat_no:'AP'+seat})
//     }

// }

// const space2= {
//     airline : "Airpeace",
//     book(name,seat){
//         console.log(`flight line ${this.airline} has ${name} on ${seat} `);
//     }

// }


// const airlineSpace = (fn,airline)=>{
//     fn(airline)

//     console.log(fn)
// }

// space.book('joe',4)
// space.book('syntax',2)

// console.log(record);

// airlineSpace(space,'tech')

// const euroWings ={
//     airline : 'Euro Wings',
//     iataCode : 'AP',
//     bookings:[],
//     book: function(flightNum,name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)

//         this.bookings.push({
//             flight:`${this.iataCode}${flightNum}`,
//             name, 
//         })


//     }
// } 


// const airpeace = { 
//     airline: 'Airpeace',
//     iataCode: 'AP',
//     bookings: []
// }

// euroWings.book(354,'Akpan Joseph')
// euroWings.book('003','Syntax Designer')
// console.log(euroWings.bookings);

// const book = euroWings.book;


// book(354,'Joe')// this will return undefinded cos this js see these as another function

// To fix this problem we need a way to tell js that its the euro wing method we are talking about
/* 
Functions are objects in some ways and object have methods
List of Function methods

1. name - This returns the name of the funcion that is been called
2. call - This allows you to call another object method on another object
3. apply- The apply works almost like the call method but the only difference is that it takes an array as the second agrument   
4. bind -  The bind keyword works  the same way like the call method but the only difference is that it returns a new function  
5. this - This keyword holds the entire function object 

 Important of the bind keyword
 It allows us create the this reference once and use it as much as possiable 


 Partial Application
 This a often refered to when using the bind method to set some method parameter
*/

// call
// book.call(airpeace,353,'Designer')
// book.call(euroWings,353,'Designer')

// console.log(euroWings.bookings);
// console.log(airpeace.bookings); 


// // Apply 
// const swiss ={
//     airline : 'Swiss Air Line',
//     iataCode: 'LX',
//     bookings : []
// }
// const flightData = [356,'Mary Jane']

// book.apply(swiss,flightData)

// // bind 
// const swissBk = euroWings.book.bind(swiss) // this will automatically set the method this keyword to swiss object

// swissBk(475,'Joeph Akpan') // passing parameter to the method


// // Partial Applicaton
// const book23 = book.bind(swiss,23)
// book23('jerry') 





// run once function 
(
    function () {
        console.log('hello');
})()
