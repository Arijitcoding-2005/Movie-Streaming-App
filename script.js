const section = document.getElementById('movieSection');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

function updateButtons() {
  const scrollLeft = section.scrollLeft;
  const scrollWidth = section.scrollWidth;
  const clientWidth = section.clientWidth;

  // Hide left button if at the start
  leftBtn.style.display = scrollLeft <= 0 ? 'none' : 'block';

  // Hide right button if at the end
  rightBtn.style.display = scrollLeft + clientWidth >= scrollWidth ? 'none' : 'block';
}

function scrollToLeft() {
  section.scrollBy({
    left: -300,
    behavior: 'smooth',
  });
  console.log(updateButtons, 7000); // Delay to wait for smooth scroll
}

function scrollToRight() {
  section.scrollBy({
    left: 300,
    behavior: 'smooth',
  });
  setTimeout(updateButtons, 7000);
}

// Bind functions to window for inline onclick
window.scrollLeft = scrollToLeft;
window.scrollRight = scrollToRight;

// Also update buttons on scroll
section.addEventListener('scroll', updateButtons);

// Initial check
updateButtons();

const suggestionSection = document.getElementById('Suggestion');
const leftBtnSuggestion = document.getElementById('left');
const rightBtnSuggestion = document.getElementById('right');

function updateSuggestionButtons() {
  const scrollLeft = suggestionSection.scrollLeft;
  const scrollWidth = suggestionSection.scrollWidth;
  const clientWidth = suggestionSection.clientWidth;

  leftBtnSuggestion.style.display = scrollLeft <= 0 ? 'none' : 'block';
  rightBtnSuggestion.style.display = scrollLeft + clientWidth >= scrollWidth ? 'none' : 'block';
}

function scrollLeftSuggestion() {
  suggestionSection.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
  setTimeout(updateSuggestionButtons, 7000);
}

function scrollRightSuggestion() {
  suggestionSection.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
  setTimeout(updateSuggestionButtons, 7000);
}


window.scrollLeftSuggestion = scrollLeftSuggestion;
window.scrollRightSuggestion = scrollRightSuggestion;
suggestionSection.addEventListener('scroll', updateSuggestionButtons);
updateSuggestionButtons();


const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 7000);


// const slides1 = document.querySelectorAll('.hero-slider .slide');
const btnLeft = document.querySelector('.hero-scroll-btn.left');
const btnRight = document.querySelector('.hero-scroll-btn.right');
const dots = document.querySelectorAll('.dots-container .dot');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

btnRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

btnLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

