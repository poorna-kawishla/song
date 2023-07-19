const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

let startX;
let endX;

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !bar.contains(e.target)) {
    nav.classList.remove('active');
  } else {
    startX = undefined;
    endX = undefined;
  }
});

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchmove', (e) => {
  if (startX !== undefined) {
    endX = e.touches[0].clientX;
  }
});

document.addEventListener('touchend', () => {
  if (startX !== undefined && endX !== undefined) {
    const diffX = startX - endX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    }
    startX = undefined;
    endX = undefined;
  }
});