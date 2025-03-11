document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        let preloader = document.querySelector(".preloader");
        let header = document.querySelector(".header");

        if (preloader) {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
                if (header) header.style.opacity = "1";
            }, 1000);
        }
    }, 2000);
});