// 1

const h3Select = document.querySelector("h3");
h3Select.innerText = "Hello";

// 2

const h4SelectAll = document.querySelectorAll("h4");
for (let i = 0; i < h4SelectAll.length; i++) {
  h4SelectAll[i].style.marginBottom = "-20px";
}

// 3

const h4Second = document.querySelector("h4.two");
h4Second.style.backgroundColor = "red";

// 4

const pFirst = document.querySelector("p");
pFirst.style.fontSize = "24px";
pFirst.style.color = "blue";

// 5

const pThird = document.querySelector("p.three");
// pThird.innerHTML = "<span>" + pThird.innerHTML + "</span>";
pThird.innerHTML = `<span> ${pThird.innerHTML} </span>`;

// 6

const pAdd = document.querySelector("div.content");
pAdd.innerHTML += `<p>Dolit</p>`;

// 7

const pAddClass = document.querySelectorAll(".content p");
for (let i = 0; i < pAddClass.length; i++) {
  pAddClass[i].classList.add("content-item");
}

// 8

const ulSelect = document.getElementById("services");
ulSelect.innerHTML = `<li>Peter</li> ${ulSelect.innerHTML}`;

// 9

ulSelect.classList.remove("service-list");

// 10

const divHide = document.querySelector("#hide");
divHide.style.display = "none";
