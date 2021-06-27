var UI = {
    human : {
        io      : document.querySelector('.human .io'),
        figure  : document.querySelector('.human .face')
    },
    machine : {
        io      : document.querySelector('.machine .io'),
        figure  : document.querySelector('.machine .face')
    }
};


var App = {

    init : function () {
        this.bindEvents();
        UI.human.io.textContent = "Made By Yasin"
        UI.machine.io.innerHTML = this.toBinary( UI.human.io.textContent );
    },

    bindEvents : function () {
        var _this = this;

        helpers.addEvent(UI.human.io, "keyup", function (ev) {
           
           
            UI.machine.io.innerHTML = _this.toBinary( UI.human.io.textContent );
        });

        helpers.addEvent(UI.machine.io, "keyup", function (ev) {
           
            UI.human.io.innerHTML = _this.toHuman( UI.machine.io.textContent );
        });
    },

    toBinary : function (text) {
        var _this   = this,
            length  = text.length,
            binary  = "";
        for (var i = 0; i < length; i += 1) {
            binary += _this.pad( (text.charCodeAt(i)).toString(2) ) + " ";
        }
        return binary;
    },

    toHuman : function (text) {
        var arr = text.trim().split(/\s+/ig),
            result = "";
        arr.forEach(function(a) {
            result += String.fromCharCode( parseInt( a, 2 ));
        });
        return result;
    },

    pad : function (number) {
        var eight = number;
        while (eight.length < 8) {
            eight = '0' + eight;
        }
        return eight;
    }
};

var helpers = {
    addEvent : function (obj, type, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(type, fn, false);
        } else if (obj.attachEvent) {
            obj['e' + type + fn] = fn;
            obj[type + fn] = function() {
                obj['e' + type + fn](window.event);
            };
            obj.attachEvent("on" + type, obj[type + fn]);
        }
    },
    triggerEvent : function (el, type) {
        if ((el[type] || false) && typeof el[type] == 'function') {
            el[type](el);
        }
    }
};

App.init();




function process() {
    if (document.getElementById("bin").checked) {
        handle_bin()
    } else if (document.getElementById("dec").checked) {
        handle_dec()
    } else if (document.getElementById("hex").checked) {
        handle_hex()
    } else if (document.getElementById("oct").checked) {
        handle_oct()
    }
}

function handle_bin() {
    var x;
    x = converttodec(2, 1);
    if (document.getElementById("opdec").checked) {
        var y;
        y = converttodec(10, 2)
    } else if (document.getElementById("ophex").checked) {
        var y;
        y = converttodec(16, 2)
    } else if (document.getElementById("opoct").checked) {
        var y;
        y = converttodec(8, 2)
    } else if (document.getElementById("opbin").checked) {
        var y;
        y = converttodec(2, 2)
    }
    output(x, y)
}

function handle_dec() {
    var x;
    x = converttodec(10, 1);
    if (document.getElementById("opdec").checked) {
        var y;
        y = converttodec(10, 2)
    } else if (document.getElementById("ophex").checked) {
        var y;
        y = converttodec(16, 2)
    } else if (document.getElementById("opoct").checked) {
        var y;
        y = converttodec(8, 2)
    } else if (document.getElementById("opbin").checked) {
        var y;
        y = converttodec(2, 2)
    }
    output(x, y)
}

function handle_hex() {
    var x = converttodec(16, 1);
    if (document.getElementById("opdec").checked) {
        var y;
        y = converttodec(10, 2)
    } else if (document.getElementById("ophex").checked) {
        var y;
        y = converttodec(16, 2)
    } else if (document.getElementById("opoct").checked) {
        var y;
        y = converttodec(8, 2)
    } else if (document.getElementById("opbin").checked) {
        var y;
        y = converttodec(2, 2)
    }
    output(x, y)
}

function handle_oct() {
    var x;
    x = converttodec(8, 1);
    if (document.getElementById("opdec").checked) {
        var y;
        y = converttodec(10, 2)
    } else if (document.getElementById("ophex").checked) {
        var y;
        y = converttodec(16, 2)
    } else if (document.getElementById("opoct").checked) {
        var y;
        y = converttodec(8, 2)
    } else if (document.getElementById("opbin").checked) {
        var y;
        y = converttodec(2, 2)
    }
    output(x, y)
}

function converttobin(r, option) {
    if (option == 1) var no = document.getElementById("box1");
    else if (option == 2) var no = document.getElementById("box2");
    var y = parseInt(no.value, r);
    var z = y.toString(2);
    return z
}

function converttodec(r, option) {
    if (option == 1) var no = document.getElementById("box1");
    else if (option == 2) var no = document.getElementById("box2");
    var y = parseInt(no.value, r);
    var z = y.toString(10);
    return z
}

function converttohex(r, option) {
    if (option == 1) var no = document.getElementById("box1");
    else if (option == 2) var no = document.getElementById("box2");
    var y = parseInt(no.value, r);
    var z = y.toString(16);
    return z
}

function converttooct(r, option) {
    if (option == 1) var no = document.getElementById("box1");
    else if (option == 2) var no = document.getElementById("box2");
    var y = parseInt(no.value, r);
    var z = y.toString(8);
    return z
}

function output(x, y) {
    var a = parseInt(x);
    var b = parseInt(y);
    var z;
    if (document.getElementById("add").checked) z = a + b;
    else if (document.getElementById("sub").checked) z = a - b;
    else if (document.getElementById("mul").checked) z = a * b;
    else if (document.getElementById("div").checked) z = a / b;
    if (document.getElementById("fdec").checked) {
        var fans = document.getElementById("ans");
        fans.innerHTML = z
    } else if (document.getElementById("fhex").checked) {
        var ans = z.toString(16);
        var fans = document.getElementById("ans");
        fans.innerHTML = ans
    } else if (document.getElementById("foct").checked) {
        var ans = z.toString(8);
        var fans = document.getElementById("ans");
        fans.innerHTML = ans
    } else if (document.getElementById("fbin").checked) {
        var ans = z.toString(2);
        var fans = document.getElementById("ans");
        fans.innerHTML = ans
    }
}

function clr() {
    var fans = document.getElementById("ans");
    var b1 = document.getElementById("box1");
    var b2 = document.getElementById("box2");
    fans.innerHTML = "";
    b1.value = "";
    b2.value = ""
}









let binaryOutput = document.querySelector('#binary');
let decimalOutput = document.querySelector('#decimal');
let hexOutput = document.querySelector('#hexadecimal');

document.querySelector('#bToD').addEventListener('click', () => convertBit(binaryOutput.value, 'bOutput', 'binary', 'decimal'));
document.querySelector('#bToH').addEventListener('click', () => convertBit(binaryOutput.value, 'bOutput', 'binary', 'hex'));
document.querySelector('#dToB').addEventListener('click', () => convertBit(decimalOutput.value, 'dOutput', 'decimal', 'binary'));
document.querySelector('#dToH').addEventListener('click', () => convertBit(decimalOutput.value, 'dOutput', 'decimal', 'hex'));
document.querySelector('#hToB').addEventListener('click', () => convertBit(hexOutput.value, 'hOutput', 'hex', 'binary'));
document.querySelector('#hToD').addEventListener('click', () => convertBit(hexOutput.value, 'hOutput', 'hex', 'decimal'));
function selectText(containerid) {
    if (document.selection) { // IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}
function convertBit(src, output, from, to) {
    switch (from) {
        case 'binary':
            document.getElementById(output).textContent = to === 'decimal' ? binToDec(src) : binToHex(src);
            break;
        case 'decimal':
            document.getElementById(output).textContent = to === 'binary' ? decToBin(src) : decToHex(src);
            break;
        case 'hex':
            document.getElementById(output).textContent = to === 'binary' ? hexToBin(src) : hexToDec(src);
            break;
    }
}

function binToDec(src) {
    let answer = 0;
    let n = 0;
    let srcString = src.toString();
    
    for (let i = srcString.length - 1; i >= 0; i--) {
        answer += srcString[i] * 2 ** n;
        n++;
    }

    return answer;
}

function binToHex(src) {
    const baseMap = {
        '0000': '0',
        '0001': '1',
        '0010': '2',
        '0011': '3',
        '0100': '4',
        '0101': '5',
        '0110': '6',
        '0111': '7',
        '1000': '8',
        '1001': '9',
        '1010': 'A',
        '1011': 'B',
        '1100': 'C',
        '1101': 'D',
        '1110': 'E',
        '1111': 'F'
    };

    let i;
    let answer = '';
    let rem = '';
    const len = 4;
    const srcString = src.toString();

    for (i = srcString.length; i >= len; i -= len) {
        if (i - len < srcString.length) {
            answer = baseMap[srcString.substr(i - len, len)] + answer;
        }
    }
    
    if (i !== 0) {
        rem = srcString.substr(0, i);
        while (rem.length < 4) {
            rem = '0' + rem;
        }
        answer = baseMap[rem] + answer;
    }

    return answer;
}

function decToBin(src) {
    let n = 0;
    let answer = '';

    while (2 ** (n) < src) n++;
    
    for (n; n >= 0; n--) {
        if (2 ** n <= src) {
            answer += '1';
            src = src % 2 ** n;
        } else {
            answer += answer === '' ? '' : '0';
        }
    }
    return answer;
}

function decToHex(src) {
    const baseMap = {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': 'A',
        '11': 'B',
        '12': 'C',
        '13': 'D',
        '14': 'E',
        '15': 'F'
    };

    let n = 0;
    let answer = '';
    const base = 16;

    while (base ** (n + 1) < src) n++;

    for (n; n >= 0; n--) {
        if (base ** n <= src) {
            answer += baseMap[Math.floor(src / base ** n).toString()];
            src = src - Math.floor(src / base ** n) * (base ** n);
        } else {
            answer += '0';
        }
    }
    
    return answer;
}

function hexToBin(src) {
    const baseMap = {
        '0': '0000',
        '1': '0001',
        '2': '0010',
        '3': '0011',
        '4': '0100',
        '5': '0101',
        '6': '0110',
        '7': '0111',
        '8': '1000',
        '9': '1001',
        'A': '1010',
        'B': '1011',
        'C': '1100',
        'D': '1101',
        'E': '1110',
        'F': '1111'
    };

    let srcString = src.toString().toUpperCase();
    let answer = '';

    for (let i = 0; i < srcString.length; i++) {
        answer += baseMap[srcString[i]];
    }
    
    return answer;
}

function hexToDec(src) {
    const baseMap = {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        'A': '10',
        'B': '11',
        'C': '12',
        'D': '13',
        'E': '14',
        'F': '15'
    };

    let srcString = src.toString().toUpperCase();
    let answer = 0;

    for (let i = 0; i < srcString.length; i++) {
        answer += baseMap[srcString[i]] * (16 ** (srcString.length - 1 - i))
    }

    return answer;
}

