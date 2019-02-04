let points = [];

function setup(){
  createCanvas(500, 500);
}

function draw(){
  background(51);

  for (var i = 0; i < points.length; i++) {
    stroke(255);
    strokeWeight(5);
    // translate(0, 0);
    point(points[i].x, points[i].y);
  }

  strokeWeight(1);
  stroke(240,20,20);
  drawBestFitLine();
}

function mousePressed(){
  let mousePosition = new p5.Vector(mouseX, mouseY);
  points.push(mousePosition);
}

function drawBestFitLine(){
  let xBar = 0;
  let yBar = 0;
  let numerator = 0;
  let denominator = 0;

  for (var i = 0; i < points.length; i++) {
    xBar += points[i].x;
    yBar += points[i].y;
  }
  xBar /= points.length;
  yBar /= points.length;

  for (var i = 0; i < points.length; i++) {
    let xPart = points[i].x - xBar;
    let yPart = points[i].y - yBar;

    numerator += xPart * yPart;
    denominator += xPart * xPart;
  }

  let m = numerator / denominator;
  let b = yBar - m * xBar;

  let x1 = 0;
  let y1 = b;
  let x2 = width;
  let y2 = (m * width) + b;

  line(x1,y1,x2,y2)
}
