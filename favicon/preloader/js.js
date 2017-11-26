/*
let preoladeEl = document.querySelector('#preloader');


setTimeout(function()
          {
    preoladeEl.classList.add('preloader-hiding');
    preoladeEl.addEventListener('transitionend', function()
                               {
        this.classList.add('preloader-hidden');
        this.classList.remove('preloader-hiding');
    });
}, 3000);
*/

let preoladeEl = document.querySelector('#preloader');


window.addEventListener('load', ()=>
          {
    preoladeEl.classList.add('preloader-hiding');
    preoladeEl.addEventListener('transitionend', ()=>
                               {
        this.classList.add('preloader-hidden');
        this.classList.remove('preloader-hiding');
    });
});