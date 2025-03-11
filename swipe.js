document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".gallery-track");
    const items = document.querySelectorAll(".gallery-item");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;
    let autoScroll;
    const scrollTime = 3000; // Інтервал автопрокрутки
    const visibleImages = 3; // Кількість видимих фото

    function updateGallery() {
        const offset = -index * (100 / visibleImages); // Зміщення
        track.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        if (index < items.length - visibleImages) {
            index++;
        } else {
            index = 0; // Почати спочатку
        }
        updateGallery();
    }

    function prevSlide() {
        if (index > 0) {
            index--;
        } else {
            index = items.length - visibleImages;
        }
        updateGallery();
    }

    function startAutoScroll() {
        autoScroll = setInterval(nextSlide, scrollTime);
    }

    function stopAutoScroll() {
        clearInterval(autoScroll);
    }

    // Запуск автопрокрутки
    startAutoScroll();

    // Кнопки навігації
    prevBtn.addEventListener("click", function () {
        prevSlide();
        stopAutoScroll();
        startAutoScroll();
    });

    nextBtn.addEventListener("click", function () {
        nextSlide();
        stopAutoScroll();
        startAutoScroll();
    });

    // Зупинка при наведенні або натисканні на фото
    track.addEventListener("mouseenter", stopAutoScroll);
    track.addEventListener("mouseleave", startAutoScroll);

    // Додавання нових фото (якщо потрібно)
    function addImage(src, alt) {
        const newItem = document.createElement("div");
        newItem.classList.add("gallery-item");
        newItem.innerHTML = `<img src="${src}" alt="${alt}">`;
        track.appendChild(newItem);
    }

    // Приклад додавання нового фото через JS
    // addImage("img/new_photo.jpg", "Нове фото");
});

