document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".about-photo");
    const image = container.querySelector("img");

    // Створюємо "лупу"
    const magnifier = document.createElement("div");
    magnifier.classList.add("magnifier");
    container.appendChild(magnifier);

    container.addEventListener("mousemove", function (e) {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        // Переміщуємо "лупу"
        magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
        magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;

        // Відображаємо збільшену частину фото
        magnifier.style.backgroundImage = `url(${image.src})`;
        magnifier.style.backgroundSize = "400%";
        magnifier.style.backgroundPosition = `${(x / width) * 100}% ${(y / height) * 100}%`;

        // Плавна поява лупи
        magnifier.style.opacity = "1";
        magnifier.style.transform = "scale(1)";
    });

    container.addEventListener("mouseleave", function () {
        // Плавне зникнення лупи
        magnifier.style.opacity = "0";
        magnifier.style.transform = "scale(0.8)";
    });
});

