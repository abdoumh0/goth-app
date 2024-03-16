import "./lib/addForm";
import "./lib/deleteForm";
import "./lib/observers";

const trs = document.querySelectorAll("tr");

trs.forEach((tr) => {
  tr.classList.add("transition-all", "duration-500");
});
