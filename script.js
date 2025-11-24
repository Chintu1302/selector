// Get element by ID
const title = document.getElementById("title");
console.log("By ID:", title);

// Get element by class name
const intros = document.getElementsByClassName("into");
console.log("By Class:", intros);

// Get element by tag name 
const paragraphs = document.getElementsByTagName("p");
console.log("by Tag", paragraphs);

// querySelector (first name)
const firstItem = document.querySelector(".item");
console.log("Query Selector:", firstItem);

// querySelectorAll (all matches) 
const allItems = document.querySelectorAll(".item");
console.log("Query selector all:", allItems);

// complex selector
const specialItem = document.querySelector("#list .item.special");
console.log('Complex selector:', specialItem);

const byClass = document.getElementsByClassName('item'); // HTML Collection
const byQuery = document.querySelectorAll('.item'); // NodeList

console.log('Is Array?', Array.isArray(byClass));  // false
console.log('Has forEach?', typeof byQuery.forEach);  // function 

// Convert to array
const itemsArray = Array.from(byClass);

const heading = document.getElementById('heading');
const paragraph = document.getElementById('paragraph');
const input = document.getElementById('input');
const output = document.getElementById('output'); 

// change text content
document.getElementById('btn-text').addEventListener('click', () => {
    heading.textContent = 'New Heading Text';
});  

// change HTML content
document.getElementById('btn-html').addEventListener('click', () => {
    paragraph.innerHTML = '<strong>Bold</strong> and <em>italic</em> text'; 
}); 

// Toggle class
document.getElementById('btn-class').addEventListener('click', () => {
    paragraph.classList.toggle('highlight');
}); 

// change inline style
document.getElementById('btn-style').addEventListener('click', () => {
    heading.style.color = 'red'; 
    heading.style.fontSize = '32px';
})

// change attribute
document.getElementById('btn-attr').addEventListener('click', () => {
    input.setAttribute('placeholder', 'New placeholder');
    input.value = 'New value';
}); 

// Read attribute
console.log('Text:', heading.textContent); 
console.log('HTML:', paragraph.innerHTML); 
console.log('Value:', input.value); 

// Read attribute
console.log('ID:', heading.id); 
console.log('Classes:', paragraph.className); 
console.log('Has class?', paragraph.classList.contains('normal')); 

// Read styles
console.log('Color:', heading.style.color); 

const user = document.getElementById('user'); 
console.log(user.dataset.userId); 
console.log(user.dataset.role); 
user.dataset.status = 'active'; 

const container = document.getElementById('container'); 
let itemCount = 0; 

// Create and add element 
document.getElementById('btn-add').addEventListener('click', () => {
    // Create div element
    const item = document.createElement('div'); 
    item.className = 'item'; 

    // Create text node 
    const text = document.createTextNode(`Item ${++itemCount}`);
    item.appendChild(text);

    const deleteBtn = document.createElement('button'); 
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        item.remove();
    }); 

    item.appendChild(deleteBtn); 
    container.appendChild(item);
});

//Remove the last element 
document.getElementById('btn-remove').addEventListener('click', () => {
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}); 

// clear all
document.getElementById('btn-clear').addEventListener('click', () => {
    container.innerHTML = ''; 
    itemCount = 0;
});