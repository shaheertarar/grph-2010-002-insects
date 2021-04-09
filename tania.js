// You will be writing all of your code in this function
class InsectTania{
	// Do not add any code to this function
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.right = 0;
		this.rightopen = true;
		this.left = 0;
		this.leftopen = true;

		this.offset = floor(random(1000));
		this.increment = 0.0005;
		this.speed = 6;
		this.theta = 90;
	}

	// We will work inside this function during class on March 31
	// Draw the insect
	// Make sure ALL of your shape x and y positions are in reference to this.x and this.y
	display(){
		push();
		translate(this.x, this.y);
		rotate(this.theta);
		
		// right wing
		noStroke();
		fill(0);
		angleMode(DEGREES);
		push();
		translate(0+24, 0 - 7);
		ellipseMode(CENTER);
		rotate(this.right -7);
		ellipse(0, 0, 45, 20);
		pop();

		fill(0);
		angleMode(DEGREES);
		push();
		translate(0+21, 0-3);
		ellipseMode(CENTER);
		rotate(this.right-20);
		ellipse(0, 0, 45, 25);
		pop();


		fill(0);
		angleMode(DEGREES);
		push();
		translate(0+17, 0 + 5);
		ellipseMode(CENTER);
		rotate(this.right-55);
		ellipse(0, 0, 22, 35);
		pop();

		fill(0);
		angleMode(DEGREES);
		push();
		translate(0+15, 0+12);
		ellipseMode(CENTER);
		rotate(this.right -35);
		ellipse(0, 0, 22, 35);
		pop();

		// //color light blue
		fill(96, 210, 249);
		angleMode(DEGREES);
		push();
		translate(0+21, 0 - 8);
		ellipseMode(CENTER);
		rotate(this.right-7);
		ellipse(0, 0, 35, 10);
		pop();

		fill(96, 210, 249);
		angleMode(DEGREES);
		push();
		translate(0+19, 0-2);
		ellipseMode(CENTER);
		rotate(this.right-1);
		ellipse(0, 0, 30, 10);
		pop();

		fill(96, 210, 249);
		angleMode(DEGREES);
		push();
		translate(0+15, 0+6);
		ellipseMode(CENTER);
		rotate(this.right+3);
		ellipse(0, 0, 20, 10);
		pop();

		fill(96, 210, 249);
		angleMode(DEGREES);
		push();
		translate(0+13, 0+ 12);
		ellipseMode(CENTER);
		rotate(this.right-20);
		ellipse(0, 0, 10, 20);
		pop();

		// //color darkblue
		fill(26, 139, 255, 90);
		angleMode(DEGREES);
		push();
		translate(0+12, 0+1);
		ellipseMode(CENTER);
		rotate(this.right+15);
		ellipse(0, 0, 20, 25);
		pop();

		fill(26, 139, 255, 120);
		angleMode(DEGREES);
		push();
		translate(0+9, 0+1);
		ellipseMode(CENTER);
		rotate(this.right+15);
		ellipse(0, 0, 15, 25);
		pop();

		fill(26, 139, 255, 185);
		angleMode(DEGREES);
		push();
		translate(0+7, 0+1);
		ellipseMode(CENTER);
		rotate(this.right+15);
		ellipse(0, 0, 10, 23);
		pop();

		stroke(0)
		strokeWeight(6)
		line(0 + 5,0-7,0+5,0+15);

		//left wing 
		noStroke();
		fill(0);
		angleMode(DEGREES);
		push();
		translate(0-23, 0 -7);
		ellipseMode(CENTER);
		rotate(this.left + 7);
		ellipse(0, 0, 45, 20);
		pop();

		fill(0);
		angleMode(DEGREES);
		push();
		translate(0-21 , 0-2.5);
		rotate(this.left +20);
		ellipse(0, 0, 45, 25);
		pop();

		fill(0);
		angleMode(DEGREES);
		push();
		translate(0 -15, 0 + 5);
		rotate(this.left + 55);
		ellipse(0, 0, 22, 35);
		pop();

		fill(0);
		angleMode(DEGREES);
		push();
		translate(0-14, 0 + 12 );
		rotate(this.left + 35);
		ellipse(0, 0, 22, 35);
		pop();

		//color light blue
		fill(96, 210, 249);
		angleMode(DEGREES);
		push();
		translate(0-39, 0 - 15);
		ellipseMode(CORNER);
		rotate(this.left + 6);
		ellipse(0, 0, 35, 10);
		pop();

		fill(96, 210, 249);
		angleMode(DEGREES);
		push();
		translate(0-35, 0 - 8);
		ellipseMode(CORNER);
		rotate(this.left + 1);
		ellipse(0, 0, 30, 10);
		pop();

		fill(96, 210, 249);
		angleMode(DEGREES);
		push();
		translate(0-23, 0);
		ellipseMode(CORNER);
		rotate(this.left -3);
		ellipse(0, 0, 20, 10);
		pop();

		fill(96, 210, 249);
		angleMode(DEGREES);
		push();
		translate(0-15, 0+1);
		ellipseMode(CORNER);
		rotate(this.left + 20);
		ellipse(0, 0, 10, 20);
		pop();

		//darkblue
		fill(26, 139, 255, 90);
		angleMode(DEGREES);
		push();
		translate(0-24, 0-9);
		ellipseMode(CORNER);
		rotate(this.left-15);
		ellipse(0, 0, 20, 25);
		pop();

		fill(26, 139, 255, 120);
		angleMode(DEGREES);
		push();
		translate(0-18, 0-9);
		ellipseMode(CORNER);
		rotate(this.left -15);
		ellipse(0, 0, 15, 25);
		pop();

		fill(26, 139, 255, 185);
		angleMode(DEGREES);
		push();
		translate(0-13, 0-9);
		ellipseMode(CORNER);
		rotate(this.left -15);
		ellipse(0, 0, 10, 23);
		pop();

		stroke(0)
		strokeWeight(6)
		line(0-5,0-7,0-5,0+15)


		//body
		stroke(0)
		strokeWeight(1)
		line(0, 0-11, 0-5,0-25);
		line(0, 0-11, 0+5,0-25); 

		fill(27, 38, 43)
		noStroke()
		rect(0-2, 0, 5, 20,0,0,25,25)
		rect(0-3, 0-10, 7, 20,25,25,25,25)
		//head
		ellipse(0+.5, 0-12, 5, 5)
		rect(0-.5, 0-12, 3, 4)
		//eyes
		fill(4, 64, 137)
		circle(0-1, 0-13, 2,2)
		fill(115, 238, 247)
		circle(0-1, 0-13, 1,1)
		fill(4, 64, 137)
		circle(0+2, 0-13, 2,2)
		fill(115, 238, 247)
		circle(0+2, 0-13, 1,1)

		pop();
	}

	// We will work inside this function during class on April 7
	// Animate the insect
	animate(){
		if(this.rightopen == true){
			this.right ++;
			if(this.right> 6){
				this.rightopen = false;
			}
		} else{
			this.right--;
			if(this.right < -6){
				this.rightopen = true;
			}
		}

		if(this.leftopen == true){
			this.left ++;
			if(this.left > 6){
				this.leftopen = false;
			}
		} else{
			this.left--;
			if(this.left < -6){
				this.leftopen = true;
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