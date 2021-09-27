// Подключение js-файлов с помощью rigger-а
// Modules
'use strict';

(function () {
  var player = videojs('my-video');
  var stop = document.querySelector('.stop');
  var popup = document.querySelector('.popup');
  var form = document.querySelector('.popup__form');
  var input = document.querySelector('.popup__input');
  var flag = true;
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (input.checkValidity()) {
      player.play();
      popup.classList.add('inactive');
    }
  });
  player.on('play', function () {
    if (flag) {
      setTimeout(function () {
        player.pause();
        popup.classList.remove('inactive');
      }, 5000);
      flag = false;
    }
  });
})();