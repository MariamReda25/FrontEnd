'use strict';

const btnsShowModel = document.querySelectorAll('.show-modal');
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const closeModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsShowModel.length; i++) {
  btnsShowModel[i].addEventListener('click', function () {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) closeModel();
});
