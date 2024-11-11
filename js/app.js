const rowsList = document.querySelectorAll(".row");
const headingSectionList = document.querySelectorAll(".heading-section");
const iconClose = document.querySelector(".icon-close");
const menuBtn = document.querySelector(".img-menu");
const menu = document.querySelector(".nav-list-small");
const navItemList = document.querySelectorAll(".nav-item");

const rowsOberver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    entry.target.classList.toggle("show-row", entry.isIntersecting);
    if (entry.isIntersecting) rowsOberver.unobserve(entry.target);
  });
});

const headingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show-heading-section", entry.isIntersecting);
    if (entry.isIntersecting) headingObserver.unobserve(entry.target);
  });
});

rowsList.forEach((row) => rowsOberver.observe(row));
headingSectionList.forEach((heading) => headingObserver.observe(heading));

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
});

iconClose.addEventListener("click", () => {
  menu.style.display = "none";
});

navItemList.forEach((navItem) => {
  navItem.addEventListener("click", () => (menu.style.display = "none"));
});
