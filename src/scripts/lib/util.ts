declare var htmx: any;

export function createInput(
  name: string,
  form: string,
  type: string
): HTMLInputElement {
  const input = document.createElement("input");
  input.type = type;
  input.setAttribute("form", form);
  input.name = name;
  input.placeholder = name;
  input.autocomplete = "off";
  input.required = true;
  input.classList.add("text-center");
  return input;
}

export function createImg(
  src: string,
  alt: string,
  width: number
): HTMLImageElement {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.width = width;
  return img;
}

export function createDialog(): HTMLDialogElement {
  const dialog = document.createElement("dialog");
  dialog.addEventListener("click", function (event) {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      dialog.close();
      dialog.remove();
    }
  });
  const close = document.createElement("button");
  const btn_svg = createImg("/images/cancel.svg", "close", 24);
  close.append(btn_svg);
  close.onclick = () => {
    dialog.close();
  };
  const close_container = document.createElement("div");
  close_container.classList.add("w-full", "flex", "justify-end");
  close_container.append(close);
  dialog.append(close_container);
  dialog.classList.add("absolute", "min-w-10", "w-fit", "p-2", "rounded");

  return dialog;
}
