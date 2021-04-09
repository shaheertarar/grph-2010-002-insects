
// You will be writing all of your code in this function
class InsectJosh{
	// Do not add any code to this function
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.rightR =0;
		this.rightM = true;
		
		this.leftR=0;
		this.leftM = true;

		this.offset = floor(random(1000));
		this.increment = 0.001;
		this.speed = 3;
		this.theta = 90;
	}

	// We will work inside this function during class on March 31
	// Draw the insect
	// Make sure ALL of your shape x and y positions are in reference to this.x and this.y
	//rect(x, y, w, [h], [tl], [tr], [br], [bl])
	display(){
		push();
		translate(this.x, this.y);
		rotate(this.theta);

		fill("#050505");//body
		ellipse(0, 0 + 5,5,60);

		//head
		fill(165,42,42);
		rect(0-4,0-27, 8, 5, 20, 20, 20, 20 ) ;
		//1st link
		fill("#050505");
		rect(0 -5, 0-23, 10,5,5);
		rect(0 -5, 0-23, 10,10,5);

		//2nd link

		rect(0 -5, 0-15, 10,5,5);
		rect(0 -5, 0-15, 10,10,5);
		//3rd link

		rect(0 -5, 0-8, 10,5,5);
		rect(0 -5, 0-8, 10,10,5);
		//4th link

		rect(0 -5, 0, 10,5,5);
		rect(0 -5, 0, 10,10,5);
		//5th link

		rect(0 -5, 0+8, 10,5,5);
		rect(0 -5, 0+8, 10,10,5);
		//6th link

		rect(0 -5, 0+15, 10,5,5);
		rect(0 -5, 0+15, 10,10,5);
		//7th link

		rect(0 -5, 0+23, 10,5,5);
		rect(0 -5, 0+23, 10,10,5);
		//back
		rect(0 -4, 0+30, 8,5,5);

		//antena
		// fill(255,203,164);
		
		line(0 -3 , 0-27, 0-5, 0-32);
		line(0 +3 , 0-27, 0+5, 0-32);


		angleMode(DEGREES);
		

		//legs
		fill(255,203,164);
		push();
		translate(0-7,0-18);
		rotate(this.leftR+15);
		ellipse(0,0, 5,2)
		pop();
	
		push();
		translate(0+7,0-18);
		rotate(this.rightR-15);
		ellipse(0,0, 5,2)
		pop();

		push();
		translate(0-9,0-20);
		rotate(this.leftR-15);
		ellipse(0,0, 2,5)
		pop();

		push();
		translate(0+9,0-20);
		rotate(this.rightR+15);
		ellipse(0,0, 2,5)
		pop();

		//legs 2
		push();
		translate(0 -7, 0-11);
		rotate(this.leftR+15);
		ellipse(0,0, 5,2)
		pop();

		push();
		translate(0 +7, 0-11);
		rotate(this.rightR-15);
		ellipse(0,0, 5,2)
		pop();

		push();
		translate(0 -9, 0-13);
		rotate(this.leftR-15);
		ellipse(0,0, 2,5)
		pop();

		push();
		translate(0 +9, 0-13);
		rotate(this.rightR+15);
		ellipse(0,0, 2,5)
		pop();

		


		//legs 3

		push();
		translate(0 -7, 0-4);
		rotate(this.leftR+15);
		ellipse(0,0, 5,2)
		pop();

		push();
		translate(0 +7, 0-4);
		rotate(this.rightR-15);
		ellipse(0,0, 5,2)
		pop();

		push();
		translate(0 -9, 0 -6);
		rotate(this.leftR-15);
		ellipse(0,0, 2,5)
		pop();


		push();
		translate(0 +9, 0-6);
		rotate(this.rightR+15);
		ellipse(0,0, 2,5)
		pop();



		//legs 4
		push();
		translate(0 -7, 0+4);
		rotate(this.leftR+15);
		ellipse(0,0, 5,2)
		pop();

		push();
		translate(0 +7, 0+4);
		rotate(this.rightR-15);
		ellipse(0,0, 5,2)
		pop();

		push();
		translate(0 -9, 0 +2);
		rotate(this.leftR-15);
		ellipse(0,0, 2,5)
		pop();

		push();
		translate(0 +9, 0+2);
		rotate(this.rightR+15);
		ellipse(0,0, 2,5)
		pop();

		//legs 5
		push();
		translate(0 -7, 0+12);
		rotate(this.leftR+15);
		ellipse(0,0, 5,2)
		pop();

		push();
		translate(0 +7, 0+12);
		rotate(this.rightR-15);
		ellipse(0,0, 5,2)
		pop();

		push();
		translate(0 -9, 0 +10);
		rotate(this.leftR-15);
		ellipse(0,0, 2,5)
		pop();

		push();
		translate(0 +9, 0+10, 2,5);
		rotate(this.rightR+15);
		ellipse(0,0, 2,5)
		pop();


		//legs 6
		push();
		translate(0 -7, 0+20);
		rotate(this.leftR+15);
		ellipse(0,0, 5,2)
		pop();

		push();
		translate(0 +7, 0+20);
		rotate(this.rightR-15);
		ellipse(0,0, 5,2)
		pop();

		push();
		translate(0 -9, 0 +18);
		rotate(this.leftR-15);
		ellipse(0,0, 2,5)
		pop();

		push();
		translate(0 +9, 0+18);
		rotate(this.rightR+15);
		ellipse(0,0, 2,5)
		pop();

		//legs 7
		push();
		translate(0 -7, 0+28);
		rotate(this.leftR+15);
		ellipse(0,0, 5,2)
		pop();

		push();
		translate(0 +7, 0+28);
		rotate(this.rightR-15);
		ellipse(0,0, 5,2)
		pop();

		push();
		translate(0 -9, 0 +26);
		rotate(this.leftR-15);
		ellipse(0,0, 2,5)
		pop();

		push();
		translate(0 +9, 0+26);
		rotate(this.rightR+15);
		ellipse(0,0, 2,5)
		pop();


		pop();
	}

	// We will work inside this function during class on April 7
	// Animate the insect
	animate(){
		if (this.rightM == true){
			this.rightR++;
				if (this.rightR > 17){
				this.rightM = false;
				}
			} else {
			this.rightR--;
				if (this.rightR < -20){
				this.rightM = true;
				}
		}	

	if (this.leftM == true){
		this.leftR++;
			if (this.leftR > 0){
			this.left = false;
			}
		} else {
		this.leftR--;
			if (this.leftR < 0){
			this.leftM = true;
			}
	}	
}

//change the way youre drawing change the range of movement for the left side


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