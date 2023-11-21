
const swiperKitsIntro = new Swiper(".kits-slider", {
    slidesPerView: 'auto',
    freeMode: true,
    grabCursor: true,
    navigation: {
        prevEl: ".kits-slider-panel__prev",
        nextEl: ".kits-slider-panel__next",
    },
});
const swiperInfection = new Swiper(".infection-slider", {
    slidesPerView: 'auto',
    freeMode: true,
    grabCursor: true,
    grid: {
        rows: 2,
    },
    navigation: {
        prevEl: ".infection-slider-panel__prev",
        nextEl: ".infection-slider-panel__next",
    },
});
const swiperInfectionPopup = new Swiper(".infection-popup-inner", {
    effect: 'fade',
    loop: false,
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: ".infection-popup-panel__next",
        prevEl: ".infection-popup-panel__prev",
    },
});

const swipeAllSliders = (index) => {
    swiperInfection.slideTo(index);
    swiperInfectionPopup.slideTo(index);
}
swiperInfection.on('slideChange', () => swipeAllSliders(swiperInfection.activeIndex));
swiperInfectionPopup.on('slideChange', () => swipeAllSliders(swiperInfectionPopup.activeIndex));


function swiperRecomend() {
    $('.recomend-slider').each(function (e) {
        const swiperRec = new Swiper(".recomend-slider-" + e, {
            slidesPerView: 'auto',
            freeMode: true,
            grabCursor: true,
            spaceBetween: 20,
            navigation: {
                nextEl: ".recomend-slider-panel__next-" + e,
                prevEl: ".recomend-slider-panel__prev-" + e,
            },
            breakpoints: {
                992: {
                    spaceBetween: 20,
                },
                576: {
                    spaceBetween: 15,
                },
                320: {
                    spaceBetween: 10,
                },
            },
        });
    })
}
swiperRecomend()

function swiperKitsAll() {
    $('.kitsAll-slider').each(function (e) {
        const swiperKits = new Swiper(".kitsAll-slider-" + e, {
            slidesPerView: 'auto',
            freeMode: true,
            loop: false,
            grabCursor: true,
            spaceBetween: 15,
            navigation: {
                nextEl: ".kitsAll-slider-panel__next-" + e,
                prevEl: ".kitsAll-slider-panel__prev-" + e,
            },
            breakpoints: {
                992: {
                    spaceBetween: 20,
                },
                576: {
                    spaceBetween: 15,
                },
                320: {
                    spaceBetween: 10,
                },
            },
        });
    })
}
swiperKitsAll()

function swiperStoreMain() {
    $('.storeKits-slider').each(function (e) {
        const swiperStoreMainSl = new Swiper(".storeKits-slider-" + e, {
            slidesPerView: 'auto',
            freeMode: true,
            grabCursor: true,
            navigation: {
                prevEl: ".storeKits-slider-panel__prev-" + e,
                nextEl: ".storeKits-slider-panel__next-" + e,
            },
        });
    })
}
swiperStoreMain()

$(document).on('submit', '#contactPage-form', function(e) {
    e.preventDefault();
    let $this = $(this);
    let fd = new FormData(this);
    $.ajax({
        type: 'POST',
        url: "../../actions/consultation.php",
        data: fd,
        contentType: false,
        processData: false,
        success: function () {
            alert('Success')
        },
    });
});

/*baron({
    root: '.main__clipper',
    scroller: '.main__scroller',
    bar: '.main__bar',
    scrollingCls: '_scrolling',
    draggingCls: '_dragging',
    direction: 'h',
    impact: 'scroller'
});*/

// jQuery function
$(document).ready(function() {
    // Скролл по линкам
    function scrollLink() {
        $(".customContent-item__link").click(function() {
            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top - 150;
            jQuery("html:not(:animated),body:not(:animated)").animate({
              scrollTop: destination
            }, 1500);
            return false;
        });
    };
    scrollLink();

    function stickyBlock() {
        $('.customContent-inner').css('margin-top', '-' + $('.customContent-list').height() + 'px')
    }
    stickyBlock()

    function addSlideInfection() {
        $('.infection-item').each(function(e) {
            let random = `item${Math.ceil(Math.random() * (10000000 - 1000) + 1000)}`;
            $(this).attr('id', random)
            let title = $(this).find('.infection-item__title').text();
            let descr = $(this).find('.infection-item__descr').html();
            let month = $(this).find('.infection-item__month').text();
            let link = $(this).find('.infection-item__link').attr('href');
            let date = $(this).find('.infection-item__year').text();
            let id = $(this).attr('id')
            $('.infection-popup-list').append(`
                <li class="infection-popup-item swiper-slide" id=popup${id}>
                    <div class="infection-popup-item-info">
                        <div class="infection-popup-item-head">
                            <p class="infection-popup-item__title">
                                ${title}
                            </p>
                            <p class="infection-popup-item__date">
                                ${month + ' ' + date}
                            </p>
                        </div>
                        <p class="infection-popup-item__descr">
                            ${descr}
                        </p>
                        <a target="_blank" href="${link}" class="infection-popup-item__link">
                            See full article →
                        </a>
                    </div>
                </li>
            `)
        })
        $('.infection-item__title').click(function() {
            let clickElem = $(this).parent()
            $('.infection-popup-item').each(function() {
                if('popup' + clickElem.attr('id') == $(this).attr('id')) {
                    //$('.infection-popup-item').addClass('open swiper-slide-visible swiper-slide-active')
                    $('.infection-popup').addClass('open');
                    $('.infection-popup-item').removeClass('swiper-slide-prev');
                    $('.infection-popup-item').removeClass('swiper-slide-active');
                    $('.infection-popup-item').removeClass('swiper-slide-next');
                    $('.infection-popup-item').removeClass('swiper-slide-visible');
                    $('.infection-popup-item').css({'opacity': 0});
                    $(this).prev().addClass('swiper-slide-prev');
                    $(this).addClass('swiper-slide-visible swiper-slide-active');
                    $(this).next().addClass('swiper-slide-next');
                    $(this).css({'opacity': 1});
                }
            })
            
        })
    }
    addSlideInfection()

    function scrollHeader() {
        let scrollBtn = $(".header");
        let previousScroll = 0,
        navBarOrgOffset = $(".header").offset().top;
        $(".header-height").height($(".header").height());
        
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                scrollBtn.addClass("scroll");
                $('.header-burger').removeClass('open');
                $('.header').removeClass('active');
                $('main').removeClass('active');
            } else {
                scrollBtn.removeClass("scroll");
            }
            let currentScroll = $(this).scrollTop();
            //console.log(currentScroll + " and " + previousScroll + " and " + navBarOrgOffset);
            if (currentScroll > navBarOrgOffset) {
              if (currentScroll > previousScroll) {
                  scrollBtn.addClass("scroll");
              } else {
                  scrollBtn.removeClass("scroll");
              }
            } else {
              scrollBtn.removeClass("scroll");
            }
            previousScroll = currentScroll;
        });
    };
    scrollHeader();

    //Бургер меню
    function headerBurger (){
        $('.header-burger').click(function () {
            $('.header-burger').toggleClass('open');
            $('.header').toggleClass('active');
            if($('.header-burger').hasClass('open')) {
                $('main').addClass('active');
            } else {
                $('main').removeClass('active');
            }
        });
    };
    headerBurger();

    //Открытие модалок
    function modalContact() {
        $(".sign-in").click(function (e) {
            e.preventDefault();
            $(".header-sign").addClass("open");
            $('.header-burger').removeClass("open");
            $('.header').removeClass("active");
            $("main").addClass("active");
            $(".header").addClass("shadow");
            setTimeout(() => {
                $('html').addClass('hidden');  
            }, 100);
        });
    };
    modalContact();

    //Закрытие модалок
    function closeModal() {
        $('.popup-close').click(function() {
            $('.duty').removeClass('open');
        });
        $('.close-sign').click(function() {
            $(".header-sign").removeClass("open"); 
                $("main").removeClass("active");
                $(".header").removeClass("shadow");
                $('html').removeClass('hidden');  
        });
        $(document).mouseup(function (e) {
            var container = $(".header-sign");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $(".header-sign").removeClass("open"); 
                $("main").removeClass("active");
                $(".header").removeClass("shadow");
                $('html').removeClass('hidden');  
            }
        });
        $(document).mouseup(function (e) {
            var container = $(".popup-wrapper");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $(".popup").removeClass("open"); 
            }
        });
    }
    closeModal();

    // Акордеон в faq
    function accordionSupport() {
        $(".question-item-head").click(function(){
            $(this).toggleClass("open").next().slideToggle();
            $(".question-item-head").not(this).removeClass("open").next().slideUp();
        });
    };
    accordionSupport();

    // Кастомный селект
    function selectCustom() {
        $('.select-title').click(function () {
            $(this).parent().toggleClass('active');
        });
        $(document).mouseup(function (e) {
            let container = $(".select");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.select').removeClass('active');
            }
        }); 
        $('.select-item').click(function() {
            $(this).parent().parent().parent().find('.select-title p').text($(this).find('p').text());
            $(this).parent().parent().parent().find('.select-title input').val($(this).find('p').text());
            $(this).parent().parent().find('.select-item').removeClass('active');
            $(this).addClass('active');
            $('.select').removeClass('active');
        });
    }
    selectCustom();

    function quantityProduct() {
        $('.plus').click(function() {
            $(this).parent().parent().find('.quantity').val(Number($(this).parent().parent().find('.quantity').val()) + 1);
        });
        $('.minus').click(function() {
            if($(this).parent().parent().find('.quantity').val() == 1) {
                $(this).parent().parent().find('.quantity').val(1);
            } else {
                $(this).parent().parent().find('.quantity').val(Number($(this).parent().parent().find('.quantity').val()) - 1);
            }
        })
    }
    quantityProduct();

    function customCheckboxProduct() {
        $('.product-labels-exchange__button').click(function() {
            $('.product-labels-exchange__button').removeClass('active');
            $(this).addClass('active');
            if($('.product-labels-exchange__button').eq(0).hasClass('active')) {
                $(this).parent().parent().parent().find('.product-labels-exchange-inner').addClass('show');
            } else {
                $(this).parent().parent().parent().find('.product-labels-exchange-inner').removeClass('show');
            }
        })
        $('.product-labels-exchange__button').eq(1).click(function() {
            $('.product-labels-exchange-select label input').each(function() {
                $(this).prop('checked', false)
            })
        })
    }
    customCheckboxProduct()

    function productAdaptive() {
        if ($(window).width() <= 992) {
            $('.product-info').insertBefore('.product-image')
        } else {
            $('.product-info').insertBefore('.product-exchange')
        }
        $(window).resize(function () {
            if ($(window).width() <= 992) {
                $('.product-info').insertBefore('.product-image')
            } else {
                $('.product-info').insertBefore('.product-exchange')
            }
        })
    }
    productAdaptive()

    function formValidate() {
        $('#header-sign-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3,
                },
                password: {
                    required: true,
                    minlength: 6,
                }
            },
            messages: {
                name: {
                    minlength: "Must be at least: 3 characters"
                },
                password: {
                    minlength: "Must be at least: 6 characters"
                }
            }
        });
        $('#contact-form').validate({
            rules: {
                email: {
                    required: true,
                    minlength: 5,
                    email: true
                }
            },
            messages: {
                email: {
                    required: "Fill in the field",
                    minlength: "Must be at least: 5 characters"
                }
            }
        });
        $('#register-form').validate({
            rules: {
                login: {
                    required: true,
                    minlength: 3,
                },
                email: {
                    required: true,
                    minlength: 5,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 6,
                },
                repeatPassword: {
                    required: true,
                    minlength: 6,
                },
            },
            messages: {
                login: {
                    required: "Fill in the field",
                    minlength: "Must be at least: 3 characters"
                },
                email: {
                    required: "Fill in the field",
                    minlength: "Must be at least: 5 characters"
                },
                password: {
                    required: "Fill in the field",
                    minlength: "Must be at least: 6 characters"
                },
                repeatPassword: {
                    required: "Fill in the field",
                    minlength: "Must be at least: 6 characters"
                }
            }
        });
        $('#contactPage-form').validate({
            rules: {
                firstName: {
                    required: true,
                    minlength: 2,
                },
                lastName: {
                    required: true,
                    minlength: 4,
                },
                phone: {
                    required: true,
                    minlength: 4,
                },
                country: {
                    required: true,
                    minlength: 2,
                },
                email: {
                    required: true,
                    minlength: 2,
                    email: true,
                },
                message: {
                    required: true,
                    minlength: 10
                },
                
            },
            messages: {
                firstName: {
                    required: "Fill in the field",
                    minlength: "Must be at least: 2 characters"
                },
                lastName: {
                    required: "Fill in the field",
                    minlength: "Must be at least: 4 characters"
                },
                phone: {
                    required: "Fill in the field",
                    minlength: "Must be at least: 4 characters"
                },
                country: {
                    required: "Fill in the field",
                    minlength: "Must be at least: 2 characters"
                },
                email: {
                    required: "Fill in the field",
                    minlength: "Must be at least: 2 characters"
                },
                message: {
                    required: "Fill in the field",
                    minlength: "Must be at least: 10 characters"
                }
            }
        });
    };
    formValidate();   
    
});
