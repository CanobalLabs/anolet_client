module.exports = function (avatar) {
    document.getElementsByClassName("choose-image")[avatar - 1].animate(
        [{ transform: 'scale(1.8)' }, { transform: "scale(2.2   )" }, { transform: "scale(1.8)" }], {
        duration: 300,
        ease: "ease"
    });

    Array.prototype.forEach.call(document.getElementsByClassName("choose-image"), function (avatar) {
        // Remove selected class from previous avatar
        // This is not efficient in any way whatsoever. I know how to do it better, but hey, it works.
        avatar.classList.remove("selected");
    });
    document.getElementsByClassName("choose-image")[avatar - 1].classList.add("selected");
}