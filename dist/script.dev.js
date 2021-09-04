"use strict";

var calculatorScreen = document.querySelector('.calculator-screen');

var updateScreen = function updateScreen(number) {
  calculatorScreen.value = number;
};

var numbers = document.querySelectorAll(".number");
numbers.forEach(function (number) {
  number.addEventListener("click", function (event) {
    updateScreen(event.target.value);
  });
});
var prevInput = '0';
var calculationOperator = '';
var currentInput = '0';

var inputNumber = function inputNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
};

numbers.forEach(function (number) {
  number.addEventListener("click", function (event) {
    inputNumber(event.target.value);
    updateScreen(currentInput);
  });
});
var operators = document.querySelectorAll(".operator");
operators.forEach(function (operator) {
  operator.addEventListener("click", function (event) {
    inputOperator(event.target.value);
  });
});

var inputOperator = function inputOperator(operator) {
  prevInput = currentInput;
  calculationOperator = operator;
  currentInput = '0';
};

var equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener("click", function () {
  calculate();
  updateScreen(currentInput);
});

var calculate = function calculate() {
  var result = 0;

  switch (calculationOperator) {
    case '+':
      result = parseInt(prevInput) + parseInt(currentInput);
      break;

    case '-':
      result = parseInt(prevInput) - parseInt(currentInput);
      break;

    case '*':
      result = parseInt(prevInput) * parseInt(currentInput);
      break;

    case '/':
      result = parseInt(prevInput) / parseInt(currentInput);
      break;

    default:
      return;
  }

  currentInput = result.toString();
  calculationOperator = '';
};

var clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", function () {
  clearAll();
  updateScreen(currentInput);
});

var clearAll = function clearAll() {
  prevInput = '0';
  currentInput = '0';
  calculationOperator = '';
};

var decimal = document.querySelector(".decimal");
decimal.addEventListener('click', function (event) {
  inputDecimal(event.target.value);
});

inputDecimal = function inputDecimal(dot) {
  if (currentInput.includes(".")) {
    return;
  }

  currentInput += dot;
};