$(document).ready(function () {
    $('.slider .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        navText: [],
        responsive:{
            0:{
                items:1,
                dots:true,
                nav:false
            },
            480:{
                items:1
            }
        }
    })
});

$(document).ready(function () {
    $('.carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        navText: [],
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2
            },
            680: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    })

    const iconSearch = document.querySelector('.icons__search');
    const body = document.querySelector('body');
    iconSearch.addEventListener('click', function (e) {
        e.stopPropagation();
        this.classList.add('icons__search-active');
    });
    body.addEventListener('click', function (e) {
        iconSearch.classList.remove('icons__search-active');
    });
});