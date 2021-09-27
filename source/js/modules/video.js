'use strict';

(function () {
    const player = videojs('my-video');
    const stop = document.querySelector('.stop');
    console.log(player);
    stop.addEventListener('click',function(){
        player.pause();
    })
    setTimeout(function(){
        player.pause();
    } , 5000);
})();

