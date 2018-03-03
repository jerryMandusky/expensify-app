console.log('destructuring');

// const person = {
//     name: 'Simon',
//     age: 15,
//     location: {
//         city: 'The Hayholt',
//         temp: 12
//     }
// };
// const { name, age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`it's ${temperature} in ${city}`);
// }



// const book = {
//     title: 'Dragonbone Chair',
//     author: 'Tad Williams',
//     publisher: {
//         name: 'DAW'
//     }
// };


// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const address = ['131 Morristown Ave', 'Bernardsville', 'NJ', '08967']

const [, city, state = 'NY'] = address;
console.log(`You are in ${city}, ${state}.`);

const menu = ['coffee', '1.99', '2.50', '2.75']

const [item, , medium] = menu;

console.log(`A medium ${item} costs ${medium}`);