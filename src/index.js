//import array data
import todos from '../data/todos.js';
//import template functions
import template from './todo-template.js';
import templateHeader from './template-header.js';
//import htmlToDOM function
import htmlToDOM from '../src/html-to-dom.js';

//reference the target parent elements
const section = document.getElementById('todos');
const header = document.getElementById('header');

//call .forEach on the array
todos.forEach(todo => {
    //Convert todo object to html using template
    const html = template(todo);
    //Convert html to DOM using htmlToDOM
    const dom = htmlToDOM(html);
    //Append to list parent (<section>)
    section.appendChild(dom);
});

//dynamically creating header
const htmlHeader = templateHeader();
const domHeader = htmlToDOM(htmlHeader);
header.appendChild(domHeader);
