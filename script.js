let jokeText = "How do you make a tissue dance?";
let jokeArray = [
    "What's Forrest Gump's password?",
    "What do you call a belt made out of watches?",
    "Why can't bicycles stand on their own?"
];

//select an element from the HTML to append to
let rootEl = document.querySelector('#root');

//create a h1 element
let h1 = document.createElement('h1');

//create a textnode and append to our h1 element
let h1Text = document.createTextNode(jokeArray[2])
h1.append(h1Text)

//finally append our h1 element to our rootElement
rootEl.append(h1)


//for loop example
//looping over the joke array and displaying it on the webpage
for (let index = 0; index < jokeArray.length; index++) {
    const arrayItem = jokeArray[index];
    //select an element from the HTML to append to
    let rootEl = document.querySelector('#root');

    //create a h1 element
    let h1 = document.createElement('h1');

    //create a textnode and append to our h1 element
    let h1Text = document.createTextNode(arrayItem)
    h1.append(h1Text)

    //finally append our h1 element to our rootElement
    rootEl.append(h1)
}

function displayJokesToWebpage(joke) {
     //select an element from the HTML to append to
     let rootEl = document.querySelector('#root');

     //create a h1 element
     let h1 = document.createElement('h1');
 
     //create a textnode and append to our h1 element
     let h1Text = document.createTextNode(joke)
     h1.append(h1Text)
 
     //finally append our h1 element to our rootElement
     rootEl.append(h1)
}

//forEach loop example
jokeArray.forEach(displayJokesToWebpage);

jokeArray.forEach((joke) => {
    //select an element from the HTML to append to
    let rootEl = document.querySelector('#root');

    //create a h1 element
    let h1 = document.createElement('h1');

    //create a textnode and append to our h1 element
    let h1Text = document.createTextNode(joke)
    h1.append(h1Text)

    //finally append our h1 element to our rootElement
    rootEl.append(h1)
})