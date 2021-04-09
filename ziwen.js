
// You will be writing all of your code in this function
class InsectZiwen{
  // Do not add any code to this function
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.leftWingRotation = 30;
    this.leftWingOpen = true;
    this.rightWingRotation = 30;
    this.rightWingOpen = true;
        this.opWingRotation = 30;
    this.opWingOpen = true;

    this.offset = floor(random(1000));
    this.increment = 0.001;
    this.speed = 1;
    this.theta = 90;
  }

  // We will work inside this function during class on March 31
  // Draw the insect
  // Make sure ALL of your shape x and y positions are in reference to this.x and this.y
  display(){
    push();
    translate(this.x, this.y);
    rotate(this.theta);

        stroke(181, 159, 136);
        strokeWeight(1);
      
       // left line
       // line(0-22,0-10,0-28,0-25);
      push();
      translate(0 - 22, 0 - 10);
      rotate(this.rightWingRotation);
      // line(0-45,0-40,0-60,0-62);
      line(0,0,-14,-14);
      pop();
        
    
  //        line(0-22,0-10,0-17,0-25);
      angleMode(0);
      push();
      translate(0 - 22, 0 -10);
      rotate(this.rightWingRotation);
      line(0,0,2,-14);
      pop();
      

      
      // line(0-10,0-5,0-6,0-20)
      
      // rect(0-27,0-25, 1, 10);
      
      noStroke();
      //right eye black
      noStroke();
      fill(133, 104, 76);
      angleMode(DEGREES);
    push();
    translate(0 - 20, 0 -35);
    ellipseMode(CORNER);
    rotate(this.leftWingRotation);
    ellipse(0,0,12, 12);
    pop();
      
         // left eye balck
    // ellipse(0-30,0-27,10, 10);
    push();
    translate(0 - 34.5, 0 -35);
    ellipseMode(CORNER);
    rotate(this.leftWingRotation);
    ellipse(0,0,12, 12);
    pop();
     
      
      
//         noStroke();
//       fill(255);
//       // ellipse(0-15,0-27,3, 3);
//         push();
//    translate(0 - 18, 0 -30);
//    ellipseMode(CORNER);
//    rotate(this.opWingRotation);
//    ellipse(0,0,4, 4);
//    pop();
     
      
//       // ellipse(0-30,0-27,3, 3);
//          push();
//    translate(0 - 32, 0 -30);
//    ellipseMode(CORNER);
//    rotate(this.opWingRotation);
//    ellipse(0,0,4, 4);
//    pop();
     
    
      
      
      // 245, 225, 184
      fill(237, 224, 185)
      noStroke();
      rect(0-27,0-18, 10, 36, 20, 15, 300, 200);
      rect(0-27,0+10, 43, 10, 20, 5, 400, 5);
      
      


      noStroke();
      fill(255, 119, 0);
      rect(0-20, 0-20,35, 35, 20, 15, 10, 10);
      

      
      //  stroke(181, 144, 71);
      // strokeWeight(1);
      fill(255, 183, 66);
      rect(0-16, 0-16,27, 27, 20, 20, 10, 10);
       fill(255, 119, 0);
    rect(0-11, 0-11,17, 17, 10, 10, 5, 5);
      fill(255, 183, 66);
      rect(0-7.5, 0-7.5,10,11, 10, 10, 30, 30);

      pop();
    }

  // We will work inside this function during class on April 7
  // Animate the insect
  animate(){
    if (this.leftWingOpen == true){
      this.leftWingRotation++;
      if (this.leftWingRotation > 30){
        this.leftWingOpen = false;
      }
    } else {
      this.leftWingRotation--;
      if (this.leftWingRotation < 20){
        this.leftWingOpen = true;
      }
    }

    if (this.rightWingOpen == true){
      this.rightWingRotation++;
      if (this.rightWingRotation > 15){
        this.rightWingOpen = false;
      }
    } else {
      this.rightWingRotation--;
      if (this.rightWingRotation < 5){
        this.rightWingOpen = true;
      }
    } 
      if (this.opWingOpen == true){
      this.opWingRotation++;
      if (this.opWingRotation > 35){
        this.opWingOpen = false;
      }
    } else {
      this.opWingRotation--;
      if (this.opWingRotation < 20){
        this.opWingOpen = true;
      }
    } 
  }

  // We w4ill work inside this function during class on April 7
  // Move the insect
  move(){
    var step = createVector(Noise.simplex2(this.offset, 0) * this.speed, Noise.simplex2(0, this.offset) * this.speed);
    this.x += step.x;
    this.y += step.y;
    this.offset += this.increment;

    //calculate angle based on direction
    this.theta = step.heading() + 180;

    if (this.x > width){
      this.x = 0;
    } else if (this.x < 0){
      this.x = width;
    }

    if (this.y > height){
      this.y = 0;
    } else if (this.y < 0){
      this.y = height;
    }
  }
}