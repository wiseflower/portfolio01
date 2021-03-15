const navCurtain = document.querySelector('.curtain');

document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navCurtain.classList.toggle('active');
}

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});