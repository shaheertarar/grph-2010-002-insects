
// You will be writing all of your code in this function
class InsectSally{
	// Do not add any code to this function
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.leftWingRotation = 5;
		this.leftWingOpen = true;
		this.rightWingRotation = 355;
		this.rightWingOpen = true;

		this.offset = floor(random(1000));
		this.increment = 0.005;
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

		noStroke(0);		

		//legs
		fill(22, 22, 22);
		angleMode(DEGREES);
		push();
		translate(0 - 40, 0 - 10);
		rectMode(CORNER);
		rotate(+ 25);
		rect(0,-13.5,16,1);
		pop();

		fill(22, 22, 22);
		angleMode(DEGREES);
		push();
		translate(0 - 40, 0 - 10);
		rectMode(CORNER);
		rotate(+ 60);
		rect(+ 5,- 20,15,1);
		pop();

		fill(22, 22, 22);
		angleMode(DEGREES);
		push();
		translate(0 - 40, 0 - 10);
		rectMode(CORNER);
		rotate(+ 10);
		rect(5,+ 3,17,1);
		pop();

		fill(22, 22, 22);
		angleMode(DEGREES);
		push();
		translate(0 - 40, 0 - 10);
		rectMode(CORNER);
		rotate(+ 60);
		rect(+ 16,- 15,15,1);
		pop();

		fill(22, 22, 22);
		angleMode(DEGREES);
		push();
		translate(0 - 40, 0 - 10);
		rectMode(CORNER);
		rotate(- 25);
		rect(+ 55,+ 22,17,1);
		pop();

		fill(22, 22, 22);
		angleMode(DEGREES);
		push();
		translate(0 - 40, 0 - 10);
		rectMode(CORNER);
		rotate(- 60);
		rect(+ 18,+ 50,15,1);
		pop();

		fill(22, 22, 22);
		angleMode(DEGREES);
		push();
		translate(0 - 40, 0 - 10);
		rectMode(CORNER);
		rotate(- 10);
		rect(+ 57,+ 16,17,1);
		pop();

		fill(22, 22, 22);
		angleMode(DEGREES);
		push();
		translate(0 - 40, 0 - 10);
		rectMode(CORNER);
		rotate(- 60);
		rect(+ 14,+ 54,10,1);
		pop();

		fill(22, 22, 22);
		angleMode(DEGREES);
		push();
		translate(0 - 40, 0 - 10);
		rectMode(CORNER);
		rotate(+ 40);
		rect(+ 50,- 15,25,1);
		pop();

		fill(22, 22, 22);
		angleMode(DEGREES);
		push();
		translate(0 - 40, 0 - 10);
		rectMode(CORNER);
		rotate(- 40);
		rect(- 13,+ 35,23,1);
		pop();




		//body
		fill(144, 255, 0);
		ellipse(0, 0 + 20, 30, 40);

		fill(0, 88, 10);
		ellipse(0, 0 + 5, 30, 50);

		fill(22, 22, 22);
		ellipse(0, 0 - 15, 30, 10);

		fill(68, 129, 53);
		ellipse(0, 0 - 10, 20, 10);

		fill(68, 129, 53);
		ellipse(0, 0, 25, 15);

		fill(204, 255, 0);
		ellipse(0, 0 - 4, 10, 5);

		fill(68, 129, 53);
		ellipse(0, 0 + 10, 15, 15);

		fill(204, 255, 0);
		ellipse(0, 0 + 8, 10, 5);

		fill(22, 22, 22);
		rect(0 - 2, 0 - 28, 5, 10);

		fill(22, 22, 22);
		rect(0 - 4.5, 0 - 28, 10, 2);	




		// eyes
		fill(240, 0, 0);
		ellipse(0 + 10, 0 - 23, 13, 10);

		fill(240, 0, 0);
		ellipse(0 - 9, 0 - 23, 13, 10);




		// wings
		//leftWing
		fill(242, 255, 238, 100);
		angleMode(DEGREES);
		push();
		translate(0 - 15, 0 - 8);
		ellipseMode(CORNER);
		rotate(this.leftWingRotation);
		rotate(+ 20);
		ellipse(0,0,20,50);
		pop();

		//rightWing
		push();
		translate(0 - 4, 0 + 2);
		ellipseMode(CORNER);
		rotate(this.rightWingRotation);
		rotate(- 20);
		ellipse(0,0,20,50);
		pop();



		pop();
		
	}

	// We will work inside this function during class on April 7
	// Animate the insect
	animate(){
		if (this.leftWingOpen == true){
			this.leftWingRotation++;
			if (this.leftWingRotation > 20){
				this.leftWingOpen = false;
			}
		} else {
			this.leftWingRotation--;
			if (this.leftWingRotation < 5){
				this.leftWingOpen = true;
			}
		}

		if (this.rightWingOpen == true){
			this.rightWingRotation++;
			if (this.rightWingRotation > 355){
				this.rightWingOpen = false;
			}
		} else {
			this.rightWingRotation--;
			if (this.rightWingRotation < 340){
				this.rightWingOpen = true;
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