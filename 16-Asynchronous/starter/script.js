'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// perform ajax call using xmlHttpReequest()
// const request = new XMLHttpRequest()
// request.open('GET','https://restcountries.com/v3.1/all')
// request.send()
// console.log(request.responseText);

// request.addEventListener('load',()=>{
//     console.log(this.responseText);
// })


// promises are what is returned when we make async js api calls
/**
 * fetch -this allows us to make api calls
 * then - this a callback function is only called when a promise is resolved
 * catch - this id called when promise is rejected
 * finaly - this is a callback that will always happend reguardless whether the promise is resolved or not
 */

// performing ajax using promise

// const getData = ()=>{
//     fetch(`https://jsonplaceholder.typicode.com/photos`).then( res => {
//         console.log(res.respondText);
//         return res
//     })
// }

// getData()

const renderError = (msg)=>{
    countriesContainer.insertAdjacentText('beforeend',msg)
    countriesContainer.style.opacity=1;
}

// handling errors 
// Note: The errors created by js is an object and has some methods 
// example : error.message - this returns only the error it self
// const getData2 = function(){
//     fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(response => {
//         const data = response.json()
//         return data
//     })
//     // gets all the errors in the in code
//     .catch(error => renderError(error.message))
// }

// btn.addEventListener('click',getData2)



// Handling 404 errors from api
/**
 * Note: By default when there is a 404 error from API the promise is till resovled now to make it aware of the error we need to create the error ourself
 * 
 * Good example is when you try to get data that doesnt exist in the api
 * 
 */
const getData3 = function(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => {
        // this checks the response return status code if it is ok
        if(!response.ok){
            // creates a new Error instance once its true
            throw new Error(`Data not found ${response.status}`)
        }
        const data = response.json()
        return data
    })
    // gets all the errors in the in code
    .catch(error => renderError(error.message))
}