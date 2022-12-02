document.addEventListener('DOMContentLoaded', () => {
  const views = document.querySelectorAll('.view');
  const body = document.querySelector('body');
  let btn1 = document.querySelector('#btn1');
  let btn2 = document.querySelector('#btn2');
  let btn3 = document.querySelector('#btn3');
  let btn4 = document.querySelector('#btn4');
  let btn5 = document.querySelector('#btn5');
  let btn6 = document.querySelector('#btn6');
  let btn7 = document.querySelector('#btn7');

  views[0].classList.add('is-active');

  btn1.addEventListener('click', (e) => {
    e.preventDefault();
    views[0].classList.remove('is-active');
    views[1].classList.add('is-active');
  });

  btn2.addEventListener('click', (e) => {
    e.preventDefault();
    views[1].classList.remove('is-active');
    views[2].classList.add('is-active');
  });

  btn3.addEventListener('click', (e) => {
    e.preventDefault();
    views[2].classList.remove('is-active');
    views[3].classList.add('is-active');
    body.style.backgroundColor = '#EEEEEE';
  });

  btn4.addEventListener('click', (e) => {
    e.preventDefault();
    body.style.backgroundColor = '#3E4557';
    views[3].classList.remove('is-active');
    views[4].classList.add('is-active');
  });

  btn4.addEventListener('click', (e) => {
    e.preventDefault();
    views[3].classList.remove('is-active');
    views[4].classList.add('is-active');
  });

  btn5.addEventListener('click', (e) => {
    e.preventDefault();
    views[4].classList.remove('is-active');
    views[5].classList.add('is-active');
  });

  btn6.addEventListener('click', (e) => {
    e.preventDefault();
    views[5].classList.remove('is-active');
    views[6].classList.add('is-active');
  });

  btn7.addEventListener('click', (e) => {
    e.preventDefault();
    views[6].classList.remove('is-active');
    views[0].classList.add('is-active');
  });

});