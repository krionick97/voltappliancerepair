'use strict'

const zipCodeInputs = document.querySelectorAll('.zip-input');

const scheduleList_1 = document.querySelector('.schedule_list-1');
const scheduleListText_1 = document.querySelector('.schedule_list-text-1');
const scheduleListItemsList_1 = document.querySelector('.schedule_list-items-1');
const scheduleListItems_1 = document.querySelectorAll('.schedule_list-item-1');
const scheduleListArrow_1 = document.querySelector('.schedule_list-arrow-1');

const scheduleList_2 = document.querySelector('.schedule_list-2');
const scheduleListText_2 = document.querySelector('.schedule_list-text-2');
const scheduleListItemsList_2 = document.querySelector('.schedule_list-items-2');
const scheduleListItems_2 = document.querySelectorAll('.schedule_list-item-2');
const scheduleListArrow_2 = document.querySelector('.schedule_list-arrow-2');

const burgerButton = document.querySelector('.header__burger');
const navigateMenu = document.querySelector('.header__navigate_menu');
const navigateMenuItems = document.querySelectorAll('.header__navigate_menuList-item');

const popup = document.querySelector('.popup');
const popupSends = document.querySelectorAll('.popup__send');
const popupSendSms = document.querySelector('.popup__send-sms');
const popupSendEmail = document.querySelector('.popup__send-email');
const popupBackground = document.querySelector('.popup__bg');
const inputTelPopup = document.querySelector('.popup__input-tel');
const closePopupBtns = document.querySelectorAll('.popup__close');
const smsButtons = document.querySelectorAll('.send-sms');
const emailButtons = document.querySelectorAll('.send-email');

function correctPhoneNumber() {
  let value = inputTelPopup.value;
    value = value.replace(/\D+/g, '');
    if (value.substring(0,1) != '1') {
        value = '1' + value;
    }
    let new_value = '+';
    for (let i = 0; i < value.length; i++) {
        if (new_value.length === 2) { new_value += ' (' + value.substring(i,i+1);}
        else if (new_value.length === 7) { new_value += ') ' + value.substring(i,i+1);}
        else if (new_value.length === 12) { new_value += '-' + value.substring(i,i+1);}
        else if (new_value.length === 17) {}
        else {new_value += value.substring(i,i+1);}
    }
    inputTelPopup.value = new_value;
}
if (inputTelPopup) {
  inputTelPopup.addEventListener('input', function() {
      correctPhoneNumber();
  });
}
closePopupBtns.forEach(closePopupBtn => {
  closePopupBtn.addEventListener('click', function() {
    popupSends.forEach(popupSend => {
      if (popupSend.classList.contains('active')) { popupSend.classList.remove('active'); }
    });
    if (popup.classList.contains('active')) { popup.classList.remove('active'); }
  });
});
if (popupBackground) {
  popupBackground.addEventListener('click', function() {
    popupSends.forEach(popupSend => {
      if (popupSend.classList.contains('active')) { popupSend.classList.remove('active'); }
    });
    if (popup.classList.contains('active')) { popup.classList.remove('active'); }
  });
}
if (smsButtons) {
  smsButtons.forEach(smsButton => {
    smsButton.addEventListener('click', function() {
      if (!popup.classList.contains('active')) { popup.classList.add('active'); }
      if (!popupSendSms.classList.contains('active')) { popupSendSms.classList.add('active'); }
    });
  });
}
if (emailButtons) {
  emailButtons.forEach(emailButton => {
    emailButton.addEventListener('click', function() {
      if (!popup.classList.contains('active')) { popup.classList.add('active'); }
      if (!popupSendEmail.classList.contains('active')) { popupSendEmail.classList.add('active'); }
    });
  });
}

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

function correctZipCode(inputItem) {
  let value = inputItem.value;
  value = value.replace(/\D+/g, '');
  let newValue = '';
  if (value.length <= 5) { newValue += value; }
  else { newValue = value.substring(0, 5); }
  inputItem.value = newValue;
}
zipCodeInputs.forEach(zipCodeInput => {
  zipCodeInput.addEventListener('input', function(){
    correctZipCode(zipCodeInput);
  });
});

/* ------------------ */

function listOpenFunction(arrow, list, itemsList, text, items) {
  function arrowOpenFunction() {
    if (arrow) {
      if (itemsList.classList.contains('visible')) { arrow.classList.add('open'); }
      else { arrow.classList.remove('open'); }
    }
  }
  if (list) {
    list.addEventListener('click', function() {
      itemsList.classList.toggle('visible');
      arrowOpenFunction();
    });
    let mainText = text.querySelector('p');
    items.forEach((item, index, array) => {
      let itemText = item.querySelector('p');
      item.addEventListener('click', function() {
        if (!item.classList.contains('selected')) {
          item.classList.add('selected');
          mainText.textContent = itemText.textContent;
          arrowOpenFunction();  
          itemsList.classList.toggle('visible');      
        }
  
        for (let j = index - 1; j >= 0; j--) { 
          if (array[j].classList.contains('selected')) { array[j].classList.remove('selected'); }
        }
        for (let k = index + 1; k < array.length; k++) { 
          if (array[k].classList.contains('selected')) { array[k].classList.remove('selected'); }
        }
      });
    });
  }
}

// listOpenFunction(arrow, list, itemsList, text, items)
listOpenFunction(scheduleListArrow_1, scheduleList_1, scheduleListItemsList_1, scheduleListText_1, scheduleListItems_1);
listOpenFunction(scheduleListArrow_2, scheduleList_2, scheduleListItemsList_2, scheduleListText_2, scheduleListItems_2);


window.addEventListener('click', function(event) {
  let target = event.target;
  let scheduleListClosest_1 = target.closest('.schedule_list-1');
  let scheduleListClosest_2 = target.closest('.schedule_list-2');

  function listCloseOutsideFunction(listClosest, itemsList, arrow) {
    if (listClosest) { return; }
    else {
      if (itemsList && arrow) {
        if (itemsList.classList.contains('visible')) { itemsList.classList.remove('visible'); }
        if (arrow.classList.contains('open')) { arrow.classList.remove('open'); }
      }
    }
  }

  listCloseOutsideFunction(scheduleListClosest_1, scheduleListItemsList_1, scheduleListArrow_1);
  listCloseOutsideFunction(scheduleListClosest_2, scheduleListItemsList_2, scheduleListArrow_2);

});



