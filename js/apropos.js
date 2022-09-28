/* VANILLA JS */
// Add a new event listener (action) to the whole html (document) when the DOM is loaded
// document = whole the html
// addEventListener = function with two parameters (event, action)
// action  : function callback who is executed when the action is executed
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
