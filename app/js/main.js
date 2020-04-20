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

$('.service-repair__review_sliderBlock').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000
});

const zipCodeInputs = document.querySelectorAll('.zip-input');
const phoneInputs = document.querySelectorAll('.phone-input');

const scheduleListBlocks = document.querySelectorAll('.schedule_listBlock');
const scheduleButtonBlocks = document.querySelectorAll('.schedule-button_block');

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

const contactStateList = document.querySelector('.header-contact_state-list');
const contactStateListText = document.querySelector('.header-contact_state-listText');
const contactStateListArrow = document.querySelector('.header-contact_state-listArrow');
const contactStateListItems = document.querySelector('.header-contact_state-listItems');
const contactStateListItem = document.querySelectorAll('.header-contact_state-listItem');

const contactMethodList = document.querySelector('.header-contact_method-list');
const contactMethodListText = document.querySelector('.header-contact_method-listText');
const contactMethodListArrow = document.querySelector('.header-contact_method-listArrow');
const contactMethodListItems = document.querySelector('.header-contact_method-listItems');
const contactMethodListItem = document.querySelectorAll('.header-contact_method-listItem');

const blogCategoriesList = document.querySelector('.blog__categories-list');
const blogCategoriesListText = document.querySelector('.blog__categories-listText');
const blogCategoriesListArrow = document.querySelector('.blog__categories-listArrow');
const blogCategoriesListItems = document.querySelector('.blog__categories-listItems');
const blogCategoriesListItem = document.querySelectorAll('.blog__categories-listItem');

const blogArchivesListBlock = document.querySelector('.blog__archives-listBlock');
const blogItemsArchivesList = document.querySelectorAll('.blog-item__archives-listBlock');

// const blogArchivesList = document.querySelector('.blog__archives-list');
// const blogArchivesListText = document.querySelector('.blog__archives-listText');
const blogArchivesListArrow = document.querySelector('.blog__archives-listArrow');
const blogArchivesListItems = document.querySelector('.blog__archives-listItems');
// const blogArchivesListItem = document.querySelectorAll('.blog__archives-listItem');

const contactSubmitButton = document.querySelector('.header-contact_button > button');

const contactInputPhone = document.querySelector('.header-location_data-phone > input');

const locationStreet = document.querySelector('.header-location_data-street');
// const locationUnit = document.querySelector('.header-location_data-unit');
const locationCity = document.querySelector('.header-location_data-city');
const locationZip = document.querySelector('.header-location_data-zip');

const locationsButtonClear = document.querySelector('.header-locations_sidebar-inputClear');
const locationsZipInput = document.querySelector('.header-locations_sidebar-input > input');

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

const inputCode = document.querySelector('.popup-service-location__data_input > input');
const popupServiceLocation = document.querySelector('.popup-service-location');
const popupServiceLocationData = document.querySelectorAll('.popup-service-location__data');
const popupServiceLocationButtonCancel = document.querySelector('.popup-service-location__data_buttons-send > button:first-child');
const popupServiceLocationButtonSend = document.querySelector('.popup-service-location__data_buttons-send > button:last-child');
const popupServiceLocationButtonChangePhone = document.querySelector('.popup-service-location__data_buttons-code > button:first-child');
const popupServiceLocationButtonOk = document.querySelector('.popup-service-location__data_buttons-code > button:last-child');
const popupServiceLocationButtonThankOk = document.querySelector('.popup-service-location__data_buttons-thank > button');
const popupServiceLocationError = document.querySelector('.popup-service-location__data_error');

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
        // isReady = false;
      } else {
        descriptionProblem.style.borderColor = '#8E8E93';
        problemTitle.style.color = '#162230';
        problemLine.style.backgroundColor = '#162230';
        selectedProblem = true;
        // isReady = true;
    }
    if (typeText.textContent === '\xa0') {
        applianceTypeBlock.style.borderColor = '#FF3737';
        // isReady = false;
    } else {
        applianceTypeBlock.style.borderColor = '#8E8E93';
        // isReady = true;
    }
    if (brandText.textContent === '\xa0') {
        applianceBrandBlock.style.borderColor = '#FF3737';
        // isReady = false;
    } else {
      if (!applianceBrandListInput.classList.contains('active')) {
        applianceBrandBlock.style.borderColor = '#8E8E93';
        // isReady = true;
      }
      else {
        if (applianceBrandListInput.value === '') {
          applianceBrandBlock.style.borderColor = '#FF3737';
          // isReady = false;
          // warningText_2.classList.add('active');
          // warningText_2.textContent = 'Note the Brand';  
        }
        else {
          applianceBrandBlock.style.borderColor = '#8E8E93';
          // isReady = true;
        }
      }
    }

    if (selectedProblem === false && descriptionProblem.value === ''
        || typeText.textContent === '\xa0'
        || brandText.textContent === '\xa0'
        || applianceBrandListInput.classList.contains('active') && applianceBrandListInput.value === '') {
          isReady = false;
        } else {
          isReady = true;
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
    let cityInput = locationCity.querySelector('input');
    let zipInput = locationZip.querySelector('input');
    let firstNameInput = contactFirstName.querySelector('input');
    let lastNameInput = contactLastName.querySelector('input');
    let state = stateListText.querySelector('p');

    let addNameInputs = document.querySelectorAll('.header-location_add-name > input');
    let addPhoneInputs = document.querySelectorAll('.header-location_add-phone > input');

    if (streetInput.value === '') {
      streetInput.style.borderColor = '#FF3737';
      // isReady = false;
    } else {
      streetInput.style.borderColor = '#162230';
      // isReady = true;
    }
    if (cityInput.value === '') {
      cityInput.style.borderColor = '#FF3737';
      // isReady = false;
    } else {
      cityInput.style.borderColor = '#162230';
      // isReady = true;
    }
    if (zipInput.value === '') {
      zipInput.style.borderColor = '#FF3737';
      // isReady = false;
    } else {
      zipInput.style.borderColor = '#162230';
      // isReady = true;
    }
    if (firstNameInput.value === '') {
      firstNameInput.style.borderColor = '#FF3737';
      // isReady = false;
    } else {
      firstNameInput.style.borderColor = '#162230';
      // isReady = true;
    }
    if (lastNameInput.value === '') {
      lastNameInput.style.borderColor = '#FF3737';
      // isReady = false;
    } else {
      lastNameInput.style.borderColor = '#162230';
      // isReady = true;
    }
    if (contactInputPhone.value === '' || contactInputPhone.value.length < 17) {
      contactInputPhone.style.borderColor = '#FF3737';
      // isReady = false;
    } else {
      contactInputPhone.style.borderColor = '#162230';
      // isReady = true;
    }
    if (state.textContent === '\xa0') {
      stateList.style.borderColor = '#FF3737';
      // isReady = false;
    } else {
      stateList.style.borderColor = '#162230';
      // isReady = true;
    }

    if (addNameInputs && addPhoneInputs) {
      addNameInputs.forEach(addNameInput => {
        if (addNameInput.value === '') {
          addNameInput.style.borderColor = '#FF3737';
          // isReady = false;
        } else {
          addNameInput.style.borderColor = '#162230';
          // isReady = true;
        }
      });
      addPhoneInputs.forEach(addPhoneInput => {
        if (addPhoneInput.value === '' || addPhoneInput.value.length < 17) {
          addPhoneInput.style.borderColor = '#FF3737';
          // isReady = false;
        } else {
          addPhoneInput.style.borderColor = '#162230';
          // isReady = true;
        }
      });
    }

    if (streetInput.value === ''
        || cityInput.value === ''
        || zipInput.value === ''
        || firstNameInput.value === ''
        || lastNameInput.value === ''
        || contactInputPhone.value === '' || contactInputPhone.value.length < 17
        || state.textContent === '\xa0') {
          isReady = false;
        } else {
          isReady = true;
          if (addNameInputs && addPhoneInputs) {
            addNameInputs.forEach(addNameInput => {
              if (addNameInput.value === '') {
                isReady = false;
              } else {
                isReady = true;
              }
            });
            addPhoneInputs.forEach(addPhoneInput => {
              if (addPhoneInput.value === '' || addPhoneInput.value.length < 17) {
                isReady = false;
              } else {
                isReady = true;
              }
            });      
          } else {
            isReady = true;
          }
        }

    if (isReady) {
      if (!popupServiceLocation.classList.contains('active')) { popupServiceLocation.classList.add('active'); }
      if (!popupServiceLocationData[0].classList.contains('active')) { popupServiceLocationData[0].classList.add('active'); }
    }
  });
}

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

if (contactSubmitButton) {
  contactSubmitButton.addEventListener('click', function() {
    let isReady = false;
    let firstNameInput = document.querySelector('.header-contact_data-firstName > input');
    let lastNameInput = document.querySelector('.header-contact_data-lastName > input');
    let phoneInput = document.querySelector('.header-contact_data-phone > input');
    // let streetInput = document.querySelector('.header-contact_data-street > input');
    // let stateListText = contactStateListText.querySelector('p');
    // let cityInput = document.querySelector('.header-contact_data-city > input');
    // let zipInput = document.querySelector('.header-contact_data-zip > input');
    let messageTextarea = document.querySelector('.header-contact_data-message > textarea');
    let methodListText = contactMethodListText.querySelector('p');
    let emailInput = document.querySelector('.header-contact_data-email > input');

    if (firstNameInput.value === '') { firstNameInput.style.borderColor = '#FF3737'; }
    else { firstNameInput.style.borderColor = '#162230'; }

    if (lastNameInput.value === '') { lastNameInput.style.borderColor = '#FF3737'; }
    else { lastNameInput.style.borderColor = '#162230'; }

    if (phoneInput.value === '' || phoneInput.value.length < 17) { phoneInput.style.borderColor = '#FF3737'; }
    else { phoneInput.style.borderColor = '#162230'; }

    // if (streetInput.value === '') { streetInput.style.borderColor = '#FF3737'; }
    // else { streetInput.style.borderColor = '#162230'; }

    // if (stateListText.textContent === '\xa0') { contactStateList.style.borderColor = '#FF3737'; }
    // else { contactStateList.style.borderColor = '#162230'; }
    
    if (methodListText.textContent === '-Select-') { contactMethodList.style.borderColor = '#FF3737'; }
    else { contactMethodList.style.borderColor = '#162230'; }
    
    // if (cityInput.value === '') { cityInput.style.borderColor = '#FF3737'; }
    // else { cityInput.style.borderColor = '#162230'; }

    // if (zipInput.value === '' || zipInput.value.length < 5) { zipInput.style.borderColor = '#FF3737'; }
    // else { zipInput.style.borderColor = '#162230'; }

    if (messageTextarea.value === '') { messageTextarea.style.borderColor = '#FF3737'; }
    else { messageTextarea.style.borderColor = '#162230'; }

    if (!correctEmail(emailInput)) { emailInput.style.borderColor = '#FF3737'; }
    else { emailInput.style.borderColor = '#162230'; }

    if (firstNameInput.value === ''
        || lastNameInput.value === ''
        || phoneInput.value === '' || phoneInput.value.length < 17
        // || streetInput.value === ''
        // || stateListText.textContent === '\xa0'
        || methodListText.textContent === '-Select-'
        || !correctEmail(emailInput)
        // || cityInput.value === ''
        // || zipInput.value === '' || zipInput.value.length < 5
        || messageTextarea.value === '') { isReady = false; } 
      else { isReady = true; }

    if (isReady === true) {
      // button Submit
      console.log('Submit');
    }

  });
}

// const locationsButtonClear = document.querySelector('.header-locations_sidebar-inputClear');
// const locationsZipInput = document.querySelector('.header-locations_sidebar-input > input');

if (locationsButtonClear && locationsZipInput) {
  locationsButtonClear.addEventListener('click', function() {
    locationsZipInput.value = '';
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

if (phoneInputs) {
  phoneInputs.forEach(phoneInput => {
    phoneInput.addEventListener('input', function() {
      correctPhoneNumber(phoneInput);
    });
  });
}

function correctCode(inputItem) {
  let value = inputItem.value;
  value = value.replace(/\D+/g, '');
  inputItem.value = value;
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
  if (burgerButton) {
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
if (zipCodeInputs) {
  zipCodeInputs.forEach(zipCodeInput => {
    zipCodeInput.addEventListener('input', function(){
      correctZipCode(zipCodeInput);
    });
  });
}
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
      console.log(arrow);
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
          if (itemText) {
            mainText.textContent = itemText.textContent;
            // arrowOpenFunction();
          }
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
listOpenFunction(applianceTypeListArrow, applianceTypeList, applianceTypeListItems, applianceTypeListText, applianceTypeListItem);
listOpenFunction(applianceBrandListArrow, applianceBrandList, applianceBrandListItems, applianceBrandListText, applianceBrandListItem, applianceBrandListInput);
listOpenFunction(stateListArrow, stateList, stateListItems, stateListText, stateListItem);
listOpenFunction(contactStateListArrow, contactStateList, contactStateListItems, contactStateListText, contactStateListItem);
listOpenFunction(contactMethodListArrow, contactMethodList, contactMethodListItems, contactMethodListText, contactMethodListItem);
listOpenFunction(blogCategoriesListArrow, blogCategoriesList, blogCategoriesListItems, blogCategoriesListText, blogCategoriesListItem);

scheduleListBlocks.forEach(scheduleListBlock => {
  if (scheduleListBlock) {
    const scheduleList = scheduleListBlock.querySelector('.schedule_list');
    const scheduleListText = scheduleListBlock.querySelector('.schedule_list-text');
    const scheduleListItemsList = scheduleListBlock.querySelector('.schedule_list-items');
    const scheduleListItems = scheduleListBlock.querySelectorAll('.schedule_list-item');
    const scheduleListArrow = scheduleListBlock.querySelector('.schedule_list-arrow');
    listOpenFunction(scheduleListArrow, scheduleList, scheduleListItemsList, scheduleListText, scheduleListItems);
  }
});

if (blogArchivesListBlock) {
  function blogArchivesListOpenFunction() {
    let itemsList = blogArchivesListBlock.querySelector('.blog__archives-listItems');
    let itemBlocks = blogArchivesListBlock.querySelectorAll('.blog__archives-listItem_block');
    let itemMonths = blogArchivesListBlock.querySelectorAll('.blog__archives-listItem_months');
    let arrow = blogArchivesListBlock.querySelector('.blog__archives-listArrow');
    let listText = blogArchivesListBlock.querySelector('.blog__archives-listText');
    let plusItems = blogArchivesListBlock.querySelectorAll('.blog__archives-listItem_plus');
    let minusItems = blogArchivesListBlock.querySelectorAll('.blog__archives-listItem_minus');

    listText.addEventListener('click', function() {
      itemsList.classList.toggle('visible');
      arrowOpenFunction();
    });

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

    itemBlocks.forEach(itemBlock => {
      let plus = itemBlock.querySelector('.blog__archives-listItem_plus');
      let minus = itemBlock.querySelector('.blog__archives-listItem_minus');
      let year = itemBlock.querySelector('.blog__archives-listItem_year');
      let months = itemBlock.querySelector('.blog__archives-listItem_months');
      let monthLinks = itemBlock.querySelectorAll('.blog__archives-listItem_month > a');

      year.addEventListener('click', function() {
        plus.classList.toggle('inactive');
        minus.classList.toggle('inactive');
        months.classList.toggle('open');
      });

      monthLinks.forEach(monthLink => {
        monthLink.addEventListener('click', function() {
          if (arrow.classList.contains('open')) { arrow.classList.remove('open'); }
          if (itemsList.classList.contains('visible')) { itemsList.classList.remove('visible'); }
          itemMonths.forEach(itemMonthsOne => {
            if (itemMonthsOne.classList.contains('open')) { itemMonthsOne.classList.remove('open'); }
          });
          plusItems.forEach(plusItem => {
            if (plusItem.classList.contains('inactive')) { plusItem.classList.remove('inactive'); }
          });
          minusItems.forEach(minusItem => {
            if (!minusItem.classList.contains('inactive')) { minusItem.classList.add('inactive'); }
          });
        });
      });
    });

  }
  blogArchivesListOpenFunction();
}

if (blogItemsArchivesList) {
  function blogItemArchiveListOpenFunction(archiveList) {
    let itemBlocks = archiveList.querySelectorAll('.blog-item__archives-listItem_block');
    let itemMonths = archiveList.querySelectorAll('.blog-item__archives-listItem_months');
    let plusItems = archiveList.querySelectorAll('.blog-item__archives-listItem_plus');
    let minusItems = archiveList.querySelectorAll('.blog-item__archives-listItem_minus');

    itemBlocks.forEach(itemBlock => {
      let plus = itemBlock.querySelector('.blog-item__archives-listItem_plus');
      let minus = itemBlock.querySelector('.blog-item__archives-listItem_minus');
      let year = itemBlock.querySelector('.blog-item__archives-listItem_year');
      let months = itemBlock.querySelector('.blog-item__archives-listItem_months');
      let monthLinks = itemBlock.querySelectorAll('.blog-item__archives-listItem_month > a');

      year.addEventListener('click', function() {
        plus.classList.toggle('inactive');
        minus.classList.toggle('inactive');
        months.classList.toggle('open');
      });

      monthLinks.forEach(monthLink => {
        monthLink.addEventListener('click', function() {
          itemMonths.forEach(itemMonthsOne => {
            if (itemMonthsOne.classList.contains('open')) { itemMonthsOne.classList.remove('open'); }
          });
          plusItems.forEach(plusItem => {
            if (plusItem.classList.contains('inactive')) { plusItem.classList.remove('inactive'); }
          });
          minusItems.forEach(minusItem => {
            if (!minusItem.classList.contains('inactive')) { minusItem.classList.add('inactive'); }
          });
        });
      });
    });
  }

  blogItemsArchivesList.forEach(blogItemArchivesList => {
    blogItemArchiveListOpenFunction(blogItemArchivesList);
  });
}

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

scheduleButtonBlocks.forEach(scheduleButtonBlock => {
  if (scheduleButtonBlock) {
    const scheduleButton = scheduleButtonBlock.querySelector('.schedule-btn');
    const scheduleZip = scheduleButtonBlock.querySelector('.schedule-zip');
    const scheduleListText = scheduleButtonBlock.querySelector('.schedule_list-text');
    const scheduleList = scheduleButtonBlock.querySelector('.schedule_list');
    checkScheduleButtonFunction(scheduleButton, scheduleZip, scheduleListText, scheduleList);
  }
});


problemItems.forEach(problemItem => {
  problemItem.addEventListener('click', function() {
    problemItem.classList.toggle('selected');
  });
});

// if (contactInputPhone) {
//   contactInputPhone.addEventListener('input', function() {
//     correctPhoneNumber(contactInputPhone);
//   });
// }

if (popupServiceLocation) {
  popupServiceLocationButtonCancel.addEventListener('click', function() {
    if (popupServiceLocation.classList.contains('active')) { popupServiceLocation.classList.remove('active'); }
    popupServiceLocationData.forEach(popupServiceLocationDataItem => {
      if (popupServiceLocationDataItem.classList.contains('active')) { popupServiceLocationDataItem.classList.remove('active'); }
    });
  });
  popupServiceLocationButtonSend.addEventListener('click', function() {
    if (popupServiceLocationData[0].classList.contains('active')) { popupServiceLocationData[0].classList.remove('active'); }
    if (!popupServiceLocationData[1].classList.contains('active')) { popupServiceLocationData[1].classList.add('active'); }
  });
  popupServiceLocationButtonChangePhone.addEventListener('click', function() {
    if (popupServiceLocation.classList.contains('active')) { popupServiceLocation.classList.remove('active'); }
    popupServiceLocationData.forEach(popupServiceLocationDataItem => {
      if (popupServiceLocationDataItem.classList.contains('active')) { popupServiceLocationDataItem.classList.remove('active'); }
    });
    if (popupServiceLocationError.classList.contains('active')) { popupServiceLocationError.classList.remove('active'); }
    inputCode.value = '';
    inputCode.style.borderColor = '#162230';
  });
  popupServiceLocationButtonOk.addEventListener('click', function() {
    let correctCode = false;
    if (inputCode.value === '') { inputCode.style.borderColor = '#FF3737'; }
    else {
      if (correctCode) {
        inputCode.style.borderColor = '#162230';
        if (popupServiceLocationData[0].classList.contains('active')) { popupServiceLocationData[0].classList.remove('active'); }
        if (popupServiceLocationData[1].classList.contains('active')) { popupServiceLocationData[1].classList.remove('active'); }  
        if (!popupServiceLocationData[2].classList.contains('active')) { popupServiceLocationData[2].classList.add('active'); }
        if (popupServiceLocationError.classList.contains('active')) { popupServiceLocationError.classList.remove('active'); }
        inputCode.value = '';
      } else {
        inputCode.style.borderColor = '#FF3737';
        inputCode.value = '';
        if (!popupServiceLocationError.classList.contains('active')) { popupServiceLocationError.classList.add('active'); }
      }
    }
  });
  popupServiceLocationButtonThankOk.addEventListener('click', function() {
    if (popupServiceLocation.classList.contains('active')) { popupServiceLocation.classList.remove('active'); }
    popupServiceLocationData.forEach(popupServiceLocationDataItem => {
      if (popupServiceLocationDataItem.classList.contains('active')) { popupServiceLocationDataItem.classList.remove('active'); }
    });
    inputCode.value = '';
  });
  inputCode.addEventListener('input', function() {
    correctCode(inputCode);
  });
}


window.addEventListener('click', function(event) {
  let target = event.target;
  let applianceTypeListClosest = target.closest('.appliance-type-list');
  let applianceBrandListClosest = target.closest('.appliance-brand-list');
  let stateListClosest = target.closest('.header-location_state-list');
  let contactStateListClosest = target.closest('.header-contact_state-list');
  let contactMethodListClosest = target.closest('.header-contact_method-list');
  let blogCategoriesListClosest = target.closest('.blog__categories-list');
  let blogArchivesListClosest = target.closest('.blog__archives-listBlock');

  function listCloseOutsideFunction(listClosest, itemsList, arrow) {
    if (listClosest) { return; }
    else {
      if (itemsList && arrow) {
        if (itemsList.classList.contains('visible')) { itemsList.classList.remove('visible'); }
        if (arrow.classList.contains('open')) { arrow.classList.remove('open'); }
      }
    }
  }

  scheduleListBlocks.forEach(scheduleListBlock => {
    if (scheduleListBlock) {
      let scheduleListClosest = target.closest('.schedule_list');
      const scheduleListItemsList = scheduleListBlock.querySelector('.schedule_list-items');
      const scheduleListArrow = scheduleListBlock.querySelector('.schedule_list-arrow');
      listCloseOutsideFunction(scheduleListClosest, scheduleListItemsList, scheduleListArrow);
    }
  });

  listCloseOutsideFunction(applianceTypeListClosest, applianceTypeListItems, applianceTypeListArrow);
  listCloseOutsideFunction(applianceBrandListClosest, applianceBrandListItems, applianceBrandListArrow);
  listCloseOutsideFunction(stateListClosest, stateListItems, stateListArrow);
  listCloseOutsideFunction(contactStateListClosest, contactStateListItems, contactStateListArrow);
  listCloseOutsideFunction(contactMethodListClosest, contactMethodListItems, contactMethodListArrow);
  listCloseOutsideFunction(blogCategoriesListClosest, blogCategoriesListItems, blogCategoriesListArrow);
  listCloseOutsideFunction(blogArchivesListClosest, blogArchivesListItems, blogArchivesListArrow);

});

}); // end of code