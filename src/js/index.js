import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../scss/style.css';


let repairBlockReadMore = document.querySelector('.repair-block__read-more-button');
let repairBlock = document.querySelector('.repair-block__description');
let repairBlockReadMoreText = document.querySelector('.repair-block__read-more-button .read-more-button__text');
let repairBlockReadMoreImg = document.querySelector('.repair-block__read-more-button .read-more-button__image');

let brandsSwiper = null;
const repairBrandsButton = document.querySelector('.repair-brands .read-more-button');
const repairBrandsButtonText = document.querySelector('.repair-brands .read-more-button__text');
const repairBrandsButtonImage = document.querySelector('.repair-brands .read-more-button__image');
const repairBrandsSwiperWrapper = document.querySelector('.repair-brands__wrapper');

let technicsSwiper = null;
const technicsButton = document.querySelector('.different-technics .read-more-button');
const technicsButtonText = document.querySelector('.different-technics .read-more-button__text');
const technicsButtonImage = document.querySelector('.different-technics .read-more-button__image');
const technicsSwiperWrapper = document.querySelector('.different-technics__wrapper');

let pricesSwiper = null;
const sideMenu = document.querySelector('.side-menu');
const closeMenu = document.querySelector('.button--close-menu');
const openMenu = document.querySelector('.button--open-menu');
const callbackOpenButton = document.querySelectorAll('.button--call');
const callbackCloseButton = document.querySelector('.button--close-callback');
const callbackModal = document.querySelector('.callback');
const feedbackOpenButton = document.querySelectorAll('.button--feedback');
const feedbackCloseButton = document.querySelector('.button--close-feedback');
const feedbackModal = document.querySelector('.feedback');

function initBrandsSwiper() {
    brandsSwiper = new Swiper('.repair-brands__brand-list', {
        modules: [Pagination],
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.repair-brands__pagination',
            clickable: true,
            type: 'bullets'
        },
    });
}

function initTechnicsSwiper() {
    technicsSwiper = new Swiper('.different-technics__technics-list', {
        modules: [Pagination],
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.different-technics__pagination',
            clickable: true,
            type: 'bullets'
        },
    });
}

function initPricesSwiper() {
    pricesSwiper = new Swiper('.prices__price-list', {
        modules: [Pagination],
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.prices__pagination',
            clickable: true,
            type: 'bullets'
        },
    });
}

function checkSize() {
    if (window.innerWidth<768) {
        initBrandsSwiper();
        initTechnicsSwiper();
        initPricesSwiper();
    }
}

function checkRepairBlockButtonVisibility() {
    if (repairBlock.scrollHeight > repairBlock.clientHeight) {
        repairBlockReadMore.style.display = 'flex';
    } else {
        repairBlockReadMore.style.display = 'none';
    }
}

const moreVisibility = (block, buttonText, buttonImage, openedText, closedText) => {
    if (block.classList.contains('expanded')) {
        buttonText.textContent = closedText;
    } else {
        buttonText.textContent = openedText;
    }
    block.classList.toggle('expanded');
    buttonImage.classList.toggle('expanded');
};

const modalVisibility = (modal) => {
    modal.classList.toggle('open');
    document.body.classList.toggle('modal-open');
}
const closeModalByOutside = (e) => {
    if (feedbackModal.classList.contains('open') && !e.target.closest('.feedback') && !e.target.closest('.button--feedback')) {
        modalVisibility(feedbackModal);
    }
    if (callbackModal.classList.contains('open') && !e.target.closest('.callback') && !e.target.closest('.button--call')) {
        modalVisibility(callbackModal);
    }
    if (sideMenu.classList.contains('open') && !e.target.closest('.side-menu') && !e.target.closest('.button--open-menu')) {
        modalVisibility(sideMenu);
    }
};

openMenu.addEventListener('click',  () => modalVisibility(sideMenu));
closeMenu.addEventListener('click',  () => modalVisibility(sideMenu));
callbackOpenButton.forEach((button) => {
    button.addEventListener('click', () => modalVisibility(callbackModal));
});
callbackCloseButton.addEventListener('click', () => modalVisibility(callbackModal));

feedbackOpenButton.forEach((button) => {
    button.addEventListener('click', () => modalVisibility(feedbackModal));
});
feedbackCloseButton.addEventListener('click', () => modalVisibility(feedbackModal));
repairBlockReadMore.addEventListener('click', () => {
    moreVisibility(repairBlock, repairBlockReadMoreText, repairBlockReadMoreImg, 'Скрыть', 'Читать далее')
});
repairBrandsButton.addEventListener('click',  () => {
    moreVisibility(repairBrandsSwiperWrapper, repairBrandsButtonText, repairBrandsButtonImage, 'Скрыть', 'Показать все')
});
technicsButton.addEventListener('click',  () => {
    moreVisibility(technicsSwiperWrapper, technicsButtonText, technicsButtonImage, 'Скрыть', 'Показать все')
});
document.body.addEventListener('click', closeModalByOutside);
window.addEventListener('load', () => {
    checkSize();
    checkRepairBlockButtonVisibility();
});
window.addEventListener('resize',checkRepairBlockButtonVisibility);