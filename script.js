var setup = function () {
    var flipButton = document.getElementsByClassName("flip-button")[0],
        closeButton = document.getElementsByClassName("close-button")[0],
        container = document.getElementsByClassName("container")[0],
        backButton = document.getElementsByClassName("back-button")[0],
        shadow = document.getElementsByClassName("shadow")[0];

    container.classList.add("enter");
    shadow.classList.add("visible");

    flipButton.addEventListener("click", function () {
        container.classList.add("flipanim");
    }, false);

    backButton.addEventListener("click", function () {
        container.classList.remove("flipanim");
    }, false);

    closeButton.addEventListener("click", function () {
        container.classList.add("close");
        shadow.classList.remove("visible");
        shadow.classList.add("out");
    }, false);

    shadow.addEventListener("webkitTransitionEnd", function () {
        if (shadow.classList.contains("out")) {
            shadow.parentNode.removeChild(shadow);
        }
    }, false);

    container.addEventListener("webkitAnimationEnd", function () {
        if (container.classList.contains("enter")) {
            container.classList.remove("enter");
        }
    }, false);
};

window.onload = setup;

