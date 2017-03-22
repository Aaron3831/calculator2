
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1, number2);
  $("#output").text(result);
  event.preventDefault();
  });

  $("form#sub").submit(function(event) {
  var number1 = parseInt($("#sub1").val());
  var number2 = parseInt($("#sub2").val());
  var resultSub = subtract(number1, number2);
  $("#outputsub").text(resultSub);
  event.preventDefault();
  });

  $("form#multi").submit(function(event) {
  var number1 = parseInt($("#multi1").val());
  var number2 = parseInt($("#multi2").val());
  var resultMulti = multiply(number1, number2);
  $("#outputmulti").text(resultMulti);
  event.preventDefault();
  });

  $("form#division").submit(function(event) {
  var number1 = parseInt($("#division1").val());
  var number2 = parseInt($("#division2").val());
  var resultDivision = divide(number1, number2);
  $("#outputdivision").text(resultDivision);
  event.preventDefault();
  });
});
