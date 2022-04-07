var links = document.querySelectorAll(".sidenav a");
for (link of links) {
  link.addEventListener("click", function (e) {
    for (inlink of links) {
      inlink.classList.remove("active");
    }
    e.target.classList.add("active");
  });
}
