$(window).on("load", function(){
    let slideIndex = $(".slide.active").index();
    const slideLen = $('.slide').length;
    function slideshow(){
        $('.slide').removeClass('active').eq(slideIndex).addClass('active')
        if(slideIndex == slideLen-1){
            slideIndex =0
        }
        else{
            slideIndex++;
        
        }
        setTimeout(slideshow,5000)
    }
    slideshow();
})

