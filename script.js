//select an element from the HTML to append to
let rootEl = document.querySelector('#root');

//create a h1 element
let h1 = document.createElement('h1');

//create a textnode and append to our h1 element
let h1Text = document.createTextNode("How do you make a tissue dance?")
h1.append(h1Text)

//finally append our h1 element to our rootElement
rootEl.append(h1)