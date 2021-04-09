
// You will be writing all of your code in this function
class InsectZeyun{
	// Do not add any code to this function
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.leftWingRotation = 25;
		this.leftWingOpen = true;
		this.rightWingRotation = 350;
		this.rightWingOpen = true;
		this.left2WingRotation = 25;
		this.left2WingOpen = true;
		this.right2WingRotation = 350;
		this.right2WingOpen = true;

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
		fill(0);
		//arc(100, 30, 70, 70, 3.1, PI + QUARTER_PI, TWO_PI);
		line(0-12,0-36,0,0-20);
		line(0+12,0-36,0,0-20);

		noStroke();
		fill(0);
		ellipse(0, 0+5, 30, 49);
		rect(0-10, 0-30, 20, 35, 16);
		triangle(0-5, 0+28, 0, 0+36, 0+5, 0+28);
		

		fill(255, 196,0)
		ellipse(0, 0+5, 28, 10);
		ellipse(0, 0 -8, 20, 6);
		ellipse(0, 0 +18, 20, 6);
		ellipse(0, 0 -20, 17, 4);

		//wings
		fill(255,255,255, 100);
		angleMode(DEGREES);

		push();
		translate(0 - 15, 0 - 18);
		ellipseMode(CORNER);
		rotate(this.leftWingRotation-10);
		ellipse(-15, 0, 30, 18);
		pop();

		push();
		translate(0 - 15, 0 - 18);
		ellipseMode(CORNER);
		rotate(this.left2WingRotation-10);
		rotate(350);
		ellipse(-27, 13, 37, 23);
		pop();

		push();
		translate(0 - 3, 0 - 16);
		ellipseMode(CORNER);
		rotate(this.rightWingRotation);
		ellipse(3, 0, 30, 18);
		pop();

		push();
		translate(0 - 15, 0 - 18);
		ellipseMode(CORNER);
		rotate(this.right2WingRotation);
		rotate(363);
		ellipse(17, 12, 37, 23);
		pop();
		
		pop();
	}

	// We will work inside this function during class on April 7
	// Animate the insect
	animate(){
		if (this.leftWingOpen == true){
			this.leftWingRotation++;
			if (this.leftWingRotation > 22){
				this.leftWingOpen = false;
			}
		} else {
			this.leftWingRotation--;
			if (this.leftWingRotation < 15){
				this.leftWingOpen = true;
			}
		}

		if (this.left2WingOpen == true){
			this.left2WingRotation++;
			if (this.left2WingRotation > 22){
				this.left2WingOpen = false;
			}
		} else {
			this.left2WingRotation--;
			if (this.left2WingRotation < 15){
				this.left2WingOpen = true;
			}
		}

		if (this.rightWingOpen == true){
			this.rightWingRotation++;
			if (this.rightWingRotation > 360){
				this.rightWingOpen = false;
			}
		} else {
			this.rightWingRotation--;
			if (this.rightWingRotation < 353){
				this.rightWingOpen = true;
			}
		}

		if (this.right2WingOpen == true){
			this.right2WingRotation++;
			if (this.right2WingRotation > 360){
				this.right2WingOpen = false;
			}
		} else {
			this.right2WingRotation--;
			if (this.right2WingRotation < 353){
				this.right2WingOpen = true;
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