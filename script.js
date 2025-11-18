
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