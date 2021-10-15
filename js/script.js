$(document).ready(function () {

    // Параллакс эффект
    $(window).scroll(function (event) {
            var s = $(this).scrollTop();
            var w = $(this).outerWidth();
            var h = $('.content').outerHeight();
            var h_b = $('.parallax').outerHeight();
            var p = s / h * 100;
            var p_b = s / h_b * 100;
            var o = 1 - 1 / 100 * p_b;
            
            var z_1 = 1 + (w / 10000 * p_b);
        $('.parallax__fog').css('transform', 'scale(' + z_1 + ')');
        $('.parallax__fog').css('opacity', o);

            var z_2 = 1 + (w / 5000000 * p);
        $('.parallax__mountain_1').css('transform', 'scale(' + z_2 + ')');

            var hr = w / 2000 * p_b;
            var z_3 = 1 + (w * 0.000005 * p_b);
        $('.parallax__mountain_2').css('transform', 'translate3d(' + hr + 'px,0,0) scale(' + z_3 + ')');
        
            var hr_2 = w / 1500 * p_b;
            var z_4 = 1 + (w * 0.00001 * p_b);
        $('.parallax__mountain_3').css('transform', 'translate3d('+hr_2+'px,0,0) scale(' + z_4 + ')');

    
    });

    // Добавить плавную прокрутку до всех ссылок
        $("a").on('click', function (event) {

            // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
            if (this.hash !== "") {
                // Запретить поведение щелчка якоря по умолчанию
                event.preventDefault();

                // Хранить хэш
                var hash = this.hash;

                // Использование метода animate() jQuery для добавления плавной прокрутки страницы
                // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
                    window.location.hash = hash;
                });
            } // Конец, если
        });
    
    // Нижняя стрелка для прокрутки вверх
    $(function () {
            // при нажатии на кнопку scrollup
            $('.scrollup').click(function () {
                // переместиться в верхнюю часть страницы
                $("html, body").animate({
                    scrollTop: 0
                }, 1000);
            })
        })
        // при прокрутке окна (window)
        $(window).scroll(function () {
            // если пользователь прокрутил страницу более чем на 200px
            if ($(this).scrollTop() > 800) {
                // то сделать кнопку scrollup видимой
                $('.scrollup').fadeIn();
            }
            // иначе скрыть кнопку scrollup
            else {
                $('.scrollup').fadeOut();
            }
        });    
    
});