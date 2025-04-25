//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

import PrototypeModel from "./components/dialog.js";

window.GOVUKPrototypeKit.documentReady(() => {
  document
  .querySelectorAll('[data-prototype-module="prototype-modal"]')
  .forEach((button) => {
    new PrototypeModel(button).init();
  });
})
