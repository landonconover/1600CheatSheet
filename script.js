import {jokes} from './jokes.js'

console.log(jokes)

let jokeArray = [
    "What's Forrest Gump's password?",
    "What do you call a belt made out of watches?",
    "Why can't bicycles stand on their own?"
];


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

/* <div>
    <h3>Setup:</h3>
    <p>Joke here</p>
    <h3>Punchline</h3>
    <p>Punchline here</p>
</div> */


jokes.forEach((jokeObj) => {
    //select an element from the HTML to append to
    let rootEl = document.querySelector('#jokes');

    //create all the HTML elements for our structure
    let contaierDiv = document.createElement('div');
    let setupH3     = document.createElement('h3');
    let punchlineH3 = document.createElement('h3');
    let jokeP       = document.createElement('p');
    let punchlineP  = document.createElement('p');

    setupH3.innerHTML = 'Setup';
    punchlineH3.innerHTML = 'Punchline';

    jokeP.innerHTML = jokeObj.setup;
    punchlineP.innerHTML = jokeObj.punchline;

    contaierDiv.append(setupH3);
    contaierDiv.append(jokeP);
    contaierDiv.append(punchlineH3);
    contaierDiv.append(punchlineP);

    rootEl.append(contaierDiv)

    
})