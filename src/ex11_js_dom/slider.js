const slider = document.getElementById('slider');

const getImages = async () => {
  const response = await fetch('https://api.imgflip.com/get_memes');
  const data = await response.json();
  const memes = data.data.memes;
  let count = 0;

  for (let i = 0; i < memes.length; i++) {
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = memes[i].url;
    slider.append(image);
  }

  const first = document.querySelector('img');
  first.classList.add('active');
  const images = document.getElementsByClassName('image');
  const back = document.querySelector('.back');
  const forward = document.querySelector('.forward');

  back.addEventListener('click', () => {
    images[count].classList.remove('active');
    count--;
    if (count === -1) {
      count = images.length - 1;
    }
    images[count].classList.add('active');
  });

  forward.addEventListener('click', () => {
    images[count].classList.remove('active');
    count++;
    if (count === images.length) {
      count = 0;
    }
    images[count].classList.add('active');
  });
};

getImages();
