import createAnimatedSlider from './animated-slider';

let reviewsList = {
    container: document.getElementById('reviews-container'),
    list: document.getElementById('reviews-list'),
    items: document.getElementsByClassName('reviews__review'),
    leftButton: document.getElementById('reviews-container__button-left'),
    rightButton: document.getElementById('reviews-container__button-right')
}

createAnimatedSlider(reviewsList);