/*
document.addEventListener("DOMContentLoaded", function(event) { 
	const modal = document.querySelector('.modal');
	const modalBtn = document.querySelectorAll('[data-toggle=modal]');
	const switchModal = () => {
		modal.classList.toggle('modal--visible');
	}
	const closeBtn = document.querySelector('.modal__close')

	modalBtn.forEach(element => {
		element.addEventListener('click', switchModal);
	});
	closeBtn.addEventListener('click', switchModal);
});
*/


$(document).ready(function () {
	var modal = $('.modal'),
			modalBtn = $('[data-toggle=modal]'),
			closeBtn = $('.modal__close');
	modalBtn.on('click', function () {
		modal.toggleClass('modal--visible');
	});
	closeBtn.on('click', function () {
		modal.toggleClass('modal--visible');
	});

	//initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	var next = $('.swiper-button-next');
	var prev = $('.swiper-button-prev');
	var bullets = $('.swiper-pagination');

	next.css('left', prev.width() + 10 + bullets.width() + 10)
	bullets.css('left', prev.width() + 10)

	new WOW().init();

	//Валидация формы
	$('.modal__form').validate({
		errorClass: "invalid",
		rules: {
			userName: {
				required: true,
				minlength: 4
			}, //обязателбное поле имя
			userPhone: "required",
			userEmail: {
				required: true,
				email: true,
			}
		},
		messages: {
			userName: {
				required: "Имя обязательно",
				minlength: "Имя не короче 4-х букв"
			},
			userPhone: "Телефон обязателен",
			userEmail: {
				required: "Обязательно введите Email",
				email: "Введите в формате: name@domain.com"
			}
		}
	});
	//маска для телефона
	$('[type=tel').mask('+7(000) 00-00-00', {placeholder: "+7(___) __-__-___"});

	//создание Яндекс.Карты
	ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
	});
});
