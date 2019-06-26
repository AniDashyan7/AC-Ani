// Example 29

// var step = 10;
// var lastX = -10;
// var radius = 50;
// let lastY;
// let middle;
// let y;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(208);
//     smooth();
//     // noLoop();
//     noFill();
//     strokeWeight(0.5);
// }

// function draw() {
//     background(255);
//     stroke(20, 50, 70);
//     centX = width / 2;
//     centY = height / 2;
//     var x, y;
//     for (var i = 0; i < 100; i++) {
//         var lastx = -800;
//         var lasty = -800;
//         var radiusNoise = random(10);
//         var radius = 10;

//         stroke(random(20), random(50), random(70), 80);

//         var startangle = int(random(30));
//         var endangle = 500 + int(random(500));
//         var anglestep = 5 + int(random(5));

//         for (var ang = startangle; ang <= endangle; ang += anglestep) {
//             radiusNoise += 1;
//             radius += 2.5;
//             var thisRadius = radius + (noise(radiusNoise) * 200) - 100;
//             var rad = radians(ang);
//             x = centX + (thisRadius * cos(rad));
//             y = centY + (thisRadius * sin(rad));
//             if (lastx > -800) {
//                 line(x, y, lastx, lasty);
//             }
//             lastx = x;
//             lasty = y;
//         }
//     }
// }