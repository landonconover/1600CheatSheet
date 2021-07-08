//Variables

//delclare a variable with the let key word and give it a name
// variables have values that can change
let myVar;
myVar = 4;
myVar = 3;

//declare it with a value
let myVarWithValue = 4;

//Constant Variable that can't change;
const PIE = 3.14; 

//datatypes are SUPER important often refered to as types or typing
let myString = 'this is a string'; //string
let myNum = 5; //number
let myBool = true; //boolean - true or false


//Objects
let myPersonObj = {
    first: 'Landon', //first property value is a string of 'Landon'
    last: 'Conover', 
    age: 34,
    alive: true,
    kids: ['Jensen', 'Hayden'], //kids prop value is an array of strings
    fullName: function() { //adding a method to the object to return the fullName.
        return `${this.first} ${this.last}`;
    }
} //object - a collection of data. Can be mixed types and are assigned via properties.

myPersonObj.name //dot notation to access values.
myPersonObj['name'] //bracket notation - can be used to access OR create new keys.
myPersonObj['eyeColor'] = 'blue'; //create a new prop in the object
myPersonObj.eyeColor //access the new prop

myPersonObj.fullName() //get the fullName by running the function


//arrays
let myArr = ['value1','value2','value3']; //array is a list of indexed values starting at 0

myArr[0] //access the first item in the array

myArr.push('value4') //adds a new value to the end of the array
myArr.pop() //removes the last item from the array


myArr.forEach((item) => console.log(item)) //loop over the array and log each item

//statements - evaluates things or checks values

1 == '1' //true - this is the loose equality checks only value and changes the types to match.
1 === '1' //false - strict checking checks both type and value

1 !== 2 //true - not equals
//follow link for full list of operators
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators

//Loops

const sampleData1 = ["Phased zero tolerance solution",
 "Integrated full-range open system",
 "User-friendly didactic installation",
 "Proactive multimedia contingency",
 "Exclusive coherent open system",
 "Optional web-enabled benchmark",
 "Versatile systematic product",
 "Phased homogeneous protocol",
 "Stand-alone disintermediate throughput",
 "Centralized uniform extranet"
]

//for loop
// ([initialization]; [condition]; [final-expression])
for (let index = 0; index < sampleData1.length; index++) {
    console.log(sampleData1[index])
}

//forEach loop
// run the supplied function once per item in the array
sampleData1.forEach((item) => console.log(item))

//array methods

const sampleData2 = [{
    "id": 1,
    "first_name": "Sammie",
    "last_name": "Rigge",
    "email": "srigge0@state.gov",
    "gender": "Polygender",
    "favItem": "Pasta - Canelloni, Single Serve"
  }, {
    "id": 2,
    "first_name": "Damaris",
    "last_name": "Smeeton",
    "email": "dsmeeton1@ucoz.ru",
    "gender": "Male",
    "favItem": "Veal - Knuckle"
  }, {
    "id": 3,
    "first_name": "Cullin",
    "last_name": "Taye",
    "email": "ctaye2@pagesperso-orange.fr",
    "gender": "Non-binary",
    "favItem": "Everfresh Products"
  }, {
    "id": 4,
    "first_name": "Axel",
    "last_name": "Verriour",
    "email": "averriour3@vimeo.com",
    "gender": "Female",
    "favItem": "Papayas"
  }, {
    "id": 5,
    "first_name": "Etan",
    "last_name": "Lohoar",
    "email": "elohoar4@pbs.org",
    "gender": "Male",
    "favItem": "Oven Mitts - 15 Inch"
  }, {
    "id": 6,
    "first_name": "Corina",
    "last_name": "Edens",
    "email": "cedens5@yelp.com",
    "gender": "Female",
    "favItem": "Cheese - Swiss"
  }, {
    "id": 7,
    "first_name": "Barde",
    "last_name": "Crystal",
    "email": "bcrystal6@skype.com",
    "gender": "Male",
    "favItem": "Canadian Emmenthal"
  }, {
    "id": 8,
    "first_name": "Laurella",
    "last_name": "Cattemull",
    "email": "lcattemull7@over-blog.com",
    "gender": "Male",
    "favItem": "Island Oasis - Mango Daiquiri"
  }, {
    "id": 9,
    "first_name": "Norton",
    "last_name": "Kave",
    "email": "nkave8@newyorker.com",
    "gender": "Non-binary",
    "favItem": "Chocolate - Feathers"
  }, {
    "id": 10,
    "first_name": "Marlin",
    "last_name": "Garvill",
    "email": "mgarvill9@weather.com",
    "gender": "Agender",
    "favItem": "Bread Country Roll"
  }]

//.map() - Very simalar to forEach() except map will return a new array
//runs a function for every item in the array but will build a new array based on the return
let fullnames = sampleData2.map((item) => {
    return `${item.first_name} ${item.last_name}`;
})
// fullnames will now be:
// [ 'Sammie Rigge',
//   'Damaris Smeeton',
//   'Cullin Taye',
//   'Axel Verriour',
//   'Etan Lohoar',
//   'Corina Edens',
//   'Barde Crystal',
//   'Laurella Cattemull',
//   'Norton Kave',
//   'Marlin Garvill' ]

//Filter returns an array of all elements that 'pass the test'
let myFilteredArr = sampleData2.filter((item) => {
    return item.gender === 'Female'
})

// myFilteredArr is now:
// [ { id: 4,
//     first_name: 'Axel',
//     last_name: 'Verriour',
//     email: 'averriour3@vimeo.com',
//     gender: 'Female',
//     favItem: 'Papayas' },
//   { id: 6,
//     first_name: 'Corina',
//     last_name: 'Edens',
//     email: 'cedens5@yelp.com',
//     gender: 'Female',
//     favItem: 'Cheese - Swiss' } ]

//Reduce - The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let totalId = sampleData2.reduce((acc, item) => {
    return acc + item.id
}, 0)

totalId

//DOM (Document Object Model) Manipulation

//get an element to manipulate
//query selector used css seletors to return an element to you variable
let root = document.querySelector('#root')

//crete new DOM elements
//this creates a new div
let newDiv = document.createElement('div');

//set element attributes
//set the Id
newDiv.setAttribute('id', 'happyDiv')

//append elements to the dom
root.append(newDiv)

//Event listeners - listend for things/events to happen IE Mouse Move, click, scroll, submit, text select and more
//event listeners need to be attached to the Dom somewhere
root.addEventListener('click', alert('you clicked the root element'))

