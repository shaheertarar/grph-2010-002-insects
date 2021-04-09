
// You will be writing all of your code in this function
class InsectSabrina{
 // Do not add any code to this function
 constructor(x, y){
  this.x = x;
  this.y = y;
  this.topleftR = 6.5;
  this.topleftM = true;

  this.toprightR = -6.5;
  this.toprightM = true;

  this.bottomleftR = -3.5;
  this.bottomleftM = true;

  this.bottomrightR = 3.5;
  this.bottomrightM = true;

  this.offset = floor(random(1000));
  this.increment = 0.001;
  this.speed = 8;
  this.theta = 90;
 }

 // We will work inside this function during class on March 31
 // Draw the insect
 // Make sure ALL of your shape x and y positions are in reference to this.x and this.y
 display(){
  push();
    translate(this.x, this.y);
    rotate(this.theta);

  fill(0);
        stroke(0);
  strokeWeight(1);
  
  line(0 + 1, 0 - 21, 0 + 5, 0 - 26);
  line(0 - 5, 0 - 16, 0 - 14, 0 - 26);

  line(0 - 17, 0 - 9, 0 - 11, 0 - 12);
  line(0 + 8, 0 - 9, 0 + 2, 0 - 12);

  line(0 + 5.5, 0 - 26.5, 0 + 13, 0 - 30);
  line(0 - 14, 0 - 26, 0 - 22, 0 - 30);

  line(0 + 16, 0 - 2, 0 + 8, 0 - 9);
  line(0 - 25, 0 - 2, 0 - 17, 0 - 9);

  line(0 + 9.1, 0 - 2.9, 0 + 1, 0 - 8.2);
  line(0 + 16, 0 + 14, 0 + 9, 0 - 2.9);

  line(0 - 18, 0 - 3, 0 + 2, 0 - 16);
  line(0 - 24, 0 + 14, 0 - 18, 0 - 3);

   push();
   angleMode(RADIANS);
  translate(0 - 50, 0 - 50);
    fill(0);
        rect(43, 17, 0.1, 6);


        fill(0);
        rect(48, 17, 0.1, 6);






        fill(0);
        rect(45, 22, 3, 3);

        
    


        fill(0);
        rect(42.5, 20, 6, 5,90);

        fill(0);
        rect(42, 22, 3, 3);

        fill(0);
        rect(43, 23, 5, 3);

        

        fill(0);
        circle(42, 23.5, 4, 4);

        fill(0);
        circle(49, 23.5, 4, 4);

        

        fill(250, 218, 10);
        noStroke();
        rect(38, 25.5, 15, 5, 80);

        fill(0);
        rect(37.5, 30, 16, 5,80);

        

        fill(250, 218, 10);
        noStroke();
        rect(38, 35, 15, 8, 90);

      
        


        fill(250, 218, 10);
        rect(36.5, 40, 18, 20, 100);

        fill(0);
        rect(39, 42, 13, 1, 90);

        fill(0);
        rect(35.5, 48, 20, 5, 90);

        
        //topleftwing
        push(); 
        translate(29,32);
        rotate(this.topleftR);
        fill(255,90);
        ellipse(0, 0, 30, 17, 120);
        pop();

        push(); 
        translate(32,40);
        rotate(this.bottomleftR);
        fill(255,90);
        ellipse(0, 0, 20, 10, 120);
        pop();

        push(); 
        translate(61,32);
        rotate(this.toprightR);
        fill(255,90);
        ellipse(0, 0, 30, 17, 120);
        pop();

        push(); 
        translate(58,40);
        rotate(this.bottomrightR);
        fill(255,90);
        ellipse(0, 0, 20, 10, 120);
        pop();


        fill(255);
        circle(41.5, 22.5, 1, 1);

        fill(255);
        circle(49.5, 22.5, 1, 1);

        pop();
        pop();
        angleMode(DEGREES);
 }

 // We will work inside this function during class on April 7
 // Animate the insect
 animate(){
  if (this.topleftM == true){
   this.topleftR = this.topleftR+0.03;
   if (this.topleftR > 6.9){
    this.topleftM = false;
   }
        } else {
         this.topleftR = this.topleftR-0.03;
         if (this.topleftR < 6.5){
          this.topleftM = true ;
         }
        }


 if (this.toprightM == true){
   this.toprightR = this.toprightR+0.03;
   if (this.toprightR > -6.5){
    this.toprightM = false;
   }
        } else {
         this.toprightR = this.toprightR-0.03;
         if (this.toprightR < -6.9){
          this.toprightM = true ;
         }
        }

    if (this.bottomleftM == true){
   this.bottomleftR = this.bottomleftR+0.03;
   if (this.bottomleftR > -6.5){
    this.bottomleftM = false;
   }
        } else {
         this.bottomleftR = this.bottomleftR-0.03;
         if (this.bottomleftR < -6.85){
          this.bottomleftM = true ;
         }
        }

    if (this.bottomrightM == true){
   this.bottomrightR = this.bottomrightR+0.03;
   if (this.bottomrightR > 6.85){
    this.bottomrightM = false;
   }
        } else {
         this.bottomrightR = this.bottomrightR-0.03;
         if (this.bottomrightR < 6.5){
          this.bottomrightM = true ;
         }
        }


 }

 // We will work inside this function during class on April 7
 // Move the insect
 move(){
    var step = createVector(Noise.simplex2(this.offset, 0) * this.speed, Noise.simplex2(0, this.offset) * this.speed);
    this.x += step.x;
    this.y += step.y;
    this.offset += this.increment;

    //calculate angle based on direction
    this.theta = step.heading() + 90;

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
