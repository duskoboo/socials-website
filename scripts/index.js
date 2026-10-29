const pfp = document.getElementById("pfp");

if (pfp) {
  pfp.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  pfp.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });
}
