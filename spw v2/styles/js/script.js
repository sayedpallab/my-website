const btnhamburger = document.querySelector('#btnhamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.fade-an');
btnhamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){ 
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        });
       
    }
    else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){ 
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
       
        
    }
    
});

