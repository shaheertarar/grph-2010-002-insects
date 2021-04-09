// You will be writing all of your code in this function
class InsectShaheer{
	// Do not add any code to this function
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.leftWingRotation = 5;
		this.leftWingOpen = true;
		this.rightWingRotation = 355;
		this.rightWingOpen = true;

		this.offset = floor(random(1000));
		this.increment = 0.001;
		this.speed = 10;
		this.theta = 90;
	}

	// We will work inside this function during class on March 31
	// Draw the insect
	// Make sure ALL of your shape x and y positions are in reference to this.x and this.y
	display(){
		// three body segments
		push();
		translate(this.x, this.y);
		rotate(this.theta);
		
		noStroke();
		fill(0);
		ellipse(0, 0 + 10, 20, 50);
		rect(0 - 9, 0 - 20, 18, 18, 6);
		rect(0 - 8, 0 - 26, 16, 10, 6);

		//legs
		stroke(0);
		line(0 - 8, 0 - 16, 0 - 20, 0 - 30);
		line(0 + 8, 0 - 16, 0 + 20, 0 - 30);

		line(0 - 8, 0 - 12, 0 - 25, 0 - 14);
		line(0 + 8, 0 - 12, 0 + 25, 0 - 14);

		line(0 - 8, 0 - 8, 0 - 24, 0 + 4);
		line(0 + 8, 0 - 8, 0 + 24, 0 + 4);

		// eyes
		noStroke();
		fill(255, 0, 0);
		circle(0 - 7, 0 - 24, 4);
		circle(0 + 7, 0 - 24, 4);

		// wings
		fill(145, 191, 101, 100);
		angleMode(DEGREES);
		push();
		translate(0 - 15, 0 - 18);
		ellipseMode(CORNER);
		rotate(this.leftWingRotation);
		ellipse(0, 0, 18, 64);
		pop();

		push();
		translate(0 - 3, 0 - 16);
		ellipseMode(CORNER);
		rotate(this.rightWingRotation);
		ellipse(0, 0, 18, 64);
		pop();

		//antenna
		stroke(0);
		strokeWeight(1);
		line(0 - 4, 0 - 25, 0 - 6, 0 - 32);
		line(0 + 4, 0 - 25, 0 + 6, 0 - 32);
		
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