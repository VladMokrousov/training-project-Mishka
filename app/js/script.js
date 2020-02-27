window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    //Open-close menu
    let navMain = document.querySelector('.main-nav'),
        navToggle = document.querySelector('.main-nav__toggle');
        navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', function(){
        if (navMain.classList.contains('main-nav--closed')) {
            navMain.classList.remove('main-nav--closed');
            navMain.classList.add('main-nav--opened');
        } else {
            navMain.classList.add('main-nav--closed');
            navMain.classList.remove('main-nav--opened');
        }
    });
    //Modal window
    let orderBtn = document.querySelectorAll('.button--order'),
        modalCart = document.querySelector('.modal-cart'),
        overlay = document.querySelector('.overlay');

    for (let i = 0; i < orderBtn.length; i++) {
        orderBtn[i].addEventListener('click', function(){
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
        });
    }
   
   
    $('.overlay').click( function(e){
        if ( $(e.target).closest('.modal-cart').length ) {
            // клик внутри элемента 
            return;
        }
        // клик снаружи элемента 
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    });


});