import { createDialog, createImg } from "./util";
declare var htmx: any;

export function attachDeleteHandler(button: HTMLButtonElement) {
  const row = button.parentElement?.parentElement
    ?.parentElement as HTMLTableRowElement;
  const td = row.firstChild as HTMLTableSectionElement;
  const id = td.innerHTML;
  const dialog = createDialog();
  const content = document.createElement("div");
  content.classList.add("text-center", "grid", "gap-y-5", "my-2");
  const confirm = document.createElement("button");
  confirm.type = "submit";

  confirm.setAttribute("hx-post", "/delete");
  confirm.setAttribute("hx-target", "#row-" + id);
  confirm.setAttribute("hx-swap", "outerHTML");
  confirm.setAttribute("hx-vals", `{"id": ${id}}`);
  confirm.setAttribute("hx-disabled-elt", "this");
  htmx.process(confirm);
  confirm.append("Delete");
  confirm.classList.add(
    "grid",
    "p-2",
    "text-center",
    "font-semibold",
    "text-white",
    "bg-red-400",
    "rounded",
    "font-mono",
    "w-24",
    "h-10",
    "mx-auto",
    "place-content-center"
  );

  confirm.onclick = () => {
    const indicator = document.createElement("div");
    indicator.append(createImg("/images/spinner-white.svg", "spinner", 20));
    indicator.id = "delete-indicator";
    indicator.classList.add("animate-spin");
    confirm.firstChild?.replaceWith(indicator);
  };

  content.append(`Are you sure you want to delete item \"${id}\"?`, confirm);
  dialog.append(content);
  dialog.addEventListener("htmx:afterRequest", () => {
    dialog.close();
    dialog.remove();
  });
  button.onclick = () => {
    document.body.append(dialog);
    dialog.showModal();
  };
}

const dlt_btns = document.getElementsByClassName(
  "delete-btn"
) as HTMLCollectionOf<HTMLButtonElement>;

Array.from(dlt_btns).forEach((btn) => {
  attachDeleteHandler(btn);
});
