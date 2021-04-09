
// You will be writing all of your code in this function
class InsectYaxin{
	// Do not add any code to this function
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.leftWingOpen = true;
		this.rightWingOpen= true;
		this.leftWingRotation = 5;
		this.rightWingRotation = 10;

		this.offset = floor(random(1000));
		this.increment = 0.001;
		this.speed = 4;
		this.theta = 90;
	}

	// We will work inside this function during class on March 31
	// Draw the insect
	// Make sure ALL of your shape x and y positions are in reference to this.x and this.y
	display(){
		push();
		translate(this.x, this.y);
		rotate(this.theta);

		noStroke();
		fill(0);
		circle(0, 0-15, 15, 15);
		stroke(0);
		line(0, 0, 0-15, 0+15);
		line(0+15, 0-15, 0-15, 0+15);

		line(0-15,0-15,0,0);
		line(0+15,0+15,0,0);
		line(0-20,0,0-10,0);
		line(0+15,0,0+20,0);

			//body
		fill(214, 47, 47);
		circle(0, 0, 30, 30);


		 //pattern
		 fill(0);
		 //left 3 circles

		 circle(0-9.5,0+8,5, 5);
		 circle(0-12,0,5,5);
		 circle(0-9.5,0-8,5,5);

		 line(0,0-15,0,0+15);

		 //center circle
		 circle(0,0,10,10);

		 //right 3 circles

		 circle(0+12,0,5,5);
		 circle(0 + 9.5,0-8,5,5);
		 circle(0 + 9.5, 0+8,5,5);

		 //eyes
		 fill(255,255,255);
		 ellipse(0-3,0-20,2.5, 5);
		 ellipse(0+3,0-20,2.5,5);

		 //right wing
		 fill(245, 117, 66,100);
		 angleMode(DEGREES);
		 push();
		 translate(0, 0);
		 ellipseMode(CORNER);
		 rotate(this.rightWingRotation);
		 noStroke();
		 ellipse(-15, 0, 15, 30);
		 pop();

		 //left wing
		 push();
		 translate(0, 0);
		 rotate(this.leftWingRotation);
		 ellipseMode(CORNER);
		 noStroke();
		 ellipse(10, -10, 15,30);
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
			if(this.rightWingRotation > 25){
				this.rightWingOpen = false;
			}
		} else {
			this.rightWingRotation--;
			if (this.rightWingRotation < 10){
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