   // Динамічне перемикання активної мови
   document.querySelectorAll(".lang-switcher span").forEach(span => {
    span.addEventListener("click", function () {
        document.querySelectorAll(".lang-switcher span").forEach(s => s.classList.remove("active"));
        this.classList.add("active");

        if (this.id === "en-lang") {
            // Перевести на англійську версію
            window.location.href = "index-en.html"; // Замість цього використовуйте шлях до англійської версії сторінки
        } else if (this.id === "ua-lang") {
            // Перевести на українську версію
            window.location.href = "index-ua.html"; // Це ваша поточна українська версія
        }
    });
});
