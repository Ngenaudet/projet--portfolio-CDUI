let currentActiveMenu = "";

$(document).ready(function() {

    // startLoader();

    // setTimeout(() => {
    //     stopLoader();
    // }, "3000")


    changeLottieOnHover();

});
 
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
 