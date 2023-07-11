import { getCategory } from "./services.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="/pages/index.html?product=${product.Id}">
    <img
      src="${product.image}"
      alt="Image of ${product.title}"
    />
    <h3 class="card__category">${product.category}</h3>
    <h2 class="card__name">${product.title}</h2>
    <p class="product-card__price">$${product.price}</p></a>
  </li>`;
}

export async function productList(selector, category) {
  // get the element we will insert the list into from the selector
  const el = document.querySelector(selector);
  // get the list of products
  const products = await getCategory(category);
  console.log(products);
  // render out the product list to the element
  renderListWithTemplate(productCardTemplate, el, products);
  document.querySelector(".title").innerHTML = category;
}