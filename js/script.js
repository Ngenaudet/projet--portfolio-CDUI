let currentActiveMenu = "";

document.addEventListener("DOMContentLoaded", function () {
    // querySelectorAll = get all DOM elements in the document that correspond to the specified selector
    let boxesToFlip = document.querySelectorAll(".box");

    boxesToFlip.forEach(function (box) {
        box.addEventListener("click", function (element) {
            let body = element.target.closest(".body");
            // Toggle class animateContent of the class list
            body.classList.toggle("animateContent");
        });
    });
});

$(document).ready(function () {
    // startLoader();

    // setTimeout(() => {
    //     stopLoader();
    // }, "3000")

    changeLottieOnHover();
});

const titles = document.querySelectorAll(".title-section--fixed");
let titlePosition = {};

titles.forEach((title) => {
    titlePosition[title.id] = title.parentElement.offsetTop;
});

window.onscroll = function () {
    let title = document.querySelector(".title-section--fixed"),
        container = document.querySelector("#projets");

    if (window.pageYOffset > title.offsetTop) {
        title.classList.add("sticky");
    }

    if (window.pageYOffset > title.parentElement.offsetHeight - 400 + title.parentElement.offsetHeight / 2) {
        title.classList.remove("sticky");
    }
};

function changeLottieOnHover() {
    let links = $("");
}

function startLoader() {
    var select = function (s) {
            return document.querySelector(s);
        },
        selectAll = function (s) {
            return document.querySelectorAll(s);
        },
        animationWindow = select("#loader"),
        anim = lottie.loadAnimation({
            container: animationWindow,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "https://assets3.lottiefiles.com/packages/lf20_3w1whxz5.json",
        });
    document.getElementById("loader").style.display = "flex";
}

function stopLoader() {
    document.getElementById("loader").style.display = "none";
}

function loadContentPage() {
    $(".js-menu ul li a").on("click", function (e) {
        e.preventDefault();

        if (currentActiveMenu !== e.currentTarget.dataset.link) {
            // document.getElementById('loader').style.display = "flex";

            $(".js-load__content").load(
                "./partials/" + e.currentTarget.dataset.link + ".html",
                function (response, status, xhr) {
                    if (status === "success") {
                        document.getElementsByClassName("js-load__content").innerHTML = xhr.responseText;
                        // stopLoader();
                        $("body").scrollTo("#portfolio");
                    }
                }
            );

            currentActiveMenu = e.currentTarget.dataset.link;
        }
    });
}
