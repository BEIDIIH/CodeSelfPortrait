/*************************************************************************
    (*)Self-Portrait
          (*)by Beidi Han

    (*)Overview - This project using the simple shapes to build a self-portrait of Beidi Han.
 
    ---------------------------------------------------------------------
    (*)Notes: 
     (1) I'm not sure why my stroke code is not working, I try to use it on the face part, but it doesn't work.
**************************************************************************/


// Setup code goes here
function setup() {
  createCanvas(1000, 900);

 }


// Draw code goes here
function draw() {
  background(10, 152, 254);

  //hair
  noStroke();
  fill(0);
  rect(305, 201, 300, 400, 140);

  //hair2
  noStroke();
  fill(255, 221, 82);
  arc(455, 470, 300, 300, 0, PI, OPEN);


  //face
  fill(255, 219, 191);
  arc(456, 370, 200, 230, 0, PI, OPEN);

   //hair3
  noStroke();
  fill(0);
  rect(338, 369, 35, 130);
  rect(540, 369, 35, 130);
  fill(255, 219, 191);
  triangle(496, 344, 482, 371, 511, 371);

 //eyebrow
  fill(233, 182, 150);
  arc(425, 398, 30, 35, PI, 0, OPEN);
  arc(485, 398, 30, 35, PI, 0, OPEN);

  //eyes
  noStroke();
  fill(0);
  ellipse(425, 407, 20, 25);
  ellipse(485, 407, 20, 25);

  //highlight in eyes
  noStroke();
  fill(250);
  ellipse(429, 400, 10, 10);
  ellipse(490, 400, 10, 10);

  //cloth
  noStroke();
  fill(250);
  arc(460, 682, 300, 370, PI, 0, OPEN);
  
 //neck
  noStroke();
  fill(255, 219, 191);
  rect(430, 455, 50, 60, 20);

  //mouth
  noStroke();
  fill(255, 107, 92);
  arc(456, 440, 60, 40, 0, PI, OPEN);


 

 //Scarf
  noStroke();
  fill(219, 28, 1);
  quad(390, 493, 380, 521, 428, 497, 426, 491);
  quad(426, 491, 492, 513, 464, 542, 380, 521);
  quad(483, 494, 519, 499, 464, 539, 425, 529);
  quad(519, 499, 517, 602, 470, 602, 466, 538);
  
}