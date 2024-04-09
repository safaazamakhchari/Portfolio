document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('menu');
    menu.addEventListener('click', function() {
        this.classList.toggle('fa-times');
        document.querySelector('header').classList.toggle('toggle');
    });

   window.addEventListener('load', function() {
        menu.classList.toggle('fa-times');
        document.querySelector('header').classList.toggle('toggle');
    });})
