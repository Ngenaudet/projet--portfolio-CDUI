var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + "px";
    cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function() {
    cursor.classList.add("click");
    cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function() {
    cursor.classList.remove("click");
    cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
    item.addEventListener("mouseover", () => {
        cursor.classList.add("hover");
    });
    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
    });
});

$(document).ready(function() {
    // startLoader();

    // setTimeout(() => {
    //     stopLoader();
    // }, "3000")

    let accordion_items = $(".accordion-item");

    accordion_items.on("click", function(e) {
        $(this).closest(".row").toggleClass("h-0");
    });

    $(".accordion-button-home").on("click", (e) => {
        e.stopPropagation();
        let idSection = $(e.target)
            .closest(".accordion-item-home")
            .find(".accordion-body-home");

        $([document.documentElement, document.body]).animate({
                scrollTop: $(idSection).offset().top,
            },
            800
        );
    });

    $(".close__section").on("click", function() {
        $(".collapse").collapse("hide");
    });

    let scrollTop = $(".scroll__top");

    $(window).scroll(function() {
        // si l accordeon est ouvert
        if ($(".accordion-collapse").hasClass("show")) {
            if ($(this).scrollTop() > 800) {
                $(scrollTop).fadeIn();
            } else {
                $(scrollTop).fadeOut();
            }
        } else {
            $(scrollTop).fadeOut();
        }
        
    });

    $(scrollTop).click(function() {
        $("html, body").animate({
                scrollTop: 0,
            },
            150
        );
        return false;
    });


    let btn__choices = $('.ressources__choices a');

    btn__choices.on('click', function(e) {
        e.preventDefault();
        let currentSection = $(this).attr('data-section');

        $('.content_to_load').hide();
        $('.' + currentSection).show();
    });

});