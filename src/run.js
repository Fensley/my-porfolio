const liparent = document.querySelectorAll(".runUpload");
const liimg = document.querySelectorAll(".liparent img");
const lispan = document.querySelectorAll(".runUpload i");
let count = document.querySelector(".count");
const miles = document.querySelectorAll(".miles");

function forMile() {
  let startWith = 0;
  miles.forEach((e) => {
    startWith += Number(e.textContent);
  });
  count.textContent = startWith;
}
forMile();

let tf = false;
liparent.forEach((li, inde) => {
  li.addEventListener("click", () => {
    tf = !tf;
    liimg[inde].classList.toggle("imgone");
    if (tf) {
      lispan[inde].className = `fa-solid fa-chevron-down upAndDown yy`;
    } else {
      lispan[inde].className = `fa-solid fa-chevron-up upAndDown yy`;
    }
  });
});
// display the image when click on it --left
