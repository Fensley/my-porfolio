const liparent = document.querySelectorAll(".liparent");

const liimg = document.querySelectorAll(".liparent img");

const lispan = document.querySelectorAll(".runUpload i");

const miles = document.querySelectorAll(".miles");

console.log(miles);

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
