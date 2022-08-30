const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);



const yearEl = document.querySelector(".year");
const curr = new Date().getFullYear();
yearEl.textContent = curr;
//const currentYear = new Date().getFullYear();
//yearEl = currentYear;