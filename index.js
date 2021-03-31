const allDropDownTitles = document.querySelectorAll(".dropdown-title");
const allDropDownButtons = document.querySelectorAll(".dropdown-btn");

allDropDownButtons.forEach(btn => {
  btn.addEventListener("click", toggleDropdown);
});

function toggleDropdown(e) {
  allDropDownTitles.forEach(item => {
    if (item == e.target) {
      if (!item.nextElementSibling.classList.contains("opened")) {
        item.nextElementSibling.classList.add("opened");
        item.children[0].classList.add("rotate");
      } else {
        item.nextElementSibling.classList.remove("opened");
        item.children[0].classList.remove("rotate");
      }
    } else {
      item.nextElementSibling.classList.remove("opened");
      item.children[0].classList.remove("rotate");
    }
  });
}

document.addEventListener("mouseup", e => {
  allDropDownTitles.forEach(item => {
    if (item.parentNode && item != e.target) {
      item.nextElementSibling.classList.remove("opened");
      item.children[0].classList.remove("rotate");
      console.log("close");
    }
  });
});
