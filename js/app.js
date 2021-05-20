// Слайдер
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Модальное окно
  const btnShow = document.querySelectorAll('.show');
  const btnClose = document.querySelector('.close');
  const modal = document.querySelector('.modal-bg');
  btnShow.forEach(item => {
    item.addEventListener('click', function() {
      modal.style.display = 'block'
    })
  });
  btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Map
  ymaps.ready(init);
  function init() {
      var myMap = new ymaps.Map("map", {
          center: [55.755819, 37.617644],
          zoom: 9,
          controls: [
              'zoomControl',  
              'fullscreenControl', 
              'geolocationControl',
          ]
      });
      var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
          hintContent: 'Мы здесь',
          balloonContent: 'Москва'
      });
      myMap.geoObjects.add(myPlacemark);
  }

  // Zoom фотогалереи
  const images = document.querySelectorAll('.img');
  const zoomImg = document.querySelector('#zoom-img');
  const modalImg = document.querySelector('.modal-img');
  const closeImg = document.querySelector('.close-img');
  images.forEach( function(item, index) {
    item.addEventListener('click', function() {
      modalImg.style.display = 'block';
      zoomImg.src =`img/image${index+1}full.jpg`;
    })
  });
  closeImg.addEventListener('click', () => {
    modalImg.style.display = 'none';
  })

  // Меню-бургер 
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header-menu');
  burger.addEventListener('click', () => {
    if (menu.style.display == 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
    
  })



  
    