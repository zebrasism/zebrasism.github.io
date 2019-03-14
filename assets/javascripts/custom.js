document.addEventListener("DOMContentLoaded", function(event) {
    // mobile menu
        var menu_btn = $('#header .mm-btn'),
            menu_box = $('.m-menu'),
            menu_close = $('.m-menu .close-this')

        menu_btn.click(function(){
            menu_box.addClass('show-this')
        })

        menu_close.click(function(){
            menu_box.removeClass('show-this')
        })
    // mobile menu end


    // go top btn
    $('.go-top').click(function(){
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, 500, 'swing', function() {});
    })
    // go top btn end
})