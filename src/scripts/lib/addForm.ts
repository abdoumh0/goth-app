import { createImg, createInput } from "./util";

declare var htmx: any;

function cnlOnclick() {
  document.getElementById("add-form-inputs")?.remove();
  document.getElementById("add-form")?.remove();
}

const add = document.getElementById("add-form-btn") as HTMLButtonElement;
add.onclick = (e) => {
  if (document.getElementById("add-form") != null) {
    return;
  }
  const form = document.createElement("form");
  form.id = "add-form";
  form.setAttribute("hx-post", "/post");
  form.setAttribute("hx-target", "#add-form-inputs");
  form.setAttribute("hx-swap", "outerHTML");
  form.setAttribute("hx-indicator", "#indicator");
  form.setAttribute("hx-disabled-elt", "#add-form-submit");
  form.classList.add("hidden");
  document.body.append(form);
  htmx.process(form);

  const tbody = document.getElementById("tbody") as HTMLTableSectionElement;
  const row = document.createElement("tr");
  row.id = "add-form-inputs";
  row.classList.add("text-center", "[&>td]:p-2", "animate-slide-in");
  let td = new Array(5) as HTMLTableCellElement[];
  for (let index = 0; index < td.length; index++) {
    td[index] = document.createElement("td");
    if (index < 4) {
      td[index].classList.add("min-w-56");
    }
  }
  const name = createInput("name", "add-form", "text");
  const surname = createInput("surname", "add-form", "text");
  const class_ = createInput("class", "add-form", "text");
  const controls = document.createElement("div");
  controls.classList.add("flex", "justify-between");
  const submit = document.createElement("button");
  submit.type = "submit";
  submit.id = "add-form-submit";
  submit.classList.add(
    "hover:bg-gray-200",
    "min-w-5",
    "rounded",
    "p-1",
    "mx-[1px]"
  );
  submit.setAttribute("form", "add-form");
  const cancel = document.createElement("button");
  const sbt_img = createImg("/images/submit.svg", "submit", 20);
  const cnl_img = createImg("/images/cancel.svg", "cancel", 20);
  const ind_img = createImg("/images/spinner.svg", "spinner", 20);
  td[0].classList.add("flex", "justify-center");
  ind_img.id = "indicator";
  ind_img.classList.add("htmx-indicator", "animate-spin");
  cancel.classList.add(
    "hover:bg-gray-200",
    "rounded",
    "min-w-5",
    "p-1",
    "mx-[1px]"
  );
  cancel.onclick = cnlOnclick;
  submit.append(sbt_img);
  cancel.append(cnl_img);
  td[0].append(ind_img);
  td[1].append(name);
  td[2].append(surname);
  td[3].append(class_);
  td[4].append(submit, cancel);
  td[4].classList.add("flex", "justify-between", "my-1");
  row.append(td[0], td[1], td[2], td[3], td[4]);
  tbody.prepend(row);
  name.focus();
};
