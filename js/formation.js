
$(document).ready(function(){ 
    $(window).scroll_to_top(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll_to_top').fadeIn(); 
        } else { 
            $('#scroll_to_top').fadeOut(); 
        } 
    }); 
    $('#scroll_to_top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});