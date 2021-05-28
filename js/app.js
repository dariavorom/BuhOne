window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}



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
  const menu = document.querySelector('.nav-bottom');
  burger.addEventListener('click', () => {
    if (menu.style.height === '150px' && menu.style.opacity === '1') {
      menu.style.height = '0';
      menu.style.opacity = '0';
    } else {
      menu.style.height = '150px';
      menu.style.opacity = '1';
    }
  });


//Ленивая загрузка

const lazyImages = document.querySelectorAll('img[data-src]');
const windowHeight = document.documentElement.clientHeight;
let lazeImagesPositions = [];
if (lazyImages.length > 0) {
  lazyImages.forEach(img => {
    if (img.dataset.src ) {
      lazeImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
      lazyScrollCheck();
    }
  });
}

window.addEventListener('scroll', lazyScroll);

function lazyScroll () {
  if (document.querySelectorAll('img[data-src]').length) {
    lazyScrollCheck();
  }
}

function lazyScrollCheck () {
  let imgIndex = lazeImagesPositions.findIndex(
    item => pageYOffset > item - windowHeight
  );
  console.log(imgIndex)
  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      console.log(lazyImages)
      lazyImages[imgIndex].removeAttribute('data-src');
    }
    delete lazeImagesPositions[imgIndex];
  }
}



  
    