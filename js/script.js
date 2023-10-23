let text = anime({
    targets: '.el',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i, l) {
        return i * anime.random(0, 2000);
    },
    // loop: true,
    // autoplay: false
});

let backgroundColorText = anime({
    targets: '.el',
    fill: '#0033A0',
    easing: 'easeInOutSine',
    delay: 2200
});

let lineR = anime({
    targets: '.line-r',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 800,
    delay: 2200
});
let lineL = anime({
    targets: '.line-l',
    strokeDashoffset: [-320, 0],
    easing: 'easeInOutSine',
    duration: 800,
    delay: 2200
});