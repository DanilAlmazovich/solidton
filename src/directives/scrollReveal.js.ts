export default {
    mounted(el, binding) {
        const options = {
            root: null, // Следим за всей страницей
            threshold: binding.value?.threshold || 0.2, // Часть элемента, которая должна быть видна (по умолчанию 20%)
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.add('opacity-100', 'translate-y-0'); // Применяем анимацию
                    el.classList.remove('opacity-0', 'translate-y-10');
                    observer.unobserve(el); // Отключаем слежку после появления
                }
            });
        }, options);

        // Начальное состояние элемента (он скрыт)
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-in-out');

        observer.observe(el);
    }
};