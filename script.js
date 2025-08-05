function runQuestion(qNum) {
    if (qNum === 1) {
    var a = +prompt("Enter First Number:");
    var b = +prompt("Enter Second Number:");
    alert("Sum: " + (a + b));
    }

    else if (qNum === 2) {
    var a = +prompt("Enter First Number:");
    var b = +prompt("Enter Second Number:");
    var c = +prompt("Enter third Number:");
    alert("Total Sum:" + (a + b + c));
}

else if (qNum === 3) {
    var a = +prompt("Enter First Number:");
    var b = +prompt("Enter Second Number:");
    alert("Result:" + (a + b));
}

else if (qNum === 4) {
    var a = +prompt("Enter First Number:");
    var b = +prompt("Enter Second Number:");
    alert("Sum: " + (a + b));
    alert("Difference: " + (a - b));
    alert("Product:" + (a * b));
    alert("Quotient: " + (a / b));
}

else if (qNum === 5) {
    var name = prompt("Enter your name:");
    var a = +prompt("Enter first Number:");
    var b = +prompt("Enter Second Number:");
    alert(name + ", Sum is: " + (a + b));
}

else if (qNum === 6) {
    var a = prompt("Enter first Number:");
    var b = prompt("Enter Second Number:");
    alert("Sum is: " + (a + b));
}

else if (qNum === 7) {
    var a = prompt("Enter first Number:");
    var b = prompt("Enter Second Number:");
    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numbers.");
    } 
    else {
    alert("Sum is: " + (+a + +b));
    }
}

else if (qNum === 8) {
    var a = +prompt("Enter a Number:");
    alert ("After adding 10: " + (a + 10));
}

else if (qNum === 9) {
    var a = +prompt("Enter first Number:");
    var b = +prompt("Enter Second Number:");
    var sum = a + b;
    if (sum % 2 === 0) {
        alert("Sum is Even.");
    } 
    else {
        alert("Sum is Odd.");
    }
}

else if (qNum === 10) {
    var a = +prompt("Enter first Number:");
    var op = prompt("Enter operator (+, -, *, /):");
    var b = +prompt("Enter second Number:");
    if (op === "+") alert("Result:" + (a + b));
    else if (op === "-") alert("Result:" + (a - b));
    else if (op === "*") alert("Result:" + (a * b));
    else if (op === "/") alert("Result:" + (a / b));
    else alert("Invalid operator.");
}
    else {
    alert("Invalid question number.");
}

}



