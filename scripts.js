const carouselSlide = document.querySelector('.carousel--slide');
const carouselImages = document.querySelectorAll('.carousel--slide img');

// Buttons
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translate(${(-size * counter)}px )`;

nextBtn.addEventListener('click', ()=>{
	carouselSlide.style.transition = `transform 0.4 ease-in-out`;
	counter++;
	carouselSlide.style.transform = `translate(${(-size * counter)}px )`;
})

prevBtn.addEventListener('click', ()=>{
	carouselSlide.style.transition = `transform 0.4 ease-in-out`;
	counter--;
	carouselSlide.style.transform = `translate(${(-size * counter)}px )`;
})