import { attachDeleteHandler } from "./deleteForm";

const tbody_observer = new MutationObserver((mutations, observer) => {
  const form = document.getElementById("add-form");
  const target = document.getElementById("add-form-inputs");
  if (form && !target) {
    form.remove();
  }

  const row = mutations[0].addedNodes.item(0) as HTMLTableRowElement | null;
  const dlt_btn = row?.querySelector(".delete-btn") as HTMLButtonElement | null;
  if (dlt_btn) {
    attachDeleteHandler(dlt_btn);
  }
});

const tb = document.querySelector("tbody") as HTMLTableSectionElement;

tbody_observer.observe(tb, {
  childList: true,
});
