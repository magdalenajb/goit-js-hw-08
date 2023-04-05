import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {});

const time = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(time)
  .then(function (seconds) {
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

player.on('timeupdate', throttle(() => {
 player.getCurrentTime()
 .then(function (seconds) {
 console.log(seconds);
 localStorage.setItem('videoplayer-current-time', seconds);
     })
}, 1000));

