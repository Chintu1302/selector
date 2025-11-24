const title = document.getElementById("title");
console.log("By ID:", title);

const intros = document.getElementsByClassName("into");
console.log("By Class:", intros);

const paragraphs = document.getElementsByTagName("p");
console.log("by Tag", paragraphs);

const firstItem = document.querySelector(".item");
console.log("Query Selector:", firstItem);

const allItems = document.querySelectorAll(".item");
console.log("Query selector all:", allItems);

const specialItem = document.querySelector("#list .item.special");
console.log('Complex selector:', specialItem);

const heading = document.getElementById('heading');
const paragraph = document.getElementById('paragraph');
const input = document.getElementById('input');
const output = document.getElementById('output'); 

document.getElementById('btn-html').addEventListener('click', () => {
    heading.textContent = 'New Heading Text';
});  

document.getElementById('btn-html').addEventListener('click', () => {
    paragraph.innerHTML = '<strong>Bold</strong> and <em>italic</em> text'; 
}); 

document.getElementById('btn-class').addEventListener('click', () => {
    heading.style.color = 'red'; 
    heading.style.fontSize = '32px';
}); 

document.getElementById(btn-attr).addEventListener('click', () => {
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

const user = document.getElementsById('user'); 
console.log(user.dataset.userId); 
console.log(user.dataset.role); 
user.dataset.status = 'active'; 