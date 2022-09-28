


var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

$(document).ready(function() {
    
    // startLoader();
    
    // setTimeout(() => {
    //     stopLoader();
    // }, "3000")
    
    // changeLottieOnHover();
    
    let accordion_items = $('.accordion-item');
    
    accordion_items.on('click', function(e) {
        $(this).closest('.row').toggleClass('h-0');
    });
    
    $('.accordion-button').on('click', (e) => {
        let idSection = $(e.target).closest('.accordion-item').find('.accordion-body');
        
        $([document.documentElement, document.body]).animate({
            scrollTop: $(idSection).offset().top,
        }, 800);
    });
    
    $(".close__section").on('click', function() {
        $('.collapse').collapse('hide')
    });
    
    
});


// const titles = document.querySelectorAll('.title-section--fixed');
// let titlePosition = {};

// titles.forEach(title => {
//     titlePosition[title.id] = title.parentElement.offsetTop;
// });

// function changeLottieOnHover() {
//     let links = $('')
// }

// function startLoader() {
//     var select = function(s) {
//         return document.querySelector(s);
//     },
//     selectAll = function(s) {
//         return document.querySelectorAll(s);
//     },
    
//     animationWindow = select('#loader'),
//     anim = lottie.loadAnimation({
//         container: animationWindow,
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         path: "https://assets3.lottiefiles.com/packages/lf20_3w1whxz5.json"
//     });
//     document.getElementById('loader').style.display = "flex";
// }

// function stopLoader() {
//     document.getElementById('loader').style.display = "none";
// }
