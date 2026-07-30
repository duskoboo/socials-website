const pfp = document.getElementById("pfp");

if (pfp) {
  pfp.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  pfp.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });
}

const matrixButton = document.getElementById("matrix");
const matrixButtonText = document.getElementById("matrixText");

matrixButton.addEventListener("click", (event) => {
    event.preventDefault();

    navigator.clipboard.writeText("@duskoboo:tuwunel.dusko.boo");

    matrixButtonText.textContent = "Matrix ID Copied!";

    setTimeout(() => {
        matrixButtonText.textContent = "Matrix";
    }, 1000);
});
