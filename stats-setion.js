// Лічильник для кожного елемента статистики
const counters = document.querySelectorAll('.stat-item h2');
const duration = 3000; // 5 секунд

// Функція, яка виконується, коли елемент стає видимим
const countNumbers = (counter) => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target'); // Отримуємо цільову цифру
        const start = 0; // Початкова цифра
        const range = target - start; // Різниця між цільовим і початковим значенням
        const stepTime = Math.abs(Math.floor(duration / range)); // Визначаємо час між інкрементами

        let currentCount = start;
        const timer = setInterval(() => {
            currentCount += 1;
            counter.innerText = currentCount;

            if (currentCount === target) {
                clearInterval(timer); // Якщо досягнуто ціль, зупиняємо таймер
            }
        }, stepTime);
    };

    // Ініціалізація лічильника
    counter.innerText = '0'; // Початкове значення
    setTimeout(updateCount, 200); // Починаємо після затримки
};

// Використовуємо IntersectionObserver для відслідковування видимості секції
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Якщо секція стає видимою, запускаємо лічильники для цифр
            counters.forEach(counter => countNumbers(counter));
            observer.disconnect(); // Вимикаємо спостереження, щоб лічильники запустилися тільки один раз
        }
    });
}, { threshold: 0.5 }); // Активуємо, коли 50% секції стає видимим

// Спостерігаємо за секцією, яка містить лічильники
const statsSection = document.querySelector('.stats-section');
observer.observe(statsSection);

