import PrototypeModel from "./components/dialog.js";

document
.querySelectorAll('[data-prototype-module="prototype-modal"]')
.forEach((button) => {
  new PrototypeModel(button).init();
});