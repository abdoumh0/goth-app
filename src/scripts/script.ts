declare var htmx: any;

const add = document.getElementById("add") as HTMLButtonElement;

const cnlOnclick = () => {
  const tg = document.getElementById("target");
  tg?.remove();
  const f = document.getElementById("form");
  f?.remove();
};

add.onclick = (e) => {
  if (document.getElementById("form") != null) {
    return;
  }
  const table_container = document.getElementById(
    "table_container"
  ) as HTMLDivElement;
  const form = document.createElement("form");
  form.id = "form";
  form.setAttribute("hx-post", "/post");
  form.setAttribute("hx-target", "#target");
  form.setAttribute("hx-swap", "outerHTML");
  form.classList.add("hidden");
  document.body.append(form);
  htmx.process(form);

  const tbody = document.getElementById("tbody") as HTMLTableSectionElement;
  const row = document.createElement("tr");
  row.id = "target";
  let td = new Array(5) as HTMLTableCellElement[];
  for (let index = 0; index < td.length; index++) {
    td[index] = document.createElement("td");
    td[index].classList.add("p-2", "py-1");
  }
  const name = document.createElement("input");
  const surname = document.createElement("input");
  const class_ = document.createElement("input");
  const submit = document.createElement("button");
  const cancel = document.createElement("button");
  const sbt_img = document.createElement("img");
  const cnl_img = document.createElement("img");
  sbt_img.src = "/images/submit.svg";
  sbt_img.alt = "submit";
  sbt_img.width = 24;
  cnl_img.src = "/images/cancel.svg";
  cnl_img.alt = "cancel";
  cnl_img.width = 24;
  sbt_img.classList.add("hover:bg-gray-200", "rounded", "min-w-5");
  cnl_img.classList.add("hover:bg-gray-200", "rounded", "min-w-5");
  cancel.onclick = cnlOnclick;
  submit.type = "submit";
  td[1].append(name);
  td[2].append(surname);
  td[3].append(class_);
  td[4].append(submit, cancel);
  td[4].classList.add("flex", "justify-between", "py-1", "mt-2");
  submit.append(sbt_img);
  cancel.append(cnl_img);
  name.type = "text";
  surname.type = "text";
  class_.type = "text";
  name.name = "name";
  surname.name = "surname";
  class_.name = "class";
  name.required = true;
  surname.required = true;
  class_.required = true;
  name.autocomplete = "off";
  surname.autocomplete = "off";
  class_.autocomplete = "off";
  name.setAttribute("form", "form");
  surname.setAttribute("form", "form");
  class_.setAttribute("form", "form");
  submit.setAttribute("form", "form");
  name.placeholder = "name";
  surname.placeholder = "surname";
  class_.placeholder = "class";
  name.classList.add(
    "text-center",
    "py-1",
    "my-1",
    "rounded",
    "bg-inherit",
    "w-full"
  );
  surname.classList.add(
    "text-center",
    "py-1",
    "my-1",
    "rounded",
    "bg-inherit",
    "w-full"
  );
  class_.classList.add(
    "text-center",
    "py-1",
    "my-1",
    "rounded",
    "bg-inherit",
    "w-full"
  );
  row.append(td[0], td[1], td[2], td[3], td[4]);
  tbody.prepend(row);
  name.focus();
};

// htmx.onLoad((q) => {
//   console.log(q);
//   const form = document.getElementById("form");
//   const target = document.getElementById("target");
//   if (form && !target) {
//     const tc = document.getElementById("table_container");
//     const table = document.querySelector("table") as HTMLTableElement;
//     tc?.append(table);
//     form.remove();
//   }
// });

const observer = new MutationObserver((mutations, observer) => {
  const form = document.getElementById("form");
  const target = document.getElementById("target");
  if (form && !target) {
    const tc = document.getElementById("table_container");
    const table = document.querySelector("table") as HTMLTableElement;
    tc?.append(table);
    form.remove();
  }
});

const tb = document.querySelector("tbody") as HTMLTableSectionElement;

observer.observe(tb, {
  childList: true,
});
