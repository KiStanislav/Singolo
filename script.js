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
