// console.log(23 === 23.0);


// checking if it is a real number
console.log(Number.isNaN(20));
console.log(Number.isInteger(20));
console.log(Number.isFinite('20'));


// performing mathematic operations

// square roots
console.log(Math.sqrt(25));
console.log(25 ** (1/2)); // second method

// cubic roots
// Note : The cubic root could not be gotten directly so this method is used
console.log(10 ** (1/3));

// max number
console.log(Math.max(1,2,34,5,10));

// min number
console.log(Math.min(1,2,5,6,0,1,));


// random - this will randomly generate number from 0...1 - 0.0 to 1
console.log(Math.random());


// trunc - This will remove the decimal places in an integer
console.log(Math.trunc(1.2341));


//round - This rounds integer to the nearest terms
console.log(Math.round(1.23));


// ceil - This will round up integer
console.log(Math.ceil(1.4));

// floor - This will round down integer
console.log(Math.floor(2.35));


// rounding decimals to sf places
// structure - (decimal).toFixed(number)
// Note : the result will be string
console.log(Number((23.0).toFixed(0)));



// bigInt - This allows us to reprent  digits bigger than 9007199254740991
// This gets you the saferst number js can store
const bigint_digits = Number.MAX_SAFE_INTEGER

// To convert to big integer the bigInt function is used
const num1 =  BigInt(12397834364733333317635461184543)
const num2 = 23568676673455463543n
console.log(num1);
console.log(num2);

// Note - you can not add a BigInt number with normal number
// console.log(13n + 2); //this will throw an error


// concatinating bigint with strings
console.log(12n + " This is a BigInt number");

//divisions
console.log(12n / 3n);// this will divide and round up to the nearest bigInt 


// Date in js

// creating date
const now = new Date(2023,04,11,10)
console.log(now);

// creating  date time stamp
console.log(Date.now()); // this returns in milli seconds 

// creating a string date
const year =`${now.getFullYear()}`;
const month =`${now.getMonth()+1}`.padStart(2,0);
const day =`${now.getDay()}`.padStart(2,0);
const hours = `${now.getHours()}`.padStart(2,0)
const mins = `${now.getMinutes()}`.padStart(2,0)

// setting the year variable
// now.setFullYear(2030)

// display date in a formatted way
console.log(`${day}/${month}/${year}   ${hours}:${mins}`);


// calculating days from time stamps
const cal_days_passed = (date1,date2)=>Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)
const days =cal_days_passed(new Date(2022,1,4),new Date(2023,2,4))

console.log(days);


// internationalzing date 
// This allows time to be displayed in local time format depending on the user location

const date = new Date()
console.log(Intl.DateTimeFormat('en-uk').format(date)); // you get al the iso format from www.ligoes.net


// adding options to the iso

const option ={
    hour:'numeric',
    minute:'numeric',
    day:'numeric',
    weekday: 'long',
    month:'long',
    year:'numeric',
}

const locale_language = navigator.language; //getting user location language from the browser Api

console.log(Intl.DateTimeFormat(locale_language, option).format(date));


// formatting numbers 

const money = 23445545634
// option
const option_num ={
    // style:'unit', // you have style for unit s 
    // unit:'mile-per-hour' // set the unit
    style:'currency',  // for currency
    currency: 'eur'

}
console.log(Intl.NumberFormat('en-uk',option_num).format(money));



// Timers 
// Js has 2 types of timer 
// 1. setTimeout timer - this runs just once after a define time
//2.  setInterval timer-  this keep running for ever on the set time till its stopped

// setTimeout 
// setTimeout(()=> console.log("Hey!!"),4000) // This will display hey!! after 4 secs 

// setInterval 
const timer_opt = {
    hour: 'numeric',
    minute : 'numeric',
    second: 'numeric'
}

const time = document.getElementById('time')
setInterval(function(){
    let timer = new Date()
    // console.log(Intl.DateTimeFormat('en-us',timer_opt).format(timer));
    time.textContent = `${Intl.DateTimeFormat(navigator.language,timer_opt).format(timer)}`
},1000)

// clearing timer
// clearInterval(timer_name)


