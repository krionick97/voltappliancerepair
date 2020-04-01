'use strict'
$(document).ready(function() {

$('.sliderBlock__content_slider-items').slick({
  dots: true,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 3000
});
startSlider();

function startSlider() {
  $('.sliderBlock__content_slider-items').slick('slickPlay');  
}
function stopSlider() {
  $('.sliderBlock__content_slider-items').slick('slickPause');  
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

const applianceTypeList = document.querySelector('.appliance-type-list');
const applianceTypeListText = document.querySelector('.appliance-type-list_text');
const applianceTypeListArrow = document.querySelector('.appliance-type-list_arrow');
const applianceTypeListItems = document.querySelector('.appliance-type-list_items');
const applianceTypeListItem = document.querySelectorAll('.appliance-type-list_item');

const applianceBrandList = document.querySelector('.appliance-brand-list');
const applianceBrandListText = document.querySelector('.appliance-brand-list_text');
const applianceBrandListInput = document.querySelector('.appliance-brand-list_text > input');
const applianceBrandListArrow = document.querySelector('.appliance-brand-list_arrow');
const applianceBrandListItems = document.querySelector('.appliance-brand-list_items');
const applianceBrandListItem = document.querySelectorAll('.appliance-brand-list_item');

const stateList = document.querySelector('.header-location_state-list');
const stateListText = document.querySelector('.header-location_state-listText');
const stateListArrow = document.querySelector('.header-location_state-listArrow');
const stateListItems = document.querySelector('.header-location_state-listItems');
const stateListItem = document.querySelectorAll('.header-location_state-listItem');
const contactInputPhone = document.querySelector('.header-location_data-phone > input');

const locationStreet = document.querySelector('.header-location_data-street');
// const locationUnit = document.querySelector('.header-location_data-unit');
const locationCity = document.querySelector('.header-location_data-city');
const locationZip = document.querySelector('.header-location_data-zip');

const contactFirstName = document.querySelector('.header-location_data-firstName');
const contactLastName = document.querySelector('.header-location_data-lastName');
// const contactEmail = document.querySelector('.header-location_data-email');

const applianceTypeBlock = document.querySelector('.appliance-type-block');
const applianceBrandBlock = document.querySelector('.appliance-brand-block');

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
// const warningText_2 = document.querySelector('.warning-text-2');
const nextStepButton_1 = document.querySelector('.next-step-1');
const nextStepButton_2 = document.querySelector('.next-step-2');
const headerWhenCheckbox = document.querySelector('.header-when_subtitle-check');
const scheduleServiceBtn = document.querySelector('.last-step-schedule-service');

const addPhonesTitle = document.querySelector('.header-location_add-title');
// const addPhonesColumnLeft = document.querySelector('.header-location_add-phones > .header-location_data-columns > .header-location_data-column-left');
// const addPhonesColumnRight = document.querySelector('.header-location_add-phones > .header-location_data-columns > .header-location_data-column-right');
// const removePhoneButtons = document.querySelectorAll('.header-location_add-remove');
const addPhoneButton = document.querySelector('.header-location_add-phones-btn > button');
const addPhonesBlock = document.querySelector('.header-location_add-phones');

const dayAvailableTimes = document.querySelectorAll('.header-when_day-time');

const problemTitle = document.querySelector('.header-issue_problems-title');
const problemItems = document.querySelectorAll('.header-issue_problems-item');
const problemLine = document.querySelector('.header-issue_problems-line');
const descriptionProblem = document.querySelector('.header-issue_problems-description > textarea');

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
    let checkboxInput = headerWhenCheckbox.querySelector('div > input');
    let check = headerWhenCheckbox.querySelector('.check');
    for (let dayAvailableTime of dayAvailableTimes) {
      if (dayAvailableTime.classList.contains('selected')) { selectedTime++; }
    }
    if (selectedTime === 0) { warningText_1.classList.add('active'); }
    else { warningText_1.classList.remove('active'); }
    if (!checkboxInput.checked) { check.style.borderColor = '#FF3737'; }
    else { check.style.borderColor = '#565656'; }
  });
}

if (nextStepButton_2) {
  nextStepButton_2.addEventListener('click', function() {
    let typeText = applianceTypeListText.querySelector('p');
    let brandText = applianceBrandListText.querySelector('p');
    let selectedProblem = false;
    let isReady = false;
    for (let problemItem of problemItems) {
      if (problemItem.classList.contains('selected')) {
        selectedProblem = true;
      }
    }
    if (selectedProblem === false && descriptionProblem.value === '') {
        descriptionProblem.style.borderColor = '#FF3737';
        problemTitle.style.color = '#FF3737';
        problemLine.style.backgroundColor = '#FF3737';
        isReady = false;
      } else {
        descriptionProblem.style.borderColor = '#8E8E93';
        problemTitle.style.color = '#162230';
        problemLine.style.backgroundColor = '#162230';
        selectedProblem = true;
        isReady = true;
    }
    if (typeText.textContent === '\xa0') {
        applianceTypeBlock.style.borderColor = '#FF3737';
        isReady = false;
    } else {
        applianceTypeBlock.style.borderColor = '#8E8E93';
        isReady = true;
    }
    if (brandText.textContent === '\xa0') {
        applianceBrandBlock.style.borderColor = '#FF3737';
        isReady = false;
    } else {
      if (!applianceBrandListInput.classList.contains('active')) {
        applianceBrandBlock.style.borderColor = '#8E8E93';
        isReady = true;
      }
      else {
        if (applianceBrandListInput.value === '') {
          applianceBrandBlock.style.borderColor = '#FF3737';
          isReady = false;
          // warningText_2.classList.add('active');
          // warningText_2.textContent = 'Note the Brand';  
        }
        else {
          applianceBrandBlock.style.borderColor = '#8E8E93';
          isReady = true;
        }
      }
    }
    if (isReady) {
      //next step
    }

  });
}

if (scheduleServiceBtn) {
  scheduleServiceBtn.addEventListener('click', function() {
    let isReady = false;
    let streetInput = locationStreet.querySelector('input');
    // let unitInput = locationUnit.querySelector('input');
    let cityInput = locationCity.querySelector('input');
    let zipInput = locationZip.querySelector('input');
    let firstNameInput = contactFirstName.querySelector('input');
    let lastNameInput = contactLastName.querySelector('input');
    // let emailInput = contactEmail.querySelector('input');
    let state = stateListText.querySelector('p');

    let addNameInputs = document.querySelectorAll('.header-location_add-name > input');
    let addPhoneInputs = document.querySelectorAll('.header-location_add-phone > input');

    if (streetInput.value === '') {
      streetInput.style.borderColor = '#FF3737';
      isReady = false;
    } else {
      streetInput.style.borderColor = '#162230';
      isReady = true;
    }
    // if (unitInput.value === '') {
    //   unitInput.style.borderColor = '#FF3737';
    //   isReady = false;
    // } else {
    //   unitInput.style.borderColor = '#162230';
    //   isReady = true;
    // }
    if (cityInput.value === '') {
      cityInput.style.borderColor = '#FF3737';
      isReady = false;
    } else {
      cityInput.style.borderColor = '#162230';
      isReady = true;
    }
    if (zipInput.value === '') {
      zipInput.style.borderColor = '#FF3737';
      isReady = false;
    } else {
      zipInput.style.borderColor = '#162230';
      isReady = true;
    }
    if (firstNameInput.value === '') {
      firstNameInput.style.borderColor = '#FF3737';
      isReady = false;
    } else {
      firstNameInput.style.borderColor = '#162230';
      isReady = true;
    }
    if (lastNameInput.value === '') {
      lastNameInput.style.borderColor = '#FF3737';
      isReady = false;
    } else {
      lastNameInput.style.borderColor = '#162230';
      isReady = true;
    }
    if (contactInputPhone.value === '' || contactInputPhone.value.length < 17) {
      contactInputPhone.style.borderColor = '#FF3737';
      isReady = false;
    } else {
      contactInputPhone.style.borderColor = '#162230';
      isReady = true;
    }
    // if (correctEmail(emailInput) !== true) {
    //   emailInput.style.borderColor = '#FF3737';
    //   isReady = false;
    // } else {
    //   emailInput.style.borderColor = '#162230';
    //   isReady = true;
    // }
    if (state.textContent === '\xa0') {
      stateList.style.borderColor = '#FF3737';
      isReady = false;
    } else {
      stateList.style.borderColor = '#162230';
      isReady = true;
    }

    if (addNameInputs && addPhoneInputs) {
      addNameInputs.forEach(addNameInput => {
        if (addNameInput.value === '') {
          addNameInput.style.borderColor = '#FF3737';
          isReady = false;
        } else {
          addNameInput.style.borderColor = '#162230';
          isReady = true;
        }
      });
      addPhoneInputs.forEach(addPhoneInput => {
        if (addPhoneInput.value === '' || addPhoneInput.value.length < 17) {
          addPhoneInput.style.borderColor = '#FF3737';
          isReady = false;
        } else {
          addPhoneInput.style.borderColor = '#162230';
          isReady = true;
        }
      });
    }

    if (isReady) {
      // schedule service button
      console.log('service button ');
    }

  });
}

// addPhonesBlock

if (addPhoneButton) {
  addPhoneButton.addEventListener('click', function() {
    if (!addPhonesTitle.classList.contains('active')) { addPhonesTitle.classList.add('active'); }
    let addColumn = document.createElement('div');
    let nameBlock = document.createElement('div');
    let nameLabel = document.createElement('label');
    let nameInput = document.createElement('input');
    let phoneBlock = document.createElement('div');
    let phoneLabel = document.createElement('label');
    let phoneInput = document.createElement('input');
    let removeButton = document.createElement('div');
    nameLabel.textContent = 'Name:';
    phoneLabel.textContent = 'Phone:';
    nameInput.setAttribute('type', 'text');
    phoneInput.setAttribute('type', 'text');
    removeButton.classList.add('header-location_add-remove');
    nameBlock.classList.add('header-location_add-name');
    phoneBlock.classList.add('header-location_add-phone');
    addColumn.classList.add('header-location_add-column');

    removeButton.innerHTML = `<svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3L34 34M34 3L3 34" stroke="#FF3737" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

    nameBlock.append(nameLabel);
    nameBlock.append(nameInput);
    phoneBlock.append(phoneLabel);
    phoneBlock.append(phoneInput);

    addColumn.append(nameBlock);
    addColumn.append(phoneBlock);
    addColumn.append(removeButton);

    addPhonesBlock.append(addColumn);

    phoneInput.addEventListener('input', function() {
      correctPhoneNumber(phoneInput);
    });

    removeButton.addEventListener('click', function() {
      removeButton.parentNode.remove();
      let columns = document.querySelectorAll('.header-location_add-column');
      // console.log(columns.length);
      if (columns.length === 0) {
        if (addPhonesTitle.classList.contains('active')) { addPhonesTitle.classList.remove('active'); }
      }
    });
  });
}


function correctPhoneNumber(inputItem) {
  let value = inputItem.value;
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
    inputItem.value = new_value;
}

let correctEmail = function (emailInput) {
  let value = emailInput.value;
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(value)) { return true; }
  else { return false; }
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
    // let value = inputEmailPopup.value;
    // let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (correctEmail(inputEmailPopup) === true) {
      if (popupSendEmail.classList.contains('active')) { popupSendEmail.classList.remove('active'); }
      if (!popupThank.classList.contains('active')) { popupThank.classList.add('active'); }
    } else {
      // inputEmailPopup.value = '';
      inputEmailPopup.placeholder = 'Input Correct Email';
      inputEmailPopup.style.borderColor = '#FF3737';
    }
  });
  
  inputTelPopup.addEventListener('input', function() {
      correctPhoneNumber(inputTelPopup);
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

function listOpenFunction(arrow, list, itemsList, text, items, input) {
  function arrowOpenFunction() {
    if (arrow) {
      if (itemsList.classList.contains('visible')) { arrow.classList.add('open'); }
      else { arrow.classList.remove('open'); }
    }
  }
  if (arrow) {
    arrow.addEventListener('click', function() {
      itemsList.classList.toggle('visible');
      arrowOpenFunction();
    });  
  }
  if (list) {
    let mainText = text.querySelector('p');

    mainText.addEventListener('click', function() {
      itemsList.classList.toggle('visible');
      arrowOpenFunction();
    });
    items.forEach((item, index, array) => {
      let itemText = item.querySelector('p');
      item.addEventListener('click', function() {
        if (!item.classList.contains('selected')) {
          item.classList.add('selected');
          mainText.textContent = itemText.textContent;
          // arrowOpenFunction();
        }
        if (arrow.classList.contains('open')) { arrow.classList.remove('open'); }
        itemsList.classList.toggle('visible');      

        if (input) {
          if (index === (array.length - 1)) {
            if (!input.classList.contains('active')) { input.classList.add('active'); }
            if (!mainText.classList.contains('inactive')) { mainText.classList.add('inactive'); }
          } else {
            if (input.classList.contains('active')) { input.classList.remove('active'); }
            if (mainText.classList.contains('inactive')) { mainText.classList.remove('inactive'); }
            input.value = '';
          }
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
listOpenFunction(applianceTypeListArrow, applianceTypeList, applianceTypeListItems, applianceTypeListText, applianceTypeListItem);
listOpenFunction(applianceBrandListArrow, applianceBrandList, applianceBrandListItems, applianceBrandListText, applianceBrandListItem, applianceBrandListInput);
listOpenFunction(stateListArrow, stateList, stateListItems, stateListText, stateListItem);


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

problemItems.forEach(problemItem => {
  problemItem.addEventListener('click', function() {
    problemItem.classList.toggle('selected');
  });
});

if (contactInputPhone) {
  contactInputPhone.addEventListener('input', function() {
    correctPhoneNumber(contactInputPhone);
  });
}


window.addEventListener('click', function(event) {
  let target = event.target;
  let scheduleListClosest_1 = target.closest('.schedule_list-1');
  let scheduleListClosest_2 = target.closest('.schedule_list-2');
  let applianceTypeListClosest = target.closest('.appliance-type-list');
  let applianceBrandListClosest = target.closest('.appliance-brand-list');
  let stateListClosest = target.closest('.header-location_state-list');

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
  listCloseOutsideFunction(applianceTypeListClosest, applianceTypeListItems, applianceTypeListArrow);
  listCloseOutsideFunction(applianceBrandListClosest, applianceBrandListItems, applianceBrandListArrow);
  listCloseOutsideFunction(stateListClosest, stateListItems, stateListArrow);

});



}); // end of code