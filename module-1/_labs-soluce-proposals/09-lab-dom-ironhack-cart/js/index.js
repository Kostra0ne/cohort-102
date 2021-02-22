const ironCart = (function () {
  "use strict";
  let nameEl, priceEl, productsEl, totalEl;

  function createProduct(evt) {
    evt.preventDefault(); // prevents page refresh on form submission

    if (productsEl.children[0].className === "empty-list")
      productsEl.innerHTML = "";

    const price = Number(priceEl.value);

    const row = document.createElement("div");
    row.classList = "row product";
    row.innerHTML = `
    <span class="label">${nameEl.value}</span>
    <span class="unit-price">${price}</span>
    <span class="quantity">QTY</span>
    <input class="input quantity" min="0" type="number" value="1">
    <span class="total-price">$<span class="value">${price}</span></span>
    <button class="btn delete">delete</button>`;

    row.querySelector(".input.quantity").oninput = (e) => {
      updateSubTotal(e.target.parentElement);
      updateTotal();
    };

    row.querySelector(".btn.delete").onclick = (e) => {
      deleteProduct(e.target.parentElement);
      updateTotal();
    };

    productsEl.appendChild(row);
  }

  function deleteProduct(row) {
    row.remove();
    if (productsEl.children.length === 0)
      productsEl.innerHTML = '<span class="empty-list">No products yet</span>';
  }

  function updateTotal() {
    totalEl.textContent = [
      ...document.querySelectorAll(".total-price .value"),
    ].reduce((acc, el) => acc + Number(el.textContent), 0);
  }

  function updateSubTotal(row) {
    const priceUnit = row.querySelector(".unit-price");
    const priceRow = row.querySelector(".total-price");
    const price = (priceUnit.textContent * input.value).toFixed(2);
    priceRow.textContent = `$${price}`;
  }

  function start() {
    nameEl = document.getElementById("new_product_name");
    priceEl = document.getElementById("new_product_price");
    totalEl = document.getElementById("price_total");
    productsEl = document.getElementById("list_products");
    document.getElementById("btn_new_product").onclick = createProduct;
  }

  return { start };
})();

window.addEventListener("DOMContentLoaded", ironCart.start);
