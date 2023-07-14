import { fetchStore } from "./services.mjs";
import { setLocalStorage, getLocalStorage } from "./utils.mjs";

let product = {};

export default async function productDetails(productId) {
  // get the details for the current product. findProductById will return a promise! use await or .then() to process it
  product = await fetchStore(productId);
  // once we have the product details we can render out the HTML
  renderProductDetails();
  // once the HTML is rendered we can add a listener to Add to Cart button
  document.getElementById("addToCart").addEventListener("click", addToCart);
}
function addToCart() {
  let cartContents = getLocalStorage("so-cart");
  //check to see if there was anything there
  if (!cartContents) {
    cartContents = [];
  }
  // then add the current product to the list
  cartContents.push(product);
  setLocalStorage("so-cart", cartContents);
  alertMessage(`${product.title} added to cart!`);
}
function renderProductDetails() {
  document.querySelector("#productName").innerText = product.title;
  document.querySelector("#productNameWithoutBrand").innerText = product.category;
  document.querySelector("#productImage").src = product.image;
  document.querySelector("#productImage").alt = product.title;
  document.querySelector("#productFinalPrice").innerText = product.price;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML = product.description;
  document.querySelector("#addToCart").dataset.id = product.id;
}