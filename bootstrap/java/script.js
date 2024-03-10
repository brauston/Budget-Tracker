// let addressNumber = '202';
// let addressName = 'millbrook';
// let country = 'USA';
// let globalAddress = [addressNumber + addressName + country];
// console.log(globalAddress)



// let player = ["shohai", "springer", "harper", "trout" ]
// let favorite = player[1];
// let secondFavorite = player[0];
// console.log(favorite)
// console.log(secondFavorite)


// let sampleArray = [
//     [1, 2, 5],
//     [7, 6, 10, 11, 12],
//     [3]
// ]
// console.log(sampleArray.length)



// let animals = ['cat','dog','fish','rabbit','cow']
// console.log(animals[1])
// animals.splice(3,1,'horse')
// console.log(animals)
// console.log(animals.length)

// // let age = prompt('How old are you?');
// // alert('you are '${age}' years old!');



// foodFavorite = 'burger'
// foodTime = 'dinner'
// console.log('I eat a ' + foodFavorite+ ' during '+ foodTime)



// const myWatchedSeries = ["the office", "Brooklyn99", "family_guy"];
// myWatchedSeriesLength = myWatchedSeries.length
// myWatchedSeriesSentance = myWatchedSeries

// console.log('I watched ' + myWatchedSeriesLength + ' shows recently. I watched ' + myWatchedSeries[2] + ' last night.')




// let age = prompt()

// if (age === 16)
//     console.log('Happy birthday, here are your keys.')
//     else if (age < 16)
//         console.log("Sorry, you've gotta get into the back.")
//         else (age > 16)
//             console.log(" You know how to drive, get going.")




            // let fruit = 'Papayas';

            // switch (fruit) {
            //   case 'Oranges':
            //     console.log('Oranges are $0.59 a pound.');
            //     break;
            //   default:
            //     console.log('Sorry, we are out of ' + fruit + '.');
            //     break;
            //   case 'Mangoes':
            //   case 'Papayas':
            //     console.log('Mangoes and papayas are $2.79 a pound.');
            //     // expected output: "Mangoes and papayas are $2.79 a pound."
            //     break;
            // }

// 1. Create an object with properties "username" and "password".
// const user = {
//     username: "example_user",
//     password: "example_password"
// };

// // 2. Create an array which contains the object you have made above and name the array "database".
// const database = [user];

// // 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
// const newsfeed = [
//     { username: "user1", timeline: "Timeline 1" },
//     { username: "user2", timeline: "Timeline 2" },
//     { username: "user3", timeline: "Timeline 3" }
// ];

// // Display the newsfeed on the HTML page
// const newsfeedElement = document.getElementById("newsfeed");
// newsfeed.forEach(item => {
//     const div = document.createElement("div");
//     div.textContent = `${item.username}: ${item.timeline}`;
//     newsfeedElement.appendChild(div);
// });


const gil = {
    firstName: "Gil",
    lastName: "schlesinger",
    age: 29,
    sayBad: function(){console.log("Fuck Hamas! BANG BANG")},
    sayGood: function(){console.log("GO YJ")}
}
console.log([gil.firstName, gil.lastName, gil.age, gil.sayBad()])



let x = 19
let y = 13;

if (x > y) {
    console.log("x is the greater number.")}
    else; {
        console.log("y is the greater number.")}