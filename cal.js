var op1 = prompt("Which operation?");
switch(op1) {
    case "add":
        var num1 = parseFloat(prompt("First value:"));
        var num2 = parseFloat(prompt("Second value:"));
        var result = num1 + num2;
        alert(num1 + " + " + num2 + " = " + result);
        break;
    case "subtract":
        var num1 = parseFloat(prompt("First value:"));
        var num2 = parseFloat(prompt("Second value:"));
        var result = num1 - num2;
        alert(num1 + " - " + num2 + " = " + result);
        break;
    case "multiply":
        var num1 = parseFloat(prompt("First value:"));
        var num2 = parseFloat(prompt("Second value:"));
        var result = num1 * num2;
        alert(num1 + " * " + num2 + " = " + result);
        break;
    case "divide":
        var num1 = parseFloat(prompt("First value:"));
        var num2 = parseFloat(prompt("Second value:"));
        var result = num1 / num2;
        alert(num1 + " / " + num2 + " = " + result);
        break;
    case "exponent":
        var num1 = parseFloat(prompt("First value:"));
        var num2 = parseFloat(prompt("Second value:"));
        var result = Math.pow(num1,num2);
        alert(num1 + " ^ " + num2 + " = " + result);
        break;
    default:
        alert("Option not available. Available options: add, subtract, multiply, divide, and exponent.");
}



