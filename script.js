const arrayImg = ['./img/first.jpg', './img/second.jpg', './img/thirth.jpg'];
const arrayName = ['Ella Smith', 'Van Dark', 'Bella Stone'];
const arrayProf = ['WEB DEVELOPER', 'JAVA DEVELOPER', 'PROJECT MANAGER'];

const right = document.querySelector('.right');
const left = document.querySelector('.left');

const names = document.querySelector('.name');
const prof = document.querySelector('.prof');
const ava = document.querySelector('.ava');

let counter = 0;

ava.src = arrayImg[0];
names.innerHTML = arrayName[0];
prof.innerHTML = arrayProf[0];

right.addEventListener('click', () => {
    if(counter < arrayName.length - 1) {
        counter++;
        ava.src = arrayImg[counter];
        names.innerHTML = arrayName[counter];
        prof.innerHTML = arrayProf[counter];
    } else {
        counter = arrayName.length - 1;
        ava.src = arrayImg[counter];
        names.innerHTML = arrayName[counter];
        prof.innerHTML = arrayProf[counter];
    }
})
left.addEventListener('click', () => {
    if(counter <= 0) {
        counter = 0;
        ava.src = arrayImg[counter];
        names.innerHTML = arrayName[counter]
        prof.innerHTML = arrayProf[counter];
    } else if(counter < arrayName.length) {
        counter--;
        ava.src = arrayImg[counter];
        names.innerHTML = arrayName[counter];
        prof.innerHTML = arrayProf[counter];
    }
})