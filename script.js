const cardNumber = document.querySelector(".cardNumber");
const inputNumber = document.getElementById("cNumber");

const cardName = document.querySelector(".personName");
const inputName = document.getElementById("cName");

const cardMonth = document.querySelector(".personM");
const inputMonth = document.getElementById("cMonth");

const cardYear = document.querySelector(".personY");
const inputYear = document.getElementById("cYear");

const cardCvv = document.querySelector(".personCvv");
const inputCvv = document.getElementById("cCvv");

const thankYou = document.querySelector(".thankYou");
let form = document.getElementById("form");
let submit = document.getElementById("submit");

const nameError = document.querySelector(".nameError");
const numberError = document.querySelector(".numberError");
const cvvError = document.querySelector(".cvvError");
const MonthError = document.querySelector(".MonthError");
const yearError = document.querySelector(".yearError");

//Submit button click event

submit.addEventListener("click", () => {
  //Card holder validation
  if (!inputName.value) {
    inputName.classList.add("req");
    nameError.textContent = "Can't be blanked";
  } else {
    inputName.classList.remove("req");
    thankYou.classList.remove("thankYou");
    nameError.textContent = "";
  }

  //Card Number validation

  if (!inputNumber.value) {
    inputNumber.classList.add("req");
    numberError.textContent = "Can't be blanked";
  } else if (inputNumber.value.length < 16) {
    inputNumber.classList.add("req");
    numberError.textContent = "Can't be less than 16";
  } else {
    inputNumber.classList.remove("req");
    numberError.textContent = "";
    thankYou.classList.remove("thankYou");
  }

  //Card Month Validation

  if (!inputMonth.value) {
    inputMonth.classList.add("req");
    MonthError.textContent = "Can't be blanked";
  } else if (inputMonth.value > 12) {
    inputMonth.classList.add("req");
    MonthError.textContent = "Can't be more than 12";
  } else {
    inputMonth.classList.remove("req");
    thankYou.classList.remove("thankYou");
    MonthError.textContent = "";
  }

  //Card Year Validation

  if (!inputYear.value) {
    inputYear.classList.add("req");
    yearError.textContent = "Can't be blanked";
  } else {
    inputYear.classList.remove("req");
    thankYou.classList.remove("thankYou");
    yearError.textContent = "";
  }

  //Card CVV Validation

  if (!inputCvv.value) {
    inputCvv.classList.add("req");
    cvvError.textContent = "Can't be blanked";
  } else if (inputCvv.value.length < 3) {
    inputCvv.classList.add("req");
    cvvError.textContent = "Can't be less than 3";
  } else {
    inputCvv.classList.remove("req");
    cvvError.textContent = "";
    thankYou.classList.remove("thankYou");
  }
});

//Card Number function

function setCardNumber(e) {
  if (!inputNumber.value) {
    cardNumber.innerText = "0000 0000 0000 0000";
  } else {
    cardNumber.innerText = format(e.target.value);
  }
}

//Card Name function

function setCardName(e) {
  if (!inputName.value) {
    cardName.innerText = "JANE APPLESEED";
  } else {
    cardName.innerText = format1(e.target.value);
  }
}

//Card Month function

function setCardMonth(e) {
  if (!inputMonth.value) {
    cardMonth.innerText = "00";
  } else {
    cardMonth.innerText = e.target.value;
  }
}

//Card Year function

function setCardYear(e) {
  if (!inputYear.value) {
    cardYear.innerText = "00";
  } else {
    cardYear.innerText = e.target.value;
  }
}

//Card CVV function

function setCardCvv(e) {
  if (!inputCvv.value) {
    cardCvv.innerText = "000";
  } else {
    cardCvv.innerText = e.target.value;
  }
}

//Card Number format function

function format(s) {
  return s
    .toString()
    .replace(/\D/g, "")
    .replace(/(\d{4})/g, "$1 ");
}

//Card holder Name format function

function format1(s) {
  return s.toString().toUpperCase();
}

//input events

inputNumber.addEventListener("keyup", setCardNumber);
inputName.addEventListener("keyup", setCardName);
inputMonth.addEventListener("keyup", setCardMonth);
inputYear.addEventListener("keyup", setCardYear);
inputCvv.addEventListener("keyup", setCardCvv);

//Card number input validation

// Listen for "input" events on the input field
inputNumber.addEventListener("input", function (event) {
  // Get the current value of the input field
  const currentValue = event.target.value;

  // Remove all non-numeric characters from the input field
  const numericValue = currentValue.replace(/[^0-9]/g, "");

  // Set the value of the input field to the numeric value
  event.target.value = numericValue;
});

//Card holder name input validation

inputName.addEventListener("input", function (event) {
  const currentValue = event.target.value;
  const numericValue = currentValue.replace(/[0-9]/g, "");
  event.target.value = numericValue;
});

//Card month input validation

inputMonth.addEventListener("input", function (event) {
  const currentValue = event.target.value;
  const numericValue = currentValue.replace(/[^0-9]/g, "");
  event.target.value = numericValue;
});

//Card year input validation

inputYear.addEventListener("input", function (event) {
  const currentValue = event.target.value;
  const numericValue = currentValue.replace(/[^0-9]/g, "");
  event.target.value = numericValue;
});

//Card Cvv input validation

inputCvv.addEventListener("input", function (event) {
  const currentValue = event.target.value;
  const numericValue = currentValue.replace(/[^0-9]/g, "");
  event.target.value = numericValue;
});
