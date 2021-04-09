
// You will be writing all of your code in this function
class InsectSophia{

	// Do not add any code to this function
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.leftleg1movex = true;
		this.leg1x = 0;
		this.leftleg1movey = true;
		this.leg1y = 0;
		this.leftleg2movex = true;
		this.leg2x = 0;
		this.leftleg1movey = true;
		this.leg2y =0;
		this.leftleg3movex = true;
		this.leg3x = 0;
		this.leftleg3movey = true;
		this.leg3y = 0;
		this.leftleg4movex = true;
		this.leg4x = 0;
		this.leftleg4movey = true;
		this.leg4y = 0;
		this.leftleg5movex = true;
		this.leg5x = 0;
		this.leftleg5movey = true;
		this.leg5y = 0;
		this.leftleg6movex = true;
		this.leg6x = 0;
		this.leftleg6movey = true;
		this.leg6y = 0;

		this.offset = floor(random(1000));
		this.increment = 0.001;
		this.speed = 3;
		this.theta = 90;
	}

	// We will work inside this function during class on March 31
	// Draw the insect
	// Make sure ALL of your shape x and y positions are in reference to this.x and this.y
	display(){
		push();
		translate(this.x, this.y);
		rotate(this.theta);
		
	
	//red body	
	fill(242, 58, 48);
	stroke(0);
	ellipse(0, 0 + 10, 50, 50);
	line(0, 0 - 20, 0, 0 + 35);
	//dots
	fill(0);
	noStroke();
	ellipse(0 - 13, 0 - 3, 10, 10);
	ellipse(0 + 13, 0 + 13, 10, 10);
	ellipse(0 - 13, 0 + 13, 10, 10);
	ellipse(0 + 13, 0 - 3, 10, 10);
	ellipse(0 - 8, 0 + 20, 12, 10);
	ellipse(0 + 8, 0 + 20, 12, 10);
	ellipse(0, 0, 20, 15);
	fill(255);
	ellipse(0 + 5, 0 - 5, 10, 7);
	ellipse(0 - 5, 0 - 5, 10, 7);

	// black part on top of red
	fill(0);
	noStroke();
	ellipse(0, 0 - 15, 30, 20);
	fill(255);
	ellipse(0 + 5, 0 - 20, 7, 6);
	ellipse(0 - 5, 0 - 20, 7, 6);
	 // head
	 fill(0);
	 rect(0 - 8, 0 - 30, 15, 10, 3);
	 rect(0 - 4, 0 - 35, 7, 10);
	 fill(255);
	 ellipse(0 - 4, 0 - 30, 5, 4);
	 ellipse(0 + 4, 0 - 30, 5, 4);

	 //antanna
	 stroke(196, 191, 29);
	 line(0 + 10, 0 - 40, 0 + 6, 0 - 30);
	 line(0 - 10, 0 - 40, 0 - 6, 0 - 30);
	 fill(0);
	 ellipse(0 - 15, 0 - 35, 4, 4);
	 ellipse(0 + 15, 0 - 35, 4, 4);
	 stroke(0);
	 line(0 + 15, 0 - 35, 0 + 5, 0 - 23);
	 line(0 - 15, 0 - 35, 0 - 5, 0 - 23);

	 //legs
	 line(this.leg1x, this.leg1y, 0 - 9, 0 - 20);
	 line(this.leg2x, this.leg2y, 0 + 9, 0 - 20);
	 line(this.leg3x, this.leg3y, 0 + 10, 0 - 10);
	 line(this.leg4x, this.leg4y, 0 - 10, 0 - 10);
	 line(this.leg5x, this.leg5y, 0 - 23, 0 + 20);
	 line(this.leg6x, this.leg6y, 0 + 23, 0 + 20);
	}

	// We will work inside this function during class on April 7
	// Animate the insect
	animate(){
	//leg1
		if(this.leftleg1movex == true){
			this.leg1x++;
			if(this.leg1x > 0 - 25){
				this.leftleg1movex = false;
			}
		} else {
			this.leg1x--;
			if (this.leg1x < 0 - 27){
				this.leftleg1movex = true;
			}
		}

		if(this.leftleg1movey == true){
			this.leg1y++;
			if(this.leg1y > 0 - 25){
				this.leftleg1movey = false;
			}
		} else {
			this.leg1y--;
			if (this.leg1y < 0 - 31){
				this.leftleg1movey = true;
			}
		}
//leg2
		if(this.leftleg2movex == true){
			this.leg2x++;
			if(this.leg2x > 0 + 25){
				this.leftleg2movex = false;
			}
		} else {
			this.leg2x--;
			if (this.leg2x < 0 + 30){
				this.leftleg2movex = true;
			}
		}

		if(this.leftleg2movey == true){
			this.leg2y++;
			if(this.leg2y > 0 - 25){
				this.leftleg2movey = false;
			}
		} else {
			this.leg2y--;
			if (this.leg2y < 0 - 30){
				this.leftleg2movey = true;
			}
		}
	//leg3
		if(this.leftleg3movex == true){
			this.leg3x++;
			if(this.leg3x > 0 + 22){
				this.leftleg3movex = false;
			}
		} else {
			this.leg3x--;
			if (this.leg3x < 0 + 24){
				this.leftleg3movex = true;
			}
		}

		if(this.leftleg3movey == true){
			this.leg3y++;
			if(this.leg3y > 0 - 13){
				this.leftleg3movey = false;
			}
		} else {
			this.leg3y--;
			if (this.leg3y < 0 - 19){
				this.leftleg3movey = true;
			}
		}
	//leg4
		if(this.leftleg4movex == true){
			this.leg4x++;
			if(this.leg4x > 0 - 22){
				this.leftleg4movex = false;
			}
		} else {
			this.leg4x--;
			if (this.leg4x < 0 - 27){
				this.leftleg4movex = true;
			}
		}

		if(this.leftleg4movey == true){
			this.leg4y++;
			if(this.leg4y > 0 - 13){
				this.leftleg4movey = false;
			}
		} else {
			this.leg4y--;
			if (this.leg4y < 0 - 18){
				this.leftleg4movey = true;
			}
		}
	//leg5
	if(this.leftleg5movex == true){
			this.leg5x++;
			if(this.leg5x > 0 - 30){
				this.leftleg5movex = false;
			}
		} else {
			this.leg5x--;
			if (this.leg5x < 0 - 32){
				this.leftleg5movex = true;
			}
		}

		if(this.leftleg5movey == true){
			this.leg5y++;
			if(this.leg5y > 0 + 23){
				this.leftleg5movey = false;
			}
		} else {
			this.leg5y--;
			if (this.leg5y < 0 + 29){
				this.leftleg5movey = true;
			}
		}
	//leg6
		if(this.leftleg6movex == true){
			this.leg6x++;
			if(this.leg6x > 0 + 30){
				this.leftleg6movex = false;
			}
		} else {
			this.leg6x--;
			if (this.leg6x < 0 + 35){
				this.leftleg6movex = true;
			}
		}

		if(this.leftleg6movey == true){
			this.leg6y++;
			if(this.leg6y > 0 + 28){
				this.leftleg6movey = false;
			}
		} else {
			this.leg6y--;
			if (this.leg6y < 0 + 23){
				this.leftleg6movey = true;
			}
		}

		pop();
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