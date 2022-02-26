const logo = document.getElementById("logo");

logo.addEventListener("click", function () {
    logo.animate([{ transform: 'rotate(360deg)' }], {
        duration: 800,
        ease: "ease-in-out"
    });
});