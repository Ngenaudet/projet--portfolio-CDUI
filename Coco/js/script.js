let currentActiveMenu = "";

$(document).ready(function() {
    
    // startLoader();
    
    // setTimeout(() => {
    //     stopLoader();
    // }, "3000")
    
    // initPage();
    
    // changeLottieOnHover();

    let accordion_items = $('.accordion-item');

    accordion_items.on('click', function(e) {
        $(this).closest('.row').toggleClass('h-0');
    });
    
});



const titles = document.querySelectorAll('.title-section--fixed');
let titlePosition = {};

titles.forEach( title => {        
    titlePosition[title.id] = title.parentElement.offsetTop;         
 });

 console.log(titlePosition)

window.onscroll = function() { 

    // let presentation = '#'+Object.keys(titlePosition)[0];    
    // console.log(presentation);

    // if( window.pageYOffset > titlePosition['pres'] )
    // {
    //     document.querySelector(presentation).add('sticky');
    // }
    // else if( window.pageYOffset > (document.querySelector(presentation).parentElement.offsetTop - 400) + document.querySelector(presentation).parentElement.offsetTop )
    // {
    //     document.querySelector(presentation).remove('sticky');
    // }


    /**
    * detect when the title get over the div
    */
    
    let title = document.querySelector('.title-section--fixed'),
    container = document.querySelector('#projets');

    // si le scroll de la page depasse l element alors il deviens sticky
    if (window.pageYOffset > title.offsetTop) {
        title.classList.add("sticky");
    } 


    if( window.pageYOffset  > (title.parentElement.offsetHeight - 400) + (title.parentElement.offsetHeight / 2) )
    {
        title.classList.remove("sticky");
    }
   
};







// var header = document.getElementById("pres");
// var sticky = header.offsetTop;

// function stickyTitle() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }

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