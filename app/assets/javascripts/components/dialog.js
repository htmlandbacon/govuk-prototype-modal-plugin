export default function PrototypeModel($module) {
    this.$module = $module;
  }
  
  PrototypeModel.prototype.init = function () {
    if (!this.$module) {
      return;
    }
  
    this.$module.addEventListener("click", (e) => {
      e.preventDefault();
  
      const dialog = document.createElement("dialog");
      dialog.setAttribute("class", "prototype-dialog");
      dialog.setAttribute("aria-labelledby", "prototype-dialog__heading");
  
      dialog.innerHTML = `
        <h2 id="prototype-dialog__heading" class="govuk-heading-l">
          ${this.$module.dataset.modalHeading}
        </h2>`
  
        if (this.$module.dataset.modalText) {
          dialog.innerHTML += `
            <p class="govuk-paragraph">
              ${this.$module.dataset.modalText}
            </h2>`
        }
  
        dialog.innerHTML += `
        <form method="dialog">
        <div class="govuk-button-group">
          <a href="${this.$module.dataset.modalUrl}" class="govuk-button ${this.$module.dataset.modalButtonClasses ? this.$module.dataset.modalButtonClasses : ""}">
          ${this.$module.dataset.modalButton ? this.$module.dataset.modalButton : "Confirm" }
          </a>
  
          <button class="govuk-button govuk-button--secondary">
            Close
          </button>
        </div>
        </form>
  
  </div>
      `.replace(/\s\s+/g, "");
  
      document.body.appendChild(dialog);
  
      dialog.showModal();
      dialog.focus();
  
      dialog.addEventListener("close", async () => {
        dialog.remove();
      });
    });
  };
  