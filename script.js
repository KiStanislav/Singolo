// const MENU = document.getElementById('menu');

// MENU.addEventListener('click', (event) => {
//   MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
//   event.target.classList.add('active');
// });

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
 
// const list = document.getElementById('list');


// list.querySelectorAll('span');
// function flipArr(arr, i) {
//   var f = arr.slice(0, ++i),
//       s = arr.slice(i),
//       r = f.splice(-2).reverse();
//   return f.concat(r).concat(s);
// }
// console.log('.portfolio-image');

// flipArr();
function random() {
  let item1 = document.getElementById("item-1");
  let item12 = document.getElementById("item-12");
  let rel = item1.src;
  item1.src = item12.src;
  item12.src = rel;
}

random();

//Замена картинок на es6

// const btn = document.querySelector('[type="button"]');
// const [ pic1, pic2 ] = document.querySelectorAll('[name="pic"]');

// btn.addEventListener('click', () => [ pic1.src, pic2.src ] = [ pic2.src, pic1.src ]);
// <form name="form1">
//    <img name="pic" src="https://dabeng.github.io/img/angularjs.png" alt="">
//    <img name="pic" src="http://icons.iconarchive.com/icons/sicons/basic-round-social/256/ember-js-icon.png" alt="">
//    <input type="button" value="Кнопка кнопка">
// </form>


//Рандом из определенных чисел

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}