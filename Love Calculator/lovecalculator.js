let button = document.querySelector('button');


button.addEventListener('click', function (event) {


  event.preventDefault();

  const loveTable = [
    [85, 52, 15, 35, 43, 21, 98, 12, 11],
    [5, 100, 63, 17, 84, 25, 31, 82, 91],
    [51, 45, 33, 50, 20, 30, 40, 60, 18],
    [84, 81, 73, 29, 74, 12, 32, 96, 99],
    [47, 98, 65, 69, 79, 53, 57, 05, 03],
    [17, 13, 77, 33, 88, 55, 93, 82, 26],
    [15, 55, 05, 49, 87, 25, 95, 10, 75],
    [19, 54, 89, 67, 45, 78, 54, 43, 85],
    [56, 94, 49, 95, 07, 48, 37, 73, 58]
  ];

  let Score = 0;
  let name1 = document.getElementById('Name1').value;
  name1 = name1.toUpperCase();
  let name2 = document.getElementById('Name2').value;
  name2 = name2.toUpperCase();

  let ScoreFunction = function (name) {
    let NameArray = name.split('');
    for (i = 0; i < NameArray.length; i++) {
      if (NameArray[i].includes('A')) {
        Score += 1;
      } else if (NameArray[i].includes('E')) {
        Score += 5;
      } else if (NameArray[i].includes('I')) {
        Score += 9;
      } else if (NameArray[i].includes('O')) {
        Score += 6;
      } else if (NameArray[i].includes('U')) {
        Score += 3;
      }
     
    }
    return Score;
  }



  let Name1Score = ScoreFunction(name1);
  let Name2Score = ScoreFunction(name2);

  let SingleDigitSoulUrgeNumber = function (num) {
    let sum = 0;
    while (num > 0) {
      sum += parseInt(num % 10);
      num = parseInt(num / 10);
    }
    if (sum > 9) {
      sum = SingleDigitSoulUrgeNumber(sum);
    }
    return sum;
  }

  let Name1SoulUrgeNumber = SingleDigitSoulUrgeNumber(Name1Score);
  let Name2SoulUrgeNumber = SingleDigitSoulUrgeNumber(Name2Score);

  if (Name1SoulUrgeNumber > 0 & Name2SoulUrgeNumber > 0) {

    let index1 = Name1SoulUrgeNumber - 1;
    let index2 = Name2SoulUrgeNumber - 1;

    let lovePercent = loveTable[index1][index2];
    
    

    document.querySelector('h1').innerHTML = `Your love is ${lovePercent}%`;
    if (lovePercent >= 75) {
      document.querySelector('h2').innerHTML = `Wow - this is something special, in the words of God, you're "flawless" together!!`;
    } else if(lovePercent >= 60){
      document.querySelector('h2').innerHTML = `Your love needs a little more love.`;
    } else if (lovePercent >= 50){
      document.querySelector('h2').innerHTML = `With this compatibility score you guys aren't perfect for each other, but you can make it work!`;
    }
    else if (lovePercent < 50){
      document.querySelector('h2').innerHTML = `Damn, your compatibility is down the Earth. I wouldn't go for it, if I were you two.`;
    }

  } else {
    document.querySelector('h1').innerHTML = `Please, enter valid names!!!`;
  }

})

class Tool {
  // random number.
  static randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // random color rgb.
  static randomColorRGB() {
    return (
      "rgb(" +
      this.randomNumber(0, 255) +
      ", " +
      this.randomNumber(0, 255) +
      ", " +
      this.randomNumber(0, 255) +
      ")"
    );
  }
  // random color hsl.
  static randomColorHSL(saturation, lightness) {
    return (
      "hsl(" +
      this.randomNumber(0, 360) +
      ", " +
      saturation +
      "%, " +
      lightness +
      "%)"
    );
  }
}

/*
  When want to use Angle and radian.
*/

class Angle {
  constructor(a) {
    this.a = a;
    this.rad = this.a * Math.PI / 180;
  }
  
  incDec(num) {
    this.a += num;
    this.rad = this.a * Math.PI / 180;
  }
}

let canvas;

class Canvas {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.mouseX = null;
    this.mouseY = null;
    this.heartNum = 100;
    this.hearts = [];
    if (this.width < 768) {
      this.heartNum = 50;
    } else {
      this.heartNum = 100;
    }
  }

  init() {
    for (let i = 0; i < this.heartNum; i++) {
      const s = new Heart(
        this.ctx,
        Tool.randomNumber(0, this.width),
        Tool.randomNumber(this.height - this.height / 2, this.height),
        Tool.randomNumber(10, 80)
      );
      this.hearts.push(s);
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (let i = 0; i < this.hearts.length; i++) {
      this.hearts[i].render(i);
    }
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    if (this.width < 768) {
      this.heartNum = 50;
    } else {
      this.heartNum = 100;
    }
  }
}

class Heart {
  constructor(ctx, x, y, r) {
    this.ctx = ctx;
    this.init(x, y, r);
  }

  init(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r * 0.8;
    this.maxR = r;
    this.c = 'white';
    this.ga = Math.random();
    this.l = Tool.randomNumber(50, 500);
    this.sl = this.l;
    this.v = {
      r: 0,
      x: Tool.randomNumber(-1, 1) * Math.random(),
      y: -Math.random()
    };
  }

  draw() {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = this.ga;
    ctx.fillStyle = this.c;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y + this.r);
    ctx.bezierCurveTo(
      this.x - this.r - this.r / 5,
      this.y + this.r / 1.5,
      this.x - this.r,
      this.y - this.r,
      this.x,
      this.y - this.r / 3
    );
    ctx.bezierCurveTo(
      this.x + this.r,
      this.y - this.r,
      this.x + this.r + this.r / 5,
      this.y + this.r / 1.5,
      this.x,
      this.y + this.r
    );
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  stretch() {
    this.v.r += (this.maxR - this.r) * 0.1;
    this.v.r *= 0.9;
    this.r += this.v.r;
    if (this.l < 0) {
      this.l = Tool.randomNumber(50, 200);
      this.init(
        Tool.randomNumber(0, canvas.width),
        Tool.randomNumber(canvas.height - canvas.height / 2, canvas.height),
        Tool.randomNumber(10, 80)
      );
    }
  }

  updatePosition() {
    this.v.y -= 0.001;
    this.y += this.v.y;
    this.x += this.v.x;
  }

  updateParams() {
    const ratio = this.l / this.sl / 2;
    this.ga = ratio;
    this.l -= 1;
  }

  render() {
    this.updatePosition();
    this.updateParams();
    this.stretch();
    this.draw();
  }
}

(function () {
  "use strict";
  window.addEventListener("load", function () {
    canvas = new Canvas();
    canvas.init();
    function render() {
      window.requestAnimationFrame(function () {
        canvas.render();
        render();
      });
    }

    render();

    // event
    window.addEventListener(
      "resize",
      function () {
        canvas.resize();
        canvas.hearts = [];
        canvas.particles = [];
        canvas.init();
      },
      false
    );
  });
})();

