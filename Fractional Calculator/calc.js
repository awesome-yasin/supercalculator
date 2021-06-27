var Fraction = function (numerator, denominator) {
    this.init(numerator, denominator);
    return this;
};
Fraction.prototype = {
    constructor: Fraction,

    init: function (numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
        this.validate();
    },

    // add fraction to DOM
    createDom: function () {
        var self = this;
        var container = document.createElement('div');
        container.className = "fraction";
       
        var numeratorInput = document.createElement('input');
        numeratorInput.type = "number";
        numeratorInput.value = this.numerator || '';
        numeratorInput.onchange = function () {
            self.numerator = parseInt(this.value);
            calc();
        };
        container.appendChild(numeratorInput);

        container.appendChild(document.createElement('hr'));

        var denominatorInput = document.createElement('input');
        denominatorInput.type = "number";
        denominatorInput.value = this.denominator || '';
        denominatorInput.onchange = function () {
            self.denominator = parseInt(this.value);
            calc();
        };
        container.appendChild(denominatorInput);

        return container;
    },

    // addition
    add: function (argument) {
        var num = this.numerator * argument.denominator + argument.numerator * this.denominator,
            den = this.denominator * argument.denominator;
        return new Fraction(num, den);
    },

    // subtraction
    subtract: function (argument) {
        var num = this.numerator * argument.denominator - argument.numerator * this.denominator,
            den = this.denominator * argument.denominator;
        return new Fraction(num, den);
    },

    // multiplication
    multiply: function (argument) {
        var num = this.numerator * argument.numerator,
            den = this.denominator * argument.denominator;
        return new Fraction(num, den);
    },

    // division
    divide: function (argument) {
        var num = this.numerator * argument.denominator,
            den = this.denominator * argument.numerator;
        return new Fraction(num, den);
    },

    simplify: function () {
        if (this.numerator < 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        var gcd = this.gcd(this.numerator, this.denominator);
        this.numerator /= gcd;
        this.denominator /= gcd;
    },

    // greatest common divisor
    gcd: function (a, b) {
        if (typeof a != 'number' || typeof b != 'number')
            throw "Impossible to find GCD for " + a + " and " + b;
        if (a < b) {
            var temp = b;
            b = a;
            a = temp;
        }
        if (b == 0)
            return 1;
        var divider = b;
        while (a % b != 0) {
            var temp = b;
            b = a % b;
            a = temp;
            divider = b;
        }
        return divider;
    },

    validate: function () {
        if (this.denominator == 0)
            throw "Division by zero";
    }
};


// add new fraction
function addFraction() {
    var container = document.getElementById('data-in'),
        options = ['+', '-', '*', '/'];

    if (fractions.length > 0) {
        var operation = document.createElement('select');
        for (var i = 0; i < options.length; i++) {
            operation.options[i] = new Option(options[i], options[i]);
        }        
        operation.onchange = calc;
        container.appendChild(operation);
        operations.push(operation);
    }

    var fraction = new Fraction();
    container.appendChild(fraction.createDom());
    fractions.push(fraction);
    calc();
}

// calculating result
function calc() {
    var fractionsTemp = fractions.slice(),
        operationsTemp = operations.slice(),
        result = {
            numerator: document.getElementById('resultNumerator'),
            denominator: document.getElementById('resultDenominator')
        };

    document.getElementById('error').innerHTML = '';
    result.numerator.value = '';
    result.denominator.value = '';
    
    try {
        // check input
        for (var i = 0; i < fractionsTemp.length; i++) {
            if (typeof fractionsTemp[i].numerator == 'undefined' || typeof fractionsTemp[i].denominator == 'undefined'
                || isNaN(fractionsTemp[i].numerator) || isNaN(fractionsTemp[i].denominator))
                return false;
            fractionsTemp[i].validate();
        }

        // * and /
        loop:
            for (var i = 0; i < operationsTemp.length; i++) {
                switch (operationsTemp[i].value) {
                    case '*':
                        fractionsTemp[i] = fractionsTemp[i].multiply(fractionsTemp[i + 1]);
                        break;
                    case '/':
                        fractionsTemp[i] = fractionsTemp[i].divide(fractionsTemp[i + 1]);
                        break;
                    default:
                        continue loop;
                }
                operationsTemp.splice(i, 1);
                fractionsTemp.splice(i + 1, 1);
                i--;
            }

        // + and -
        loop:
            for (var i = 0; i < operationsTemp.length; i++) {
                switch (operationsTemp[i].value) {
                    case '+':
                        fractionsTemp[i] = fractionsTemp[i].add(fractionsTemp[i + 1]);
                        break;
                    case '-':
                        fractionsTemp[i] = fractionsTemp[i].subtract(fractionsTemp[i + 1]);
                        break;
                    default:
                        throw "Illegal operation: " + operationsTemp[i].value;
                }
                operationsTemp.splice(i, 1);
                fractionsTemp.splice(i + 1, 1);
                i--;
            }

        //show result
        fractionsTemp[0].simplify();
        result.numerator.value = fractionsTemp[0].numerator;
        result.denominator.value = fractionsTemp[0].denominator;
    } catch (e) {
        showError(e);
    }

    return false;
}

// show error message
function showError(e) {
    document.getElementById('error').innerHTML = e;
}


//----------------------------------------------
var fractions = [],     // input fractions array
    operations = [];    // operator select array

window.onload = function () {
    // create 2 start fractions
    addFraction();
    addFraction();

    document.forms['calc'].onsubmit = calc;
    document.getElementById('add-button').onclick = addFraction;
};