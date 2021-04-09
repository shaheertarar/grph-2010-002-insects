
// You will be writing all of your code in this function
class InsectJune{
	// Do not add any code to this function
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.leftWingRotation = 15;
		this.rightWingRotation = 345;
		this.rightWing = true;
		this.leftWing = true;

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

		stroke(0);
		strokeWeight(1);
		line(0 - 4, 0 - 15, 0 - 10, 0 - 20);
		line(0 - 10, 0 - 20, 0 - 12, 0 - 25);

		line(0 - 4, 0 - 10, 0 - 10, 0 - 9);
		line(0 - 10, 0 - 9, 0 - 16, 0 - 3);

		line(0 - 5, 0 - 3, 0 - 10, 0 - 2);
		line(0 - 10, 0 - 2, 0 - 15, 0 + 19);


		line(0 + 4, 0 - 15, 0 + 10, 0 - 20);
		line(0 + 10, 0 - 20, 0 + 12, 0 - 25);

		line(0 + 4, 0 - 10, 0 + 10, 0 - 9);
		line(0 + 10, 0 - 9, 0 + 16, 0 - 3);

		line(0 + 5, 0 - 3, 0 + 10, 0 - 2);
		line(0 + 10, 0 - 2, 0 + 15, 0 + 19);

		noStroke();
		fill('#ffd208');
		ellipse(0, 0 + 5, 15, 25);
		fill(0);
		ellipse(0, 0 - 13, 13, 20);
		ellipse(0 - 4.5, 0 - 25, 5);
		ellipse(0 + 4.5, 0 - 25, 5);
		fill('#ffd208');
		ellipse(0, 0 - 22, 13, 13);

		stroke(0);
		strokeWeight(1);
		line(0 - 7.2, 0 + 5, 0 + 7.2, 0 + 5);

		line(0 - 6.5, 0, 0 + 6.5, 0);
		line(0 - 6.5, 0 + 10, 0 + 6.5, 0 + 10);


		push();
		fill('rgba(245, 188, 66, 0.6)');
		// stroke(0);
		// strokeWeight(1);
		noStroke();
		translate(0, 0-20);
		rotate(this.leftWingRotation);
		rect(-10, 0, 10, 40, 30, 1, 30, 1);
		pop();

		push();
		fill('rgba(245, 188, 66, 0.6)');
		// stroke(0);
		// strokeWeight(1);
		noStroke();
		translate(0, 0-20);
		rotate(this.rightWingRotation);
		rect(0, 0, 10, 40, 1, 30, 1, 30);
		pop();

		pop();
	}

	// We will work inside this function during class on April 7
	// Animate the insect
	animate(){
		if(this.rightWing == true) {
			this.rightWingRotation++;
			if(this.rightWingRotation > 360) {
				this.rightWing = false;
			}
		} else {
			this.rightWingRotation--;
			if(this.rightWingRotation < 345) {
				this.rightWing = true;
			}
		}

		if(this.leftWing == true) {
			this.leftWingRotation--;
			if(this.leftWingRotation < 0) {
				this.leftWing = false;
			}
		} else {
			this.leftWingRotation++;
			if(this.leftWingRotation > 15) {
				this.leftWing = true;
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