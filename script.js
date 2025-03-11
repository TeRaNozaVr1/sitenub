document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".gallery-track");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;
    const slides = document.querySelectorAll(".gallery-item");
    const totalSlides = slides.length;
    const visibleSlides = 3; // Видно 3 фото, 2 сховані

    function updateGallery() {
        track.style.transform = `translateX(-${index * (100 / visibleSlides)}%)`;
    }

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % (totalSlides - (visibleSlides - 1)); // Обмежуємо, щоб не було пустого простору
        updateGallery();
    });

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + (totalSlides - (visibleSlides - 1))) % (totalSlides - (visibleSlides - 1));
        updateGallery();
    });

    // Автоматичне гортання кожні 3 секунди
    setInterval(() => {
        index = (index + 1) % (totalSlides - (visibleSlides - 1));
        updateGallery();
    }, 3000);
});


    // Імпортуємо стилі через JS (якщо вони не підключаються автоматично)
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "styles.css"; // Шлях до твого CSS файлу
    document.head.appendChild(link);

    // Функція для відкриття/закриття меню
    function toggleMenu() {
        const menu = document.querySelector(".menu");
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    }

