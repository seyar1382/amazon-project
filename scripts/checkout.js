import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
// import "./cart-class.js";
// import "../data/backend-practice.js";

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve();
//   });
// })

async function loadPage() {
  // throw "error1";
  try {
    await loadProductsFetch();
  } catch (error) {
    console.log("error");
  }

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

// loadProductsFetch().then(() => {

// });

// loadProducts(() => {

// });
