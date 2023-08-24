//cardholder name
const cardHolderName = document.querySelector("#cardholder-name")
const cardHolderNameDisplay = document.querySelector("#cardholdername")

//cardnumber
const cardNumber = document.querySelector("#cardnumber-field")
const cardNumberDisplay = document.querySelector("#card-number")

//card month
const cardMonth = document.querySelector("#cardMonth-field")
const cardMonthDisplay = document.querySelector("#cardMonth")
//card year
const cardYear = document.querySelector("#cardYear-field")
const cardYearDisplay = document.querySelector("#cardYear")
//CVC
const cvc = document.querySelector("#cvc-field")
const cvcDisplay = document.querySelector("#cvc")
//FORM
const form = document.querySelector("#form")

//completed state section
const completedState = document.querySelector("#completedState")
completedState.classList.add("hidden")

//VALIDATIONS
//for linear gradient border on each inputs
document.querySelectorAll("input").forEach((elem) => {
  elem.addEventListener("focusin", function () {
    if (!this.parentNode.classList.contains("invalid")) {
      this.parentNode.style.backgroundImage =
        "linear-gradient(to right, blue, purple)"
      this.parentNode.lastElementChild.innerHTML = ""
    }
  })
  elem.addEventListener("focusout", function () {
    if (!this.parentNode.classList.contains("invalid")) {
      this.parentNode.style.backgroundImage = "none"
    }
  })
})
let success = true

//Display error
const setError = (target, message) => {
  const element = document.getElementById(target)
  element.querySelector(".form-error").innerHTML = message
  console.log(element)
  element.style.backgroundImage = "linear-gradient(to right,red,red)"
  success = false
}
function resetErrors() {
  document.querySelectorAll(".form-error").forEach((el) => (el.innerHTML = ""))
  success = true
}
//ON SUBMIT
form.addEventListener("submit", function (e) {
  e.preventDefault()
  resetErrors()
  //FOR CARDHOLDER NAME
  if (cardHolderName.value == "") {
    setError("name", "Can't be empty")
  }
  if (cardHolderName.value.search(/\d/) != -1) {
    setError("name", "Cannot contain numbers in name!")
  }
  //FOR CARD NUMBER
  if (cardNumber.value.search(/[^0-9 ]/) != -1) {
    setError("number", "Wrong format, numbers only!")
  }
  if (cardNumber.value == "") {
    setError("number", "Cannot be empty")
  }

  //FOR EXP DATE
  // const month = frm.expDate[0]
  // const year = frm.expDate[1]
  //FOR MONTH
  if (cardMonth.value == "") {
    setError("month", "Cant be blank")
  } else if (cardMonth.value.match(/^[0-9]+$/) == null) {
    setError("month", "Invalid date")
  }

  //FOR YEAR
  // year.value.match(/^[0-9]+$/) == null
  if (cardYear.value == "") {
    setError("year", "Can't be blank")
  } else if (cardYear.value.match(/^[0-9]+$/) == null) {
    setError("year", "Invalid date")
  }

  //for cvc
  if (cvc.value == "") {
    setError("cvcNumber", "Can't be blank")
  } else if (cvc.value.search(/[^0-9 ]/) != -1) {
    setError("cvcNumber", "Wrong format, numbers only!")
  }

  if (success) {
    this.reset()
    formCompleted()
  }
})

//for card holder name
cardHolderName.addEventListener("keyup", function () {
  cardHolderNameDisplay.innerHTML = this.value
})

//for card number format
cardNumber.addEventListener("keyup", function () {
  const valueInput = this.value.replaceAll(" ", "")
  if (this.value.length > 14) {
    this.value = valueInput.replace(/(\w{4})(\w{4})(\w{4})/, "$1 $2 $3 ")
    cardNumberDisplay.innerHTML = this.value
  } else if (this.value.length > 9) {
    this.value = valueInput.replace(/(\w{4})(\w{4})/, "$1 $2 ")
    cardNumberDisplay.innerHTML = this.value
  } else if (this.value.length > 4) {
    this.value = valueInput.replace(/(\w{4})/, "$1 ")
    cardNumberDisplay.innerHTML = this.value
  } else if (this.value.length <= 4 && this.value.length != 0) {
    cardNumberDisplay.innerHTML = this.value
  } else {
    cardNumberDisplay.innerHTML = "0000 0000 0000 0000"
  }
})

//for card month
cardMonth.addEventListener("keyup", function () {
  cardMonthDisplay.innerHTML = this.value
})

//for card year
cardYear.addEventListener("keyup", function () {
  cardYearDisplay.innerHTML = this.value
})

//for cvc
cvc.addEventListener("keyup", function () {
  cvcDisplay.innerHTML = this.value
})

function formCompleted() {
  form.classList.add("hidden")
  completedState.classList.remove("hidden")
}

completedState.querySelector("button").addEventListener("click", function () {
  form.classList.remove("hidden")
  console.log(completedState)
  completedState.classList.add("hidden")
})
