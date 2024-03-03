const add = document.getElementById("add") as HTMLButtonElement;

add.onclick = (e) => {
  if (document.getElementById("form") != null) {
    return;
  }
  const table_container = document.getElementById(
    "table_container"
  ) as HTMLDivElement;
  const table = document.querySelector("table") as HTMLTableElement;
  const form = document.createElement("form");
  form.append(table);
  table_container.append(form);

  const tbody = document.getElementById("tbody") as HTMLTableSectionElement;
  const row = document.createElement("tr");
  let tdata = new Array(5) as HTMLTableCellElement[];
  for (let index = 0; index < tdata.length; index++) {
    tdata[index] = document.createElement("td");
  }
  const name = document.createElement("input");
  const surname = document.createElement("input");
  const class_ = document.createElement("input");
  const submit = document.createElement("button");
  tdata[0].append("hmm");
  tdata[1].append(name);
  tdata[2].append(surname);
  tdata[3].append(class_);
  tdata[4].append(submit);
  submit.type = "submit";
  submit.append("e");
  name.type = "text";
  surname.type = "text";
  class_.type = "text";
  name.classList.add("table-cell");
  surname.classList.add("table-cell");
  class_.classList.add("table-cell");
  console.log(tdata);
  row.append(tdata[0], tdata[1], tdata[2], tdata[3], tdata[4]);
  tbody.prepend(row);
};
