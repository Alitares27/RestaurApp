const productContainer = document.querySelector(".productContainer");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
let offset = 1;
let limit = 3;

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 4;
    removeChildNodes(productContainer);
    fetchProducts(offset, limit);
  }
});
next.addEventListener("click", () => {
  if (offset < 16) {
    offset += 4;
    removeChildNodes(productContainer);
    fetchProducts(offset, limit);
  }
});
function fetchStore(id) {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => {
      createProduct(json);
    });
}
function fetchProducts(offset, limit) {
  for (let i = offset; i <= offset + limit; i++) {
    fetchStore(i);
  }
}

function one() {
  const opt1 = document.getElementById("option1");
  const option1 = opt1.value;
  productContainer.innerHTML = "";
  getCategory(option1);
}
one();

function two() {
    const opt2 = document.getElementById("option2");
const option2 = opt2.value;
    productContainer.innerHTML = "";
    getCategory(option2);
  }
  two();

  function three() {
    const opt3 = document.getElementById("option3");
    const option3 = opt3.value;
    productContainer.innerHTML = "";
    getCategory(option3);
  }
  three();

  function four() {
    const opt4 = document.getElementById("option4");
    const option4 = opt4.value;
    productContainer.innerHTML = "";
    getCategory(option4);
  }
  four();

function getCategory(category) {
  fetch('https://fakestoreapi.com/products/category/'+ category)
    .then((res) => res.json())
    .then((json) => {
      createProduct(json);
    });
  /*.then(json=>console.log(json))*/
}
getCategory();

function createProduct(products) {
  const card = document.createElement("div");
  card.classList.add("productBlock");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("imgContainer");

  const image = document.createElement("img");
  image.classList.add("itemImage");
  image.src = products.image;

  imageContainer.appendChild(image);

  const number = document.createElement("p");
  number.classList.add("sku");
  number.textContent = "SKU: 0100" + products.id;

  const name = document.createElement("h1");
  name.classList.add("name");
  name.textContent = products.title;

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = products.description;

  const price = document.createElement("h3");
  price.classList.add("price");
  price.textContent = "$ " + products.price;

  const addCart = document.createElement("button");
  addCart.classList.add("addCart");
  addCart.textContent = "Add to Cart";

  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(imageContainer);
  card.appendChild(description);
  card.appendChild(price);
  card.appendChild(addCart);

  productContainer.appendChild(card);
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

fetchProducts(offset, limit);
