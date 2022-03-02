module.exports = function (avatar) {
    document.getElementsByClassName("choose-image-" + avatar)[0].animate(
        [{ transform: 'scale(1.8)' }, { transform: "scale(2.2   )" }, { transform: "scale(1.8)" }], {
        duration: 300,
        ease: "ease"
    });

    var elems = document.querySelectorAll(".selected");

    [].forEach.call(elems, function (el) {
        el.classList.remove("selected");
    });
    document.getElementsByClassName("choose-image-" + avatar)[0].classList.add("selected");
}