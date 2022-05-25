/* eslint-disable prefer-rest-params */
/* eslint-disable no-return-assign */
function debounce(cb, delay) {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    isCooldown = true;
    setTimeout(() => {
      isCooldown = false;
      cb.apply(this, arguments);
    }, delay);
  };
}

const input = document.querySelector('input');
const text = document.getElementById('text');

input.oninput = debounce((event) => {
  text.innerHTML = event.target.value;
}, 1000);
