$(document).ready(function(){
$('.slider').slick({
 arrows:false,
 dots:true,
 appendDots:'.dots',
 dotsClass:'dot'
});

let lines=document.querySelector('.lines');
let close=document.querySelector('.close');
let mobilenav=document.querySelector('.mobile-nav');
let home=document.querySelector('.home');
let about=document.querySelector('.about');
let serv=document.querySelector('.serv');
let hire=document.querySelector('.hire');
let work=document.querySelector('.work');

lines.addEventListener('click', function(){
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
});