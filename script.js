//interactive navigation menu
document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  const ancher_block = document.querySelectorAll('#body>div, section');
  const links = document.querySelectorAll('#menu a');
  ancher_block.forEach((el) => {
    if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
      links.forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active');
        }
      })
    }
  });
}

// interactive tab menu
const TAB = document.getElementById('tab');

TAB.addEventListener('click', (event) => {
  TAB.querySelectorAll('span').forEach(el => el.classList.remove('tag_selected'));
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
  nodes = Array.prototype.slice.call(nodes);
  nodes = shuffle(nodes);
  while(i < nodes.length) {
    list.appendChild(nodes[i]);
    ++i;
    }
};

//slider
// let offset = -3063; 
const images = document.querySelectorAll('.slider-line img');
const sliderLine = document.querySelector('.slider .slider-line ');
let count = 0;
let width;

function init() {
  // console.log('resize');
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

// document.querySelector('.arrow-left').addEventListener('click', function() {
//   offset = offset - 1021; 
//   if (offset < -6126){
//     offset = -3063;
//   }
//   sliderline.style.left = offset + 'px';
//   rollSlider()
// });

// document.querySelector('.arrow-right').addEventListener('click', function() {
//   offset = offset + 1021; 
//   if (offset > 0){
//     offset = -3063;
//   }
//   sliderline.style.left = offset + 'px';
//   rollSlider()
// });

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