// Подключение js-файлов с помощью rigger-а
// Modules
'use strict';

(function () {
  var player = videojs('my-video');
  var stop = document.querySelector('.stop');
  console.log(player);
  stop.addEventListener('click', function () {
    player.pause();
  });
  setTimeout(function () {
    player.pause();
  }, 5000);
})();