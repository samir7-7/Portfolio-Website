$(document).ready(function(){
    // $('.slider').slick({
    // arrows:false,
    // dots:true,
    // appendDots:'.dots',
    // dotsClass:'dot'
    // });

    let line=document.querySelector('.lines');
    let times=document.querySelector('.times');
    let mobilenav=document.querySelector('.mobile-nav');
    let close=document.querySelector('.close');
    let home=document.querySelector('.home');
    let about=document.querySelector('.about');
    let serv=document.querySelector('.serv');
    let hire=document.querySelector('.hire');
    let work=document.querySelector('.works');

    line.addEventListener('click', function(){
    mobilenav.classList.add('open');
    });

    close.addEventListener('click', function(){
        mobilenav.classList.remove('open');
    });
    home.addEventListener('click', function(){
        mobilenav.classList.remove('open');
    });
    about.addEventListener('click', function(){
        mobilenav.classList.remove('open');
    });
    serv.addEventListener('click', function(){
        mobilenav.classList.remove('open');
    });
    hire.addEventListener('click', function(){
        mobilenav.classList.remove('open');
    });
    work.addEventListener('click', function(){
        mobilenav.classList.remove('open');


    });

    // let hamberger = document.querySelector('.lines')

    });