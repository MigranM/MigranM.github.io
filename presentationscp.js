function presentation() {
    location.href = "C:/Users/migra/OneDrive/Рабочий стол/Утеба/Вебка/RONIN/presentation.html";
}

window.onload = function () {
    if (window.innerWidth <= 965) {

        img.width = 90 + "vw";
        img.height = 90 / 16 * 9 + "vw";
        img.marginLeft = 0;
        bar.width = 90 + "vw";
        bar.marginLeft = 0;

        l_btn.left = "calc(90vw/2 - 165px)";
        r_btn.right = "calc(90vw/2 - 165px)";
        page.left = 45 + "vw";


    }
    if (window.innerWidth > 965) {

        img.width = 960 + "px";
        img.height = 540 + "px";
        img.marginLeft = "calc(45vw - 480px)";
        bar.width = 960 + "px";
        bar.marginLeft = "calc(45vw - 480px)";

        l_btn.left = 310 + "px";
        r_btn.right = 310 + "px";
        page.left = 480 + "px";
    }

}

const doc = window;
doc.addEventListener("keydown", function onEvent(event) {
    if (event.key == "Escape") {
        location.href = "C:/Users/migra/OneDrive/Рабочий стол/Утеба/Вебка/RONIN/main.html#explore";
    }
});
var img = document.getElementById("image").style;
var bar = document.getElementById("bar").style;
var l_btn = document.getElementById("bar_left_btn").style;
var r_btn = document.getElementById("bar_right_btn").style;
var page = document.getElementById("bar_page").style;

var resize = function res() {

    if (window.innerWidth <= 965) {

        img.width = 90 + "vw";
        img.height = 90 / 16 * 9 + "vw";
        img.marginLeft = 0;
        bar.width = 90 + "vw";
        bar.marginLeft = 0;

        l_btn.left = "calc(90vw/2 - 165px)";
        r_btn.right = "calc(90vw/2 - 165px)";
        page.left = 45 + "vw";


    }
    if (window.innerWidth > 965) {

        img.width = 960 + "px";
        img.height = 540 + "px";
        img.marginLeft = "calc(45vw - 480px)";
        bar.width = 960 + "px";
        bar.marginLeft = "calc(45vw - 480px)";

        l_btn.left = 310 + "px";
        r_btn.right = 310 + "px";
        page.left = 480 + "px";
    }
};
(function () {
    var time;
    window.onresize = function (e) {
        if (time)
            clearTimeout(time);
        time = setTimeout(function () {
            resize(e);
        }, 0);
    }
})();