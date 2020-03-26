'use strict'
$(document).ready(function() {

$('.sliderBlock__content_slider-items').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000
});

function startSlider() {
  $('.sliderBlock__content_slider-items').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });  
}
function stopSlider() {
  $('.sliderBlock__content_slider-items').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000
  });  
}




const zipCodeInputs = document.querySelectorAll('.zip-input');

const scheduleList_1 = document.querySelector('.schedule_list-1');
const scheduleListText_1 = document.querySelector('.schedule_list-text-1');
const scheduleListItemsList_1 = document.querySelector('.schedule_list-items-1');
const scheduleListItems_1 = document.querySelectorAll('.schedule_list-item-1');
const scheduleListArrow_1 = document.querySelector('.schedule_list-arrow-1');
const scheduleZip_1 = document.querySelector('.schedule-zip-1');
const scheduleZip_2 = document.querySelector('.schedule-zip-2');
const scheduleButton_1 = document.querySelector('.schedule-btn-1');
const scheduleButton_2 = document.querySelector('.schedule-btn-2');

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
const popupThank = document.querySelector('.popup__send-thank');
const popupBackground = document.querySelector('.popup__bg');
const popupInputs = document.querySelectorAll('.popup__input');
const inputTelPopup = document.querySelector('.popup__input-tel');
const inputEmailPopup = document.querySelector('.popup__input-email');
const closePopupBtns = document.querySelectorAll('.popup__close');
const smsButtons = document.querySelectorAll('.send-sms');
const emailButtons = document.querySelectorAll('.send-email');
const smsSendButton = document.querySelector('.popup__btn-sms');
const emailSendButton = document.querySelector('.popup__btn-email');
const thankOkButton = document.querySelector('.popup__btn-thank');

const warningText_1 = document.querySelector('.warning-text-1');
const nextStepButton_1 = document.querySelector('.next-step-1');

const dayAvailableTimes = document.querySelectorAll('.header-when_day-time');

dayAvailableTimes.forEach((dayAvailableTime, index, array) => {
  dayAvailableTime.addEventListener('click', function() {
    if (dayAvailableTime.classList.contains('unavailable')) { return; }
    else {
      dayAvailableTime.classList.toggle('selected');

      for (let j = index - 1; j >= 0; j--) {
        if (array[j].classList.contains('selected')) { array[j].classList.remove('selected'); }
      }
      for (let k = index + 1; k < array.length; k++) {
        if (array[k].classList.contains('selected')) { array[k].classList.remove('selected'); }
      }

    }
  });
});

if (nextStepButton_1) {
  nextStepButton_1.addEventListener('click', function() {
    let selectedTime = 0;
    for (let dayAvailableTime of dayAvailableTimes) {
      if (dayAvailableTime.classList.contains('selected')) { selectedTime++; }
    }
    if (selectedTime === 0) { warningText_1.classList.add('active'); }
    else { warningText_1.classList.remove('active'); }
  });
}

if (popup) {
  /* function for stop scrolling */
  function bodyScroll(val) {
    let body = document.querySelector('body');
    if (val === 'inactive') {
      body.classList.add('inactive');
    } else if (val === 'active') {
      body.classList.remove('inactive');
    }
    if (body.classList.contains('inactive')) {
      body.addEventListener('scroll', function(event) { event.preventDefault(); });
    } else {
      body.addEventListener('scroll', function(event) { return true; });
    }
  }

  smsSendButton.addEventListener('click', function() {
    if (inputTelPopup.value === '' || inputTelPopup.value === '+1' || inputTelPopup.value.length < 17) {
      // inputTelPopup.value = '';
      inputTelPopup.placeholder = 'Input Correct Phone Number';
      inputTelPopup.style.borderColor = '#FF3737';
    }
    else {
      if (popupSendSms.classList.contains('active')) { popupSendSms.classList.remove('active'); }
      if (!popupThank.classList.contains('active')) { popupThank.classList.add('active'); }
    }
  });
  emailSendButton.addEventListener('click', function() {
    let value = inputEmailPopup.value;
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(value)) {
      if (popupSendEmail.classList.contains('active')) { popupSendEmail.classList.remove('active'); }
      if (!popupThank.classList.contains('active')) { popupThank.classList.add('active'); }
    } else {
      // inputEmailPopup.value = '';
      inputEmailPopup.placeholder = 'Input Correct Email';
      inputEmailPopup.style.borderColor = '#FF3737';
    }
  });
  
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
  inputTelPopup.addEventListener('input', function() {
      correctPhoneNumber();
  });
  closePopupBtns.forEach(closePopupBtn => {
    closePopupBtn.addEventListener('click', function() {
      popupSends.forEach(popupSend => {
        if (popupSend.classList.contains('active')) { popupSend.classList.remove('active'); }
      });
      if (popup.classList.contains('active')) { popup.classList.remove('active'); }
  
      popupInputs.forEach(popupInput => {
        popupInput.style.borderColor = '#162230';
        popupInput.value = '';
      });  
      bodyScroll('active');
      // $('.sliderBlock__content_slider-items').slick({
      //   autoplay: true
      // });
      startSlider();
    });
  });
  popupBackground.addEventListener('click', function() {
    popupSends.forEach(popupSend => {
      if (popupSend.classList.contains('active')) { popupSend.classList.remove('active'); }
    });
  
    if (popup.classList.contains('active')) { popup.classList.remove('active'); }
  
    popupInputs.forEach(popupInput => {
      popupInput.style.borderColor = '#162230';
      popupInput.value = '';
    });
    bodyScroll('active');
    // $('.sliderBlock__content_slider-items').slick({
    //   autoplay: true
    // });
    startSlider();
  });
  thankOkButton.addEventListener('click', function() {
    popupSends.forEach(popupSend => {
      if (popupSend.classList.contains('active')) { popupSend.classList.remove('active'); }
    });
    if (popup.classList.contains('active')) { popup.classList.remove('active'); }
    popupInputs.forEach(popupInput => {
      popupInput.style.borderColor = '#162230';
      popupInput.value = '';
    });
    bodyScroll('active');
    // $('.sliderBlock__content_slider-items').slick({
    //   autoplay: true
    // });
    startSlider();
  });
  smsButtons.forEach(smsButton => {
    smsButton.addEventListener('click', function() {
      if (!popup.classList.contains('active')) { popup.classList.add('active'); }
      if (!popupSendSms.classList.contains('active')) { popupSendSms.classList.add('active'); }
      bodyScroll('inactive');
      // $('.sliderBlock__content_slider-items').slick({
      //   autoplay: false
      // });
      stopSlider();
    });
  });
  emailButtons.forEach(emailButton => {
    emailButton.addEventListener('click', function() {
      if (!popup.classList.contains('active')) { popup.classList.add('active'); }
      if (!popupSendEmail.classList.contains('active')) { popupSendEmail.classList.add('active'); }
      bodyScroll('inactive');
      // $('.sliderBlock__content_slider-items').slick({
      //   autoplay: false
      // });
      stopSlider();
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

function checkScheduleButtonFunction(btn, zip, listText, list) {
  if (btn && list && zip) {
    btn.addEventListener('click', function() {
      let inputZip = zip.querySelector('input');
      let inputZipValue = inputZip.value;
      let text = listText.querySelector('p');
      if (inputZipValue.length < 5) { zip.style.borderColor = '#FF3737'; }
      else {
        zip.style.borderColor = '#565656';
        inputZipValue = '';
      }
  
      if (text.textContent === 'Select Your Service') { list.style.borderColor = '#FF3737'; }
      else { list.style.borderColor = '#565656'; }
    });
  } 
}
checkScheduleButtonFunction(scheduleButton_1, scheduleZip_1, scheduleListText_1, scheduleList_1);
checkScheduleButtonFunction(scheduleButton_2, scheduleZip_2, scheduleListText_2, scheduleList_2);


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



}); // end of code