'use strict'

const zipCodeInput = document.querySelector('.header__schedule_zip-input');

const scheduleList = document.querySelector('.header__schedule_list');
const scheduleListText = document.querySelector('.header__schedule_list-text');
const scheduleListItemsList = document.querySelector('.header__schedule_list-items');
const scheduleListItems = document.querySelectorAll('.header__schedule_list-item');
const scheduleListArrow = document.querySelector('.header__schedule_list-arrow');

const burgerButton = document.querySelector('.header__burger');
const navigateMenu = document.querySelector('.header__navigate_menu');
const navigateMenuItems = document.querySelectorAll('.header__navigate_menuList-item');

function burgerButtonFunction() {
  burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('open');
    navigateMenu.classList.toggle('visible');
  });

  navigateMenuItems.forEach((navigateMenuItem, index, array) => {
    navigateMenuItem.addEventListener('click', function() {
      if (navigateMenu.classList.contains('visible')) { navigateMenu.classList.remove('visible'); }
      if (burgerButton.classList.contains('open')) { burgerButton.classList.remove('open'); }
      if (!navigateMenuItem.classList.contains('selected')) { navigateMenuItem.classList.add('selected'); }
      for (let j = index - 1; j >= 0; j--) {
        if (array[j].classList.contains('selected')) { array[j].classList.remove('selected'); }
      }
      for (let k = index + 1; k < array.length; k++) {
        if (array[k].classList.contains('selected')) { array[k].classList.remove('selected'); }
      }
    });
  });
}
burgerButtonFunction();

function correctZipCode() {
  let value = zipCodeInput.value;
  value = value.replace(/\D+/g, '');
  let newValue = '';
  if (value.length <= 5) { newValue += value; }
  else { newValue = value.substring(0, 5); }
  zipCodeInput.value = newValue;
}
zipCodeInput.addEventListener('input', function(){
  correctZipCode();
});

scheduleList.addEventListener('click', function() {
  scheduleListArrow.classList.toggle('open');
  scheduleListItemsList.classList.toggle('visible');
});

let mainText = scheduleListText.querySelector('p');

scheduleListItems.forEach((scheduleListItem, index, array) => {
  let itemText = scheduleListItem.querySelector('p');
  scheduleListItem.addEventListener('click', function() {
    if (!scheduleListItem.classList.contains('selected')) {
      scheduleListItem.classList.add('selected');
      mainText.textContent = itemText.textContent;
      scheduleListArrow.classList.toggle('open');
      scheduleListItemsList.classList.toggle('visible');      
    }

    for (let j = index - 1; j >= 0; j--) { 
      if (array[j].classList.contains('selected')) { array[j].classList.remove('selected'); }
    }
    for (let k = index + 1; k < array.length; k++) { 
      if (array[k].classList.contains('selected')) { array[k].classList.remove('selected'); }
    }
  });

});  

window.addEventListener('click', function(event) {
  let target = event.target;
  let scheduleListClosest = target.closest('.header__schedule_list');

  if (scheduleListClosest) { return; }
  else {
    if (scheduleListItemsList.classList.contains('visible')) { scheduleListItemsList.classList.remove('visible'); }
    if (scheduleListArrow.classList.contains('open')) { scheduleListArrow.classList.remove('open'); }
  }
});



