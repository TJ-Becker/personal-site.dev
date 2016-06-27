	'use strict';

	var left = document.getElementById("left");
	var middle = document.getElementById("middle");
	var right = document.getElementById("right");
	var answer = document.getElementById("answer");
	var number = document.getElementsByClassName("number");
	var operator = document.getElementsByClassName("operator");
	var final = document.getElementsByClassName("final");
	var special = document.getElementsByClassName("special");
	
	left.value = "";
	middle.value = "";
	right.value = "";

	function clickNumber() {
		var dataValue = this.getAttribute("data-value");
		if (answer.value != "") {
			left.value = "";
			answer.value = "";
			middle.value = "";
			right.value = "";
		}
		if (dataValue == ".") {
			console.log(dataValue);
			if (middle.value == "") {
				if (left.value.indexOf(".") < 0) {
					if (left.value == "") {
					left.value = 0 + dataValue;
					}
					else {
						left.value = left.value + dataValue;
					}
				}
			}
			else if (middle.value != "") {
				if (right.value.indexOf(".") < 0) {
					if (right.value == "") {
					right.value = 0 + dataValue;
					}
					else {
						right.value = right.value + dataValue;
					}
				}
			}
		} else if (middle.value == "") {
			left.value = left.value + dataValue;
		} else if (middle.value != "") {
			right.value = right.value + dataValue;
		}
	}

	function clickOperator() {
		var dataValue = this.getAttribute("data-value");
		middle.value = "";
		middle.value = middle.value + dataValue;
		if (answer.value != "") {
			left.value = answer.value;
			answer.value = "";
			right.value = "";
		}
		else if (left.value == "") {
			left.value = 0;
		}
	}

	function clickFinal() {
		var dataValue = this.getAttribute("data-value");
		if (dataValue == "C") {
			left.value = "";
			middle.value = "";
			right.value = "";
			answer.value = "";
		} else if (dataValue == "=") {
			var leftValue = Number(left.value);
			var rightValue = Number(right.value);
			var AnswerValue = Number(answer.value);
			answer.removeAttribute("hidden");
			if (right.value == "" && middle.value != "") {
				right.value = 0;
			} else if (right.value == "" && middle.value == "") {
				answer.value = left.value
			} else if (right.value == "") {
				right.value = 0;
			}

			if (middle.value == "+") {
				answer.value = (leftValue + rightValue);
			} else if (middle.value == "-") {
				answer.value = (leftValue - rightValue);
			} else if (middle.value == "*") {
				answer.value = (leftValue * rightValue);
			} else if (middle.value == "/") {
				if (right.value == "0") {
					alert("Cannot divide by 0.  Please enter a new value in the second field of the operation.");
					right.value = "";
				} else {
					answer.value = (leftValue / rightValue);
				}
			}
		}
	}

	function clickSpecial() {
		var dataValue = this.getAttribute("data-value");
		var leftValue = Number(left.value);
		var rightValue = Number(right.value);
		var answerValue = Number(answer.value);
		if (dataValue == "Neg") {
			if (answer.value == "") {
				if (middle.value == "") {
					if (left.value != "") {
					left.value = (leftValue * -1);
					}
				}
				else if (middle.value != "") {
					if (right.value != "") {
					right.value = (rightValue * -1);
					}
				}
			}
			else if (answer.value != "") {
				answer.value = (answerValue * -1);
			}
		}
		if (dataValue == "sqrt") {
			if (answer.value == "") {
				if (middle.value == "") {
					if (left.value != "") {
						if (leftValue > -1) {
							left.value = (Math.sqrt(leftValue));
						} else if (leftValue < 0) {
							alert("Cannot square root a negative number.  Please try a new number.")
						}
					}
				}
				else if (middle.value != "") {
					if (right.value != "") {
						if (rightValue > -1) {
							right.value = (Math.sqrt(rightValue));
						} else if (rightValue < 0) {
							alert("Cannot square root a negative number.  Please try a new number.")
						}
					}
				}
			}
			else if (answer.value != "") {
				if (answer.value != "") {
					if (answerValue > -1) {
						answer.value = (Math.sqrt(answerValue));
					} else if (answerValue < 0) {
						alert("Cannot square root a negative number.  Please try a new number.")
					}
				}
			}
		}
	}

	for (var i = 0; i < number.length; i++) {
		number[i].addEventListener('click', clickNumber, false);
	}

	for (var i = 0; i < operator.length; i++) {
		operator[i].addEventListener('click', clickOperator, false);
	}

	for (var i = 0; i < final.length; i++) {
		final[i].addEventListener('click', clickFinal, false);
	}

	for (var i = 0; i < special.length; i++) {
		special[i].addEventListener('click', clickSpecial, false);
	}


