const fetch = require('node-fetch');
const fs = require('fs');
// Callbacks //


setTimeout //
setTimeout(() => {
   console.log("Waited for 1 second");
}, 500);

// nested setTimeouts //

setTimeout(() => {
    console.log("3");
    setTimeout(() => {
        console.log("2");
            setTimeout(() =>{
                console.log("1");
               }, 1000);
          }, 1000);
     }, 1000);



// error first callback
fs.readFile('./test.txt', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
        console.error("ERROR");
        console.log(err);
    } else {
        console.error("GOT DATA");
        console.log(data);
    }
});

// Create a promise
const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if (rand === 0){
        resolve();
    } else {
        reject();
    }

});

myPromise
.then(() => console.log("Success"))
.then(() => console.error("Something went wrong"));

//fs readFile with promises
fs.promises
    .readFile('./test2.txt', { encoding: 'utf-8' })
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

//fetch with promises 
fetch('https://geocode.xyz/seattle?json=1')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

//load file with sync/await
const loadFile = async () => {};
//loadFile();

//fetch pokemon with async/await without error handling
const getRandomNumber = async (id) => {};
//fetchPokemon(2)

// Write an asynchronous function and call it with async/await
// Write function called getRandomNumber that returns a promise
// In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
// Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
// Invoke your async function
// Fetch remote data using async/await
// Write an asynchronous function that accepts 1 parameter
// A city name
// When invoked, this function should use geocode.xyz's API retrieve the city data, which uses a URL formatted as follows:

// https://geocode.xyz/seattle?json=1

// Once retrieved, print to the console the latitude and longitude
// Invoke your async function with a few cities as a test
// (Note: the API will only allow you 2 calls per second, so if you are getting errors and you think you shouldn't be, try calling fetching only ONCE per execution.)