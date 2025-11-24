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

document.getElementById('btn-text').addEventListener('click', () => {
    heading.textContent = 'New Heading Text';
});  

document.getElementById('btn-html').addEventListener('click', () => {
    paragraph.innerHTML = '<strong>Bold</strong> and <em>italic</em> text'; 
}); 

document.getElementById('btn-class').addEventListener('click', () => {
    paragraph.classList.toggle('highlight');
}); 

document.getElementById('btn-style').addEventListener('click', () => {
    heading.style.color = 'red'; 
    heading.style.fontSize = '32px';
})

document.getElementById('btn-attr').addEventListener('click', () => {
    input.setAttribute('placeholder', 'New placeholder');
    input.value = 'New value';
}); 

console.log('Text:', heading.textContent); 
console.log('HTML:', paragraph.innerHTML); 
console.log('Value:', input.value); 

console.log('ID:', heading.id); 
console.log('Classes:', paragraph.className); 
console.log('Has class?', paragraph.classList.contains('normal')); 

console.log('Color:', heading.style.color); 

const user = document.getElementById('user'); 
console.log(user.dataset.userId); 
console.log(user.dataset.role); 
user.dataset.status = 'active'; 