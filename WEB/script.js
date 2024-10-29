const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

const totalSlides = slides.length;

function showSlide(index) {
    const offset = index * 100;
    slider.style.transform = `translateX(-${offset}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});


showSlide(currentIndex);


const preorderSlider = document.querySelector('.preorder-slider');
const preorderSlides = document.querySelectorAll('.preorder-slide');
let preorderIndex = 0;

function showPreorderSlide(index) {
    const offset = index * 100;
    preorderSlider.style.transform = `translateX(-${offset}%)`;
}

document.querySelector('.preorder-prev').addEventListener('click', () => {
    preorderIndex = (preorderIndex === 0) ? preorderSlides.length - 1 : preorderIndex - 1;
    showPreorderSlide(preorderIndex);
});

document.querySelector('.preorder-next').addEventListener('click', () => {
    preorderIndex = (preorderIndex === preorderSlides.length - 1) ? 0 : preorderIndex + 1;
    showPreorderSlide(preorderIndex);
});

showPreorderSlide(preorderIndex);




document.getElementById("catalog-button").addEventListener("click", function(event) {
    event.stopPropagation();
    var dropdownMenu = document.getElementById("dropdown-menu");

    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
        this.classList.remove("active"); 
    } else {
        dropdownMenu.style.display = "block";
        this.classList.add("active"); 
    }
});

window.onclick = function(event) {
    var dropdownMenu = document.getElementById("dropdown-menu");
    if (event.target !== document.getElementById("catalog-button")) {
        dropdownMenu.style.display = "none";
        document.getElementById("catalog-button").classList.remove("active"); 
    }
};


function toggleMenu() {
    const mobileNav = document.getElementById("mobileNav");
    mobileNav.classList.toggle("show");
}

document.querySelector(".burger-btn").addEventListener("click", function() {
    document.querySelector(".burger-menu").classList.toggle("active");
});