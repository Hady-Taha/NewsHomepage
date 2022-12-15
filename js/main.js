const myCollapsible = document.getElementById("navbarNavAltMarkup");
myCollapsible.addEventListener("show.bs.collapse", (event) => {
    document.getElementById("closeOpen").src ="./img/icon-menu-close.svg";
});

myCollapsible.addEventListener("hide.bs.collapse", (event) => {
  document.getElementById("closeOpen").src = "./img/icon-menu.svg";
});