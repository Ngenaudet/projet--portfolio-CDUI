let currentActiveMenu = "";

$(document).ready(function() {

    // startLoader();

    // setTimeout(() => {
    //     stopLoader();
    // }, "3000")

    initPage();

    changeLottieOnHover();

});

let el1 = document.getElementsByClassName('title__presentation'),
    el2 = document.getElementsByClassName('projets');



window.onscroll = function() { stickyTitle() };

var headerPos = document.getElementById("myHeader").offsetTop;
var sticky = header;

function stickyTitle() {
    if (window.pageYOffset > headerPos) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function changeLottieOnHover() {
    let links = $('')
}

function startLoader() {
    var select = function(s) {
            return document.querySelector(s);
        },
        selectAll = function(s) {
            return document.querySelectorAll(s);
        },

        animationWindow = select('#loader'),
        anim = lottie.loadAnimation({
            container: animationWindow,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: "https://assets3.lottiefiles.com/packages/lf20_3w1whxz5.json"
        });
    document.getElementById('loader').style.display = "flex";
}

function stopLoader() {
    document.getElementById('loader').style.display = "none";
}

function loadContentPage() {
    $('.js-menu ul li a').on('click', function(e) {

        e.preventDefault();

        if (currentActiveMenu !== e.currentTarget.dataset.link) {

            // document.getElementById('loader').style.display = "flex";

            $('.js-load__content').load('./partials/' + e.currentTarget.dataset.link + ".html", function(response, status, xhr) {

                if (status === 'success') {
                    document.getElementsByClassName('js-load__content').innerHTML = xhr.responseText;
                    // stopLoader();
                    $('body').scrollTo('#portfolio');

                }
            });

            currentActiveMenu = e.currentTarget.dataset.link;
        }
    });
}

function initPage() {
    currentActiveMenu = 'home';
    getHeader();
}

function getHeader() {
    $('.js-load__header').load("./partials/header.html", function(response, status, xhr) {
        if (status === "success") {
            document.getElementsByClassName('js-load__header').innerHTML = xhr.responseText;
            loadContentPage();
        }
    });
}

function getFooter() {

    $('.js-load__footer').load("./partials/footer.html", function(response, status, xhr) {
        if (status === "success") {
            document.getElementsByClassName('js-load__footer').innerHTML = xhr.responseText;

        }
    });
}