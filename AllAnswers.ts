// Answer No 2

// const personName: string = "Eric";
// console.log(`Hello ${personName}, would you like to learn some Python today?`);

// Answer No 3 

//Lowercase
// console.log("Wasif".toLowerCase());

// Uppercase
// console.log("Wasif".toUpperCase());

// Title Case
// const titleCaseName = "Wasif".charAt(0).toUpperCase() + "Wasif".slice(1).toLowerCase();
// console.log(titleCaseName);


// Answer No 4

// console.log(`Allama Iqbal once said, “Man is Primarily Governed by Passion and Instincts .”`);

// Answer No 5 

// const famous_Person: string = "Allama Iqbal";
// console.log(`${famous_Person} once said, “Man is Primarily Governed by Passion and Instincts.”`);

// Answer No 6 

// const personName: string = "\t\n Wasif \n\t";
// console.log(`Original: '${personName}'`);
// console.log(`Trimmed: '${personName.trim()}'`);

// Answer No 7 

// console.log(`5 + 3 = ${5 + 3}`);
// console.log(`16 - 8 = ${16 - 8}`);
// console.log(`2 * 4 = ${2 * 4}`);
// console.log(`64 / 8 = ${64 / 8}`);

// Answer No 8 

// console.log(5 + 3);
// console.log(10 - 2);
// console.log(2 * 4);
// console.log(16 / 2);

// Answer No 9 

// const favoriteNumber: number = 11;
// console.log(`Mera Favourite Number ha ${favoriteNumber}.`);

// Answer No 10 

// Program 1 

// console.log('Number 8 Program');
// console.log('Author: M Wasif Shariq Siddiqui');
// console.log('Date: February 21, 2024');
// console.log('Description: This program performs and prints the results of basic arithmetic operations, each resulting in the number 8.\n');

// console.log(5 + 3); 
// console.log(10 - 2);
// console.log(2 * 4); 
// console.log(16 / 2);


// console.log('\n--------------------------------\n');

// // Program 2 

// console.log('Favorite Number Program');
// console.log('Author: M Wasif Shariq Siddiqui');
// console.log('Date: February 21, 2024');
// console.log('Description: This program reveals my favorite number.\n');

// const favoriteNumber: number = 7;
// console.log(`Mera Favourite Number ha ${favoriteNumber}.`);

// Answer No 11 

// const names: string[] = ["Ahad", "Usman", "Umer", "Daniyal", "Rafay"];

// for (const name of names) {
//   console.log(name);
// }

// Answer No 12 

// const names: string[] = ["Ahad", "Usman", "Umer", "Daniyal", "Rafay"];

// names.forEach(name => {
//   console.log(`AoA ${name}, Kia Haal Hain Bhai ?`);
// });

// Answer No 13 

// const favoriteCars: string[] = ["Tesla", "BMW Hybrid", "Mercedez S-Class"]
// favoriteCars.forEach(car => {console.log(`I will buy ${car} one day In Sha Allah.`);});

// Answer No 14 

// const guests: string[] = ["Ahad", "Daniyal", "Usman"];

// guests.forEach(guest => {
//   console.log(`AoA ${guest}, Mujhe Khushi hogi ke agar app raat ka khana meray ghr pr khaen.`);
// });

// Answer No 15 

// const guests: string[] = ["Ahad", "Daniyal", "Usman"];

// guests.forEach(guest => {
//   console.log(`AoA ${guest}, Mujhe Khushi hogi ke agar app raat ka khana meray ghr pr khaen.`);
// });

// console.log("\nUnfortunately, Ahad dawat ma nhe aengay.\n");

// const index = guests.indexOf("Ahad");
// if (index !== -1) 
//     guests[index] = "Aslam"; // Adding Aslam to the list

//     guests.forEach(guest => {
//         console.log(`AoA ${guest}, Mujhe Khushi hogi ke agar app raat ka khana meray ghr pr khaen.`);
//       }); 

//  Answer No 16 

// const guests: string[] = ["Ahad", "Daniyal", "Usman"];

// guests.forEach(guest => {
//   console.log(`AoA ${guest}, Mujhe Khushi hogi ke agar app raat ka khana meray ghr pr khaen.`);
// });

// console.log("Mubarak ho , humain achi aur bari jaga dawat krni ha jisme mazeed mehmano ki gunjaish ha.");

// // Adding Kamran Name in the beginning
// guests.unshift("Kamran");

// // Adding Muneeb in middle
// guests.splice(2, 0, "Muneeb");

// // Adding Amjad in the end
// guests.push("Amjad");

// guests.forEach(guest => {
//     console.log(`AoA ${guest}, Mujhe Khushi hogi ke agar app raat ka khana meray ghr pr khaen.`);
//   });

// Answer No 17

// const guests: string[] = ["Kamran" , "Ahad", "Muneeb" , "Daniyal", "Usman", "Amjad"];

// guests.forEach(guest => {
//   console.log(`AoA ${guest}, Ma Maazrat chahta hn ke table na honay ki surat ma sirf 2 mehmaan invite krsakta hn`);
// });

// // Removing guests until only 2 remain with message of apology
// while (guests.length > 2) {
//     const removedGuest = guests.pop(); // Remove the last guest from the list
//     console.log(`Janab ${removedGuest}, table ki kami ki waja se apki invitiion cancel kr raha hn .`);
// }

// // Confirming the invitations for remaining 2 guests
// guests.forEach(guest => {
//     console.log(`Janab ${guest}, apko dawat ma shirkat kelie message dia ha , app zaroor aein`);
// });

// // Clearing the names in list after the dinner
// guests.splice(0, guests.length);
// console.log("Current guest list:", guests); 

// Answer No 18 

// let places = ["Germany", "United States", "England", "Saudi Arabia", "India"];

// console.log("Original list of places:", places);

// // Printing the list in alphabetical order without modifying the original list
// console.log("Places in alphabetical order:", [...places].sort());

// // Showing the original list to confirm it hasn't changed
// console.log("Original list after sorting attempt:", places);

// // Printing the list in reverse alphabetical order without changing the original list
// console.log("Places in reverse alphabetical order:", [...places].sort().reverse());

// // Showing the original list again to confirm it hasn't changed
// console.log("Original list after reverse sorting attempt:", places);

// // Reversing the order of the list and printing
// places.reverse();
// console.log("List after being reversed:", places);

// // Reversing the order back to the original and printing
// places.reverse();
// console.log("List reversed back to original:", places);

// // Sorting the list in alphabetical order and printing
// places.sort();
// console.log("List sorted in alphabetical order:", places);

// // Sorting the list in reverse alphabetical order and printing
// places.sort().reverse();
// console.log("List sorted in reverse alphabetical order:", places);

// Answer No 19 

// let guests: string[] = ["Kamran", "Ahad", "Muneeb", "Daniyal", "Usman", "Amjad"];

// let invitationMessage: string;
// if (guests.length === 1) {
//     invitationMessage = `Ma ${guests.length} mehmano ko dawat de raha hn `;
// } else {
//     invitationMessage = `Ma ${guests.length} mehmano ko dawat de raha hn`;
// }

// console.log(invitationMessage);

// Answer No 20 

// let programmingLanguages: string[] = ['TypeScript', 'Python', 'React', 'Tailwind CSS', 'Mongo DB'];

// console.log('Here are some programming languages that I find intriguing:');

// programmingLanguages.forEach(language => {
//     console.log(' * ' + language);
// });

// Answer No 21 

// interface Technology {
//     name: string;
//     type: string;
//   }
  
//   let techCollection: Technology[] = [
//     { name: "TypeScript", type: "Programming Language" },
//     { name: "Python", type: "Programming Language" },
//     { name: "React", type: "Frontend Framework" },
//     { name: "Tailwind CSS", type: "CSS Framework" },
//     { name: "MongoDB", type: "Database" }
//   ];
  
//   console.log("My Stored Tech Stacks as Objects:");
  
//   techCollection.forEach(tech => {
//     console.log(`- Name: ${tech.name}, Type: ${tech.type}`);
//   });
  
// Answer No 22 

// Code with index error 
// let programmingLanguages: string[] = ['TypeScript', 'Python', 'React', 'Tailwind CSS', 'Mongo DB'];

// console.log('Here are some programming languages that I find intriguing:');

// // Using forEach to print each language
// // programmingLanguages.forEach(language => {

// //     // Correct log below 
// //     // console.log(' * ' + language);

// //     // Intentionally trying to access an index that is out of bounds as index 5 is out of bound / error on running
// //     console.log("Invalid Index:", programmingLanguages[5])
    
// // });

// Answer No 23

// let car = 'tesla';

// // Test No 1
// console.log("Is car == 'tesla'");
// console.log(car == 'tesla'); // True

// //Test No 2
// console.log("Is car === 'tesla'");
// console.log(car === 'Tesla'); // False, comparison is case-sensitive

// // Test No 3
// console.log("Is car != 'civic'");
// console.log(car != 'civic'); // True

// // Test No 4
// console.log("Is car === 'tesla'");
// console.log(car === 'tesla'); // True, exact match

// // Test No 5
// console.log("Is car !== 'tesla'");
// console.log(car !== 'tesla'); // False

// // Test No 6
// console.log("Is car == 'Tesla'.toLowerCase()");
// console.log(car == 'Tesla'.toLowerCase()); // True, 'Tesla' is 'tesla' after toLowerCase

// // Test No 7
// console.log("Is car.length == 5 ");
// console.log(car.length == 5); // True, length of 'tesla' is 5

// // Test No 8 
// console.log("Is car.length > 5");
// console.log(car.length > 5); // False, length of 'tesla' is not greater than 5

// // Test No 9
// console.log("Is car == 'TESLA'.toLowerCase()");
// console.log(car == 'TESLA'.toLowerCase()); // True, case normalization makes both strings 'tesla'

// // Test No 10
// console.log("Is 'Car' + 'pool' == 'carpool'");
// console.log('Car' + 'pool' == 'carpool'); // False, 'Carpool' is not 'carpool' (case sensitive)


// Answer No 24

// let car = 'tesla';

// // ***Tests for equality and inequality with strings***

// console.log("Is 'Tesla' == 'tesla'");
// console.log('Tesla' == 'tesla'); // False case sensitive 

// console.log("Is 'Tesla' != 'tesla'");
// console.log('Tesla' != 'tesla'); // True, case-sensitive

//***Tests using the lower case function***

// console.log("Is 'Tesla'.toLowerCase() == 'tesla'");
// console.log('Tesla'.toLowerCase() == 'tesla'); // True, both are 'tesla' after lowercasing

// console.log("Is 'TESLA'.toLowerCase() != 'tesla'");
// console.log('TESLA'.toLowerCase() != 'tesla'); // False, both are 'tesla' after lowercasing

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// let myspeed = 55;

// console.log("Is speed == 55");
// console.log(myspeed == 55); // True

// console.log("Is speed != 100");
// console.log(myspeed != 100); // True

// console.log("Is speed > 30");
// console.log(myspeed > 30); // True

// console.log("Is speed < 100");
// console.log(myspeed < 100); // True

// console.log("Is speed >= 55");
// console.log(myspeed >= 55); // True

// console.log("Is speed <= 55");
// console.log(myspeed <= 55); // True

// ***Tests using "and" and "or" operators***

// console.log("Is speed > 50 && speed < 60");
// console.log(myspeed > 50 && myspeed < 60); // True

// console.log("Is speed > 60 || speed < 100");
// console.log(myspeed > 60 || myspeed < 100); // True


// ***Test whether an item is in an array***

// let fruits = ['apple', 'banana', 'cherry'];

// console.log("Is 'apple' in fruits?");
// console.log(fruits.includes('apple')); // True

// console.log("Is 'mango' in fruits? ");
// console.log(fruits.includes('mango')); // False

// // Test whether an item is not in an array
// console.log("Is 'mango' not in fruits?");
// console.log(!fruits.includes('mango')); // True

// console.log("Is 'banana' not in fruits? ");
// console.log(!fruits.includes('banana')); // False

// Answer No 25

// Test Pass 

// let alienColor = 'green';

// if (alienColor === 'green') {
//     console.log('You just earned 5 points!');
// }

// // Alien Shot Down Failed 

// let alienColor = 'red';  // Change this to 'red' to test with another non-green color

// if (alienColor === 'green') {
//     console.log('You just earned 5 points!');
// }


// Answer No 26 

// // Version 1  "if" Block Runs Perfectly 

// // let alienColor = 'green';

// // if (alienColor === 'green') {
// //     console.log('You just earned 5 points for shooting the alien!');
// // } else {
// //     console.log('You just earned 10 points!');
// // }


// // // Version 2 "else"  Block Runs Perfectly 

// // let alien_color = 'red';  // This could be any color other than 'green'

// // if (alien_color === 'green') {
// //     console.log('You just earned 5 points for shooting the alien!');
// // } else {
// //     console.log('You just earned 10 points!');
// }


// Answer No 28 

// let age: number = 29; // Set any age here to test different stages of life

// if (age < 2) {
//     console.log('This person is a baby.');
// } else if (age < 4) {
//     console.log('This person is a toddler.');
// } else if (age < 13) {
//     console.log('This person is a kid.');
// } else if (age < 20) {
//     console.log('This person is a teenager.');
// } else if (age < 65) {
//     console.log('This person is an adult.');
// } else {
//     console.log('This person is an elder.');
// }

// Answer No 29 

// let favorite_fruits: string[] = ['mango', 'banana', 'apple'];

// // Checking for mango
// if (favorite_fruits.includes('mango')) {
//     console.log('You really like mangoes!');
// }

// // Checking for banana
// if (favorite_fruits.includes('banana')) {
//     console.log('You really like bananas!');
// }

// // Checking for apple
// if (favorite_fruits.includes('apple')) {
//     console.log('You really like apples!');
// }

// // Checking for orange
// if (favorite_fruits.includes('orange')) {
//     console.log('You really like oranges!');
// }

// // Checking for grapes
// if (favorite_fruits.includes('grapes')) {
//     console.log('You really like grapes!');
// }

// Answer No 30 

// let usernames: string[] = ['admin', 'Wasif', 'Hamza', 'Marlon', 'Ahad'];

// usernames.forEach(function(username) {
//     if (username === 'admin') {
//         console.log('Hello admin, would you like to see a status report?');
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// });

// Answer No 31 

// let users: string[] = []; // Array of usernames, initially empty
// let age: number = 29; // Set any age here to test different stages of life

// // Check if the user list is empty
// if (users.length === 0) {
//     console.log('We need to find some users!');
// } else {
//     // Assuming users are not empty, and we have their ages, let's categorize one of the users
//     if (age < 2) {
//         console.log('This person is a baby.');
//     } else if (age < 4) {
//         console.log('This person is a toddler.');
//     } else if (age < 13) {
//         console.log('This person is a kid.');
//     } else if (age < 20) {
//         console.log('This person is a teenager.');
//     } else if (age < 65) {
//         console.log('This person is an adult.');
//     } else {
//         console.log('This person is an elder.');
//     }
// }


// Answer No 32 

// let current_users: string[] = ['Asim', 'Shoaib', 'Wasif', 'Aslam', 'Ahad'];
// let new_users: string[] = ['Ali', 'Ahmed', 'ASIM', 'Wasif', 'Ather'];

// // Converting the current usernames to lower case for case-insensitive comparison
// let lower_current_users = current_users.map(function(user) {
//     return user.toLowerCase();
// });

// // Loop through new_users to check for availability
// new_users.forEach(function(newUser) {
//     if (lower_current_users.includes(newUser.toLowerCase())) {
//         console.log(`The username "${newUser}" has already been used. You will need to enter a new username.`);
//     } else {
//         console.log(`The username "${newUser}" is available.`);
//     }
// });


// Answer No 33 

// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach(function(number) {
//     let suffix: string;
//     if (number === 1) {
//         suffix = 'st';
//     } else if (number === 2) {
//         suffix = 'nd';
//     } else if (number === 3) {
//         suffix = 'rd';
//     } else {
//         suffix = 'th';
//     }
//     console.log(`${number}${suffix}`);
// });


// Answer No 34 

// let favoritePizzas: string[] = ['tikka', 'fajita', 'malaiboti'];

// // Loop through the array and print each pizza name
// for (let pizza of favoritePizzas) {
//     console.log(pizza);
// }

// // Modified loop to print a sentence using the name of the pizza
// for (let pizza of favoritePizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }

// // Line added outside the for loop expressing love for pizza
// console.log('I really love pizza!');


// Answer No 35

// let petAnimals: string[] = ['cat', 'hamster', 'dog'];

// // Loop to print each animal's name
// for (let animal of petAnimals) {
//     console.log(animal);
// }

// // Loop modified takay hm iskay saath kuch aur add krke print krsakein 
// for (let animal of petAnimals) {
//     console.log(`Meray Ghr pr ek ${animal} as a pet rakha hua ha.`);
// }

// // Last wali common statement 
// console.log('Yeh sab janwer behtareen pets hain');

// Answer No 36 

// function make_shirt(size: string, message: string): void {
//     console.log(`The size of the shirt is ${size} and the message printed on it will be: "${message}"`);
// }

// // Calling the function with specific arguments
// make_shirt('Medium', 'The Code Company');
// make_shirt('Large', 'Code with Wasif');

// Answer No 37 

// function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
//     console.log(`The size of the shirt is ${size} and the message printed on it will be: "${message}"`);
// }

// // large shirt with the default message
// make_shirt();

// // medium shirt with the default message
// make_shirt('Medium');

// // shirt of any size with a different message
// make_shirt('Small', 'Code with Wasif');

//Answer No 38 

// function describe_city(city: string, country: string = 'Pakistan'): void {
//     console.log(`${city} is in ${country}.`);
// }

// // Calling the same function for 3 cities all different
// describe_city('Hyderabad'); // in Pakistan by default
// describe_city('Sukkur');  // in Pakistan by default 
// describe_city('London', 'United Kingdom'); // different country 

//Answer No 39

// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }

// // Calling from three different city-country pairs to print the results
// console.log(city_country('Lahore', 'Pakistan'));   // Output: Lahore, Pakistan
// console.log(city_country('Dubai', 'UAE'));       // Output: Dubai, UAE
// console.log(city_country('San Fransisco', 'USA'));      // Output: San Fransisco, USA

// Answer No 40 

// Album Function 
// function make_album(artist: string, title: string, tracks?: number) {
//     let album: { artist: string; title: string; tracks?: number } = {
//         artist: artist,
//         title: title
//     };

//     // Tracks Condition incase provided or not 
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }

//     return album;
// }

// // Create albums using the function
// let album1 = make_album('Ali Zafar', 'Channo ki Ankh');
// let album2 = make_album('Atif Aslam', 'Aadat');
// let album3 = make_album('Sajjad Ali', 'Har Zulm', 17);

// // Print 
// console.log(album1);  
// console.log(album2);  
// console.log(album3);  


// Answer No 41

// // array of magician's names
// let magicians: string[] = ['Kamil Bangali', 'Mind Freak', 'Teller', 'Dynamo', 'Criss Angel'];

// // Define the function show_magicians that prints each magician's name
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Call the function with the array of magicians
// show_magicians(magicians);


//  Answer No 42 

// //  array of magician's names
// let magicians: string[] = ['Kamil Bangali', 'Mind Freak', 'Teller', 'Dynamo', 'Criss Angel'];

// // Function to print each magician's name
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Function to modify magician names to include 'the Great'
// function make_great(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = `${magicians[i]} the Great`;
//     }
// }

// // Modify the magicians array
// make_great(magicians);

// // Call show_magicians to display the modified list
// show_magicians(magicians);


// Answer No 43 

// let magicians: string[] = ['Kamil Bangali', 'Mind Freak', 'Teller', 'Dynamo', 'Criss Angel'];

// // Modified make_great function to work with a copy and returning 
// function make_great(magicians: string[]): string[] {
//     let greatMagicians: string[] = [];
//     for (let magician of magicians) {
//         greatMagicians.push(`${magician} the Great`);
//     }
//     return greatMagicians;
// }

// // Printing magician's name
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Create a new array that includes the modified names
// let greatMagicians = make_great(magicians);

// // Display the original and modified lists
// console.log("Original magicians:");
// show_magicians(magicians);

// console.log("Great magicians:");
// show_magicians(greatMagicians);

// Answer No 44 

// // function for variable number of sandwich fillings
// function make_sandwich(...items: string[]): void {  // ...items is a rest parameter here which will list all items in "items"
//     console.log('Sandwich Items:');
//     for (let item of items) {
//         console.log(`- ${item}`);
//     }
// }

// // Calling the function with different numbers of arguments
// make_sandwich('Kabab', 'mayonnaise');
// make_sandwich('Chicken Boti', 'Salad Leaf', 'egg', 'mayo');
// make_sandwich('Garlic Sauce', 'grilled beaf');

// Answer No 45 

// interface is defined to hold optional car properties here
// interface CarOptions {
//     [key: string]: any;
// }

// // Define the function to build a car object
// function build_car(manufacturer: string, model: string, options?: CarOptions): object {
//     let car: { manufacturer: string; model: string; [key: string]: any } = {
//         manufacturer,
//         model
//     };

//     // If there are additional options, add them to the car object
//     if (options) {
//         for (const option in options) {
//             car[option] = options[option];
//         }
//     }

//     return car;
// }

// // Example calls to the function
// const myCar = build_car('Suzuki Mehran', 'Model 2005', { color: 'red velvet ', ac: true });
// const anotherCar = build_car('Suzuki Alto', 'Model 2021', { color: 'white', powerstarring: true });

// // Print the car objects to verify the content
// console.log(myCar);
// console.log(anotherCar);
