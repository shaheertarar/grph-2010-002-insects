
// You will be writing all of your code in this function
class InsectKarlie{
	// Do not add any code to this function
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.leftWingRotation=120;
		this.rightWingRotation=275;
		this.leftWingOpen=true;
		this.rightWingOpen=true;
		this.rightSmall=300;
		this.leftSmall=420;
		this.rightSmallOpen=true;
		this.leftSmallOpen=true;

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

		noStroke();
		fill(0);
		//tail
		rect(0-10,0-10,10,60);
		//body
		rect(0-12.5, 0-20, 15, 20, 5);
		//head
		fill(7, 117, 9);
		rect(0-14, 0-30, 18, 13, 5);
		//left eye
		fill(255, 160, 36);
		circle(0-14,0-30,8);
		//right eye
		fill(255, 160, 36);
		circle(0+4,0-30,8);
	 	// wings
	 	//left wing big
	 fill(145, 191, 101, 100);
	 angleMode(DEGREES);
	 push();
	 translate(0 - 4, 0 -18);
	 ellipseMode(CORNERS);
	 rotate(this.leftWingRotation);
	ellipse(0, 0, 13, 45);
	 pop();

	//  	 fill(145, 191, 101, 100);
	//  angleMode(DEGREES);
	//  push();
	//  translate(0 - 4, 0 -18);
	//  ellipseMode(CORNER);
	//  rotate(this.leftWingRotation);
	// ellipse(0, 0, 13, 45);
	//  pop();


//right wing big
	push();
	translate(0 - 4, 0-5);
	ellipseMode(CORNER);
	rotate(this.rightWingRotation);
	ellipse(0, 0, 13, 45);
	pop();

	//right small
	push();
	translate(0 - 8, 0-5);
	ellipseMode(CORNER);
	rotate(this.rightSmall);
	ellipse(0, 0, 10, 30);
	pop();

	//left small
		 push();
	 translate(0 - 8, 0 -15);
	 ellipseMode(CORNER);
	 rotate(this.leftSmall);
	ellipse(0, 0, 10, 30);
	 pop();

	 pop();
	}


	// We will work inside this function during class on April 7
	// Animate the insect
	animate(){
if(this.leftWingOpen==true){
	this.leftWingRotation=this.leftWingRotation+1;
	if(this.leftWingRotation>120){
		this.leftWingOpen=false;
	}
}else{
	this.leftWingRotation=this.leftWingRotation-1;
	if(this.leftWingRotation<85){
		this.leftWingOpen=true;
	}
}
if (this.rightWingOpen == true){
			this.rightWingRotation++;
			if (this.rightWingRotation >275){
				this.rightWingOpen = false;
			}
		} else {
			this.rightWingRotation--;
			if (this.rightWingRotation < 250){
				this.rightWingOpen = true;
			}
		}
		//left small
	if(this.leftSmallOpen==true){
	this.leftSmall=this.leftSmall+1;
	if(this.leftSmall>430){
		this.leftSmallOpen=false;
	}
}else{
	this.leftSmall=this.leftSmall-1;
	if(this.leftSmall<420){
		this.leftSmallOpen=true;
	}
}
	//right small
	if(this.rightSmallOpen==true){
	this.rightSmall=this.rightSmall+1;
	if(this.rightSmall>310){
		this.rightSmallOpen=false;
	}
}else{
	this.rightSmall=this.rightSmall-1;
	if(this.rightSmall<300){
		this.rightSmallOpen=true;
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