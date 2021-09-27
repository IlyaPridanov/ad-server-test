'use strict';

(function () {
    const player = videojs('my-video');
    const stop = document.querySelector('.stop');
    const popup = document.querySelector('.popup');
    const form = document.querySelector('.popup__form');
    const input = document.querySelector('.popup__input');

    let flag = true;

    form.addEventListener('submit',function(e) {
        e.preventDefault();
        if (input.checkValidity()) {
            player.play();
            popup.classList.add('inactive');
        }
    })

    player.on('play', function() {
        if (flag) {
            setTimeout(function(){
                player.pause();
                popup.classList.remove('inactive');
            } , 5000);
            flag = false;
        }
    });
})();

