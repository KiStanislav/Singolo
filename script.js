//interactive navigation menu
const ancherBlock = document.querySelectorAll('#body > div');
const links = document.querySelectorAll('#menu a');
const linksBurger = document.querySelectorAll('#menu-burger a');
document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  ancherBlock.forEach((el) => {
    if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
      links.forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active');
        }
      })
      linksBurger.forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active');
        }
      })
    }
  });
}

// interactive tab menu
const tab = document.getElementById('tab');

tab.addEventListener('click', (event) => {
  tab.querySelectorAll('.tag_selected').forEach(el => el.classList.remove('tag_selected'));
  event.target.classList.add('tag_selected');
  shuffleNodes();
});

//shuffle tab menu
let list = document.getElementById("list");

function shuffle(items) {
  let cached = items.slice(0), temp, i = cached.length, rand;
    while(--i) {
      rand = Math.floor(i * Math.random());
      temp = cached[rand];
      cached[rand] = cached[i];
      cached[i] = temp;
    }
    return cached;
};

function shuffleNodes() {
  let nodes = list.children, i = 0;
  nodes = Array.prototype.slice.call(list.children);
  nodes = shuffle(nodes);
  while(i < nodes.length) {
    list.appendChild(nodes[i]);
    ++i;
    }
};

//slider
const images = document.querySelectorAll('.slider-line img');
const sliderLine = document.querySelector('.slider .slider-line ');
let count = 4;
let width;

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
  });
  rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.arrow-left').addEventListener('click', function () {
  count++;
  if (count >= images.length ) {
      count = 0;
  }
  rollSlider();
});

document.querySelector('.arrow-right').addEventListener('click', function () {
  count--;
  if (count < 0) {
      count = images.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

//hamburger-menu
const burger = document.querySelector('.hamburger');
const burgerMenu = document.querySelector('.navigation-hamburger');
const logo = document.querySelector('.logo-center');
const lock = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle('hamburger-rotate');
  burgerMenu.classList.toggle('burger-menu');
  logo.classList.toggle('logo_burger');
  lock.classList.toggle('lock');
})

burgerMenu.addEventListener('click', () => {
  burger.classList.remove('hamburger-rotate');
  burgerMenu.classList.remove('burger-menu');
  logo.classList.remove('logo_burger');
  lock.classList.remove('lock');

})