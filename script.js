const form = document.querySelector("#my-form");
const wrapperSection = document.querySelector(".container");
const loader = document.querySelector(".spinner");
const popUp = document.querySelector(".recive-popup");

wrapperSection.addEventListener("click", (e) => {
  const element = e.target.closest(".pickup-package");
  const buttons = Array.from(wrapperSection.querySelectorAll(".btn"));
  const submitButton = wrapperSection.querySelector(".submit-btn");
  if (!element) {
    return;
  }
  loader.style.display = "block";
  wrapperSection.style.filter = "brightness(50%)";
  setTimeout((_) => {
    wrapperSection.style.display = "block";
    wrapperSection.style.filter = "brightness(100%)";
    loader.style.display = "none";
    buttons.forEach((button) => (button.style.display = "none"));
    form.style.display = "flex";
    submitButton.style.display = "flex";
  }, 2000);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const phoneInput = form.querySelector("#phone-number");
  const codeInput = form.querySelector("#access-code");
  const wrongNumber = form.querySelector(".wrong-number");
  const wrongCode = form.querySelector(".wrong-code");

  const time = popUp.querySelector(".time");
  let phoneValue = phoneInput.value.trim();
  const codeValue = codeInput.value.trim();
  const isInvalidPhoneNum = phoneValue.length !== 9 || phoneValue === "";
  const isInvalidCode = codeValue.length !== 4 || codeValue === "";

  loader.style.display = "block";
  wrapperSection.style.filter = "brightness(50%)";
  if (isInvalidPhoneNum) {
    setTimeout((_) => {
      loader.style.display = "none";
      wrapperSection.style.filter = "brightness(100%)";
      wrongNumber.style.display = "flex";
    }, 2000);
  } else if (isInvalidCode) {
    setTimeout((_) => {
      loader.style.display = "none";
      wrongNumber.style.display = "none";

      wrapperSection.style.filter = "brightness(100%)";
      wrongCode.style.display = "flex";
    }, 2000);
  } else {
    setTimeout((_) => {
      popUp.style.display = "flex";
      time.textContent = Math.floor(Math.random() * 10) + 2;
      loader.style.display = "none";
      popUp.style.filter = "brightness(100%)";
      wrongCode.style.display = "none";
      wrongNumber.style.display = "none";
    }, 2000);
  }
  form.reset();
});

popUp.addEventListener("click", (e) => {
  const element = e.target.closest(".close-pop-up");
  const buttons = Array.from(wrapperSection.querySelectorAll(".btn"));
  if (!element) {
    return;
  }
  popUp.style.display = "none";
  wrapperSection.style.filter = "brightness(100%)";
  form.style.display = "none";
  buttons.forEach((button) => (button.style.display = "flex"));
});
