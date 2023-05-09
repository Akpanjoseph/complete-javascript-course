'use strict';

// create default parameters 

// const bookings = []

// const create_booking = function(flight_num,num_of_passenger=10,price='$200'){
//      flight_num = flight_num || 2
//     const booking ={
//         flight_num,
//         num_of_passenger,
//         price
//     }

//     bookings.push(booking)
//     console.log(booking);
// }



// create_booking()
// create_booking('aa9')


// writing  function that returns another function

function greet(greeting){
    return function  (name){
        console.log(`${greeting} ${name}`)
    }
}

// calling the function

// method1 - creating an instance of the funtion then call it
const person = greet('Hey')
person('syntax')


// method2 - passing parameter direct
greet('hello')('joe')