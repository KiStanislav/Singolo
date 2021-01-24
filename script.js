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
let offset = -3063; 
const sliderline = document.querySelector('.slider-line');

document.querySelector('.arrow-left').addEventListener('click', function() {
  offset = offset - 1021; 
  if (offset < -6126){
    offset = -3063;
  }
  sliderline.style.left = offset + 'px';
});

document.querySelector('.arrow-right').addEventListener('click', function() {
  offset = offset + 1021; 
  if (offset > 0){
    offset = -3063;
  }
  sliderline.style.left = offset + 'px';
});
