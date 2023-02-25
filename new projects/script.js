// Animation 1

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

let mouse = {
  x: null,
  y: null,
  radius: (canvas.height / 180) * (canvas.width / 80),
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = "#00F0FF"; //change color of dots
    ctx.fill();
  }

  update() {
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }

    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10;
      }
      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        this.y += 10;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

function init() {
  particlesArray = [];
  let numberOfParticles = (canvas.height * canvas.width) / 9000;
  for (let i = 0; i < numberOfParticles; i++) {
    //set no. of particles
    let size = Math.random() * 5 + 1;
    let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
    let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
    let directionX = Math.random() * 5 - 2.5;
    let directionY = Math.random() * 5 - 2.5;
    let color = "#00f0ff"; //change color of dots

    particlesArray.push(
      new Particle(x, y, directionX, directionY, size, color)
    );
  }
}

function connect() {
  let opacityValue = 1; //Change opacity value
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance =
        (particlesArray[a].x - particlesArray[b].x) *
          (particlesArray[a].x - particlesArray[b].x) +
        (particlesArray[a].y - particlesArray[b].y) *
          (particlesArray[a].y - particlesArray[b].y);
      if (distance < (canvas.width / 7) * (canvas.height / 7)) {
        opacityValue = 1 - distance / 20000;
        ctx.strokeStyle = "rgba(255,255,255," + opacityValue + ")"; //change color of line
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  connect();
}

window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  mouse.radius = (canvas.height / 80) * (canvas.width / 80);
  init();
});

window.addEventListener("mouseout", function () {
  mouse.x = undefined;
  mouse.y = undefined;
});

init();
animate();

// Animation 2 :

// var w, h, loopId, id, canvas, ctx, particles;

// var options = {
//   particleColor: "rgba(255,255,255)",
//   lineColor: "rgba(0,181,255)",
//   particleAmount: 40,
//   defaultRadius: 2,
//   variantRadius: 2,
//   defaultSpeed: 1,
//   variantSpeed: 1,
//   linkRadius: 300,
// };

// var rgb = options.lineColor.match(/\d+/g);

// document.addEventListener("DOMContentLoaded", init);

// function init() {
//   canvas = document.getElementById("canvas1");
//   ctx = canvas.getContext("2d");
//   resizeReset();
//   initialiseElements();
//   startAnimation();
// }

// function resizeReset() {
//   w = canvas.width = window.innerHeight;
//   h = canvas.height = window.innerHeight;
// }

// function initialiseElements() {
//   particles = [];
//   for (var i = 0; i < options.particleAmount; i++) {
//     particles.push(new Particle());
//   }
// }

// function startAnimation() {
//   loopId = requestAnimationFrame(animationLoop);
// }

// function animationLoop() {
//   ctx.clearRect(0, 0, w, h);
//   drawScene();

//   id = requestAnimationFrame(animationLoop);
// }

// function drawScene() {
//   drawLine();
//   drawParticle();
// }

// function drawParticle() {
//   for (var i = 0; i < particles.length; i++) {
//     particles[i].update();
//     particles[i].draw();
//   }
// }

// function drawLine() {
//   for (var i = 0; i < particles.length; i++) {
//     linkPoints(particles[i], particles);
//   }
// }

// function linkPoints(point, hubs) {
//   for (var i = 0; i < hubs.length; i++) {
//     var distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
//     var opacity = 1 - distance / options.linkRadius;
//     if (opacity > 0) {
//       ctx.lineWidth = 0.5;
//       ctx.strokeStyle =
//         "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + opacity + ")";
//       ctx.beginPath();
//       ctx.moveTo(point.x, point.y);
//       ctx.lineTo(hubs[i].x, hubs[i].y);
//       ctx.closePath();
//       ctx.stroke();
//     }
//   }
// }

// function checkDistance(x1, y1, x2, y2) {
//   return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// }

// Particle = function () {
//   var _this = this;

//   _this.x = Math.random() * w;
//   _this.y = Math.random() * h;
//   _this.color = options.particleColor;
//   _this.radius = options.defaultRadius + Math.random() * options.variantRadius;
//   _this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
//   _this.directionAngle = Math.floor(Math.random() * 360);
//   _this.vector = {
//     x: Math.cos(_this.directionAngle) * _this.speed,
//     y: Math.sin(_this.directionAngle) * _this.speed,
//   };

//   _this.update = function () {
//     _this.border();
//     _this.x += _this.vector.x;
//     _this.y += _this.vector.y;
//   };

//   _this.border = function () {
//     if (_this.x >= w || _this.x <= 0) {
//       _this.vector.x *= -1;
//     }
//     if (_this.y >= h || _this.y <= 0) {
//       _this.vector.y *= -1;
//     }
//     if (_this.x > w) _this.x = w;
//     if (_this.y > h) _this.y = h;
//     if (_this.x < 0) _this.x = 0;
//     if (_this.y < 0) _this.y = 0;
//   };

//   _this.draw = function () {
//     ctx.beginPath();
//     ctx.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2);
//     ctx.closePath();
//     ctx.fillStyle = _this.color;
//     ctx.fill();
//   };
// };
