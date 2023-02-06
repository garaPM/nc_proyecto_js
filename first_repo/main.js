// const beforeScript = document.getElementById("beforeScript");
// console.log(beforeScript);

// const listItems = document.querySelectorAll('.listItem');
// console.log(listItems);

// const ul = document.querySelector('ul');
// console.log(ul);
//
// // const listItemFirst = document.querySelector('.first');
// const listItemFirst = ul.querySelector('.first');
// console.log(listItemFirst);

// const nameFirst = document.getElementsByName("first");
// console.log(nameFirst);


// const parrafos = document.getElementsByTagName('p');
// console.log(parrafos);

// const claseslistItem = document.getElementsByClassName("listItem");
// console.log(claseslistItem);


// ================== Crear Elementos ========================

// const board = document.querySelector('.board');
//
// const container = `
// <div>
//   <p>Item 1</p>
//   <p>Item 2</p>
// </div>
// `
//
// // board.innerHTML = "<div><p>Item 1</p><p>Item 2</p></div>";
// board.innerHTML = container;

const board = document.querySelector('.board');

const container = document.createElement('div');
const fragment = document.createDocumentFragment();

// const item1 = document.createElement('p');
// const item2 = document.createElement('p');
//
// item1.textContent = "Item 1";
// item2.textContent = "Item 2";

// container.append(item1, item2);
const items = ["Item 1", "Item 2"];

items.forEach((item) => {
  const pElement = document.createElement('p');
  pElement.textContent = item;
  // container.append(pElement);
  // fragment.append(container);
  fragment.append(pElement);
})



// board.append(container);
board.append(fragment);

