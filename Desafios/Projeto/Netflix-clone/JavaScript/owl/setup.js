$('.owl-carousel').owlCarousel({
    loop:true,//navegar de forma infinita na lista
    margin:10,
    nav:false, //botões de navegação 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})