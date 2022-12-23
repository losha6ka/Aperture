let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header__spisok');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});
$(document).ready(function () {
	$(".menu-btn").click(function (event) {
		$('body').toggleClass('lock');
	});
});
$(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top < 25) $(".header__container").removeClass('fixed');
	else $(".header__container").addClass('fixed');
});
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('show');
		}
	});
}
let options = {
	threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.what__title,.what__subtitle,.what__item,.fuji__title,.fuji__text,.studios__time,.studios__map,.studios__iso,.studios__version,.cage__subtitle,.cage__title,.cage__text,.cage__action,.clients__title,.clients__subtitle,.clients__item-img,.helper__title,.helper__subtitle,.helper__action,.top-footer__text,.top-footer__logo,.menu-top-footer__list,.menu-top-footer__title,.mid-footer,.mid-footer__title,.mid-footer__subtitle,.mid-footer__form,.bottom-footer__copyrite,.bottom-footer__link');
for (let elm of elements) {
	observer.observe(elm);
};