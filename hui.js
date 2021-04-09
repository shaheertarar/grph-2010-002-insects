
// You will be writing all of your code in this function
class InsectHui{
	// Do not add any code to this function
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.topleftR =2.7;
		this.topleftW =true;
		this.toprightR =5.2;
		this.toprightW =true;
		this.bottomleftR =7.5;
		this.bottomleftW=true;
		this.bottomrightR=6.6;
		this.bottomrightW=true;
		this.dotleftR=0;
		this.dotleftW=true;
		this.dotrightR=0;
		this.dotrightW=true;

		this.offset = floor(random(1000));
		this.increment = 0.001;
		this.speed = 5;
		this.theta = 90;
	}

	// We will work inside this function during class on March 31
	// Draw the insect
	// Make sure ALL of your shape x and y positions are in reference to this.x and this.y
	display(){
		push();
		translate(this.x, this.y);
		rotate(this.theta);
		//leftbottomwing
		angleMode(RADIANS);
		noStroke();
		fill(252,236,94);
		push();
		translate(0-6,0-14);
		angleMode(CORNER);
		rotate(this.bottomleftR);  //7.5
		rect(0,0,25,25,0,10,5,10);
		pop();

		//rightbottomwing
		noStroke();
		fill(252,236,94);
		push();
		translate(0+6,0-14);
		angleMode(CORNER);
		rotate(this.bottomrightR); //6.6
		rect(0,0,25,25,0,10,5,10);
		pop();


		//body
		noStroke();
		fill(243,209,72);
		ellipse(0, 0, 15,45);

		//body
		noStroke();
		fill(0,70);
		ellipse(0, 0-12, 12,20);

		//head
		fill(0);
		rect(0-6, 0-30,12, 14, 6);

		//lefteye
		fill(102,102,102);
		push();
		translate(0-1, 0-28);
		ellipseMode(CORNER);
		rotate(2.7);
		ellipse(0,0,6,3);
		pop();

		//righteye
		fill(102,102,102);
		push();
		translate(0+2, 0 -31);
		ellipseMode(CORNER);
		rotate(6.8);
		ellipse(0, 0, 6,3);
		pop();

		//beard
		stroke(1);
		fill(140,60,25);
		line(0-5,0-45,0,0-20);
		line(0+5, 0-45,0,0-20);

		noStroke();
		fill(0);
		circle(0,0-30,5);

		//leftwings
		noStroke();
		fill(255,245,120);
		push();
		translate(0-4,0-15);
		angleMode(CORNER);
		rotate(this.topleftR);  //2.7
		rect(0,0,35,35,5,10,5,10);
		pop();

		//rightwings
		noStroke();
		fill(255,245,120);
		push();
		translate(0+4,0-16);
		angleMode(CORNER);
		rotate(this.toprightR);  //5.2
		rect(0,0,35,35,5,10,5,10);
		pop();

		//leftsmallwings
		fill(250,193,92);
		push();
		translate(0-4,0-15);
		angleMode(CORNER);
		rotate(this.topleftR);  //2.7
		rect(0,0,15,15,3,7,3,7);
		pop();
		
		//rightsamllwing
		fill(250,193,92);
		push();
		translate(0+4,0-16);
		angleMode(CORNER);
		rotate(this.toprightR); //5.3
		rect(0,0,15,15,3,7,3,7);
		pop();


		stroke(1);
		// fill(255,245,120);
		push();
		translate(0-4,0-15);
		angleMode(CORNER);
		rotate(this.dotleftR);
		circle(50-73, 50-70, 4);
		pop();
		push();
		translate(0-4,0-15);
		angleMode(CORNER);
		rotate(this.dotrightR);
		circle(50-20, 50-70, 4);
		pop();

		//leftdot
		 fill(0);
		 push();
		translate(0-4,0-15);
		angleMode(CORNER);
		rotate(this.dotleftR);
		 circle(50-94, 50-65, 2);
		 circle(50-92, 50-60, 2);
		 circle(50-90, 50-55, 2);
		 circle(50-88, 50-50, 2);
		 circle(50-86, 50-45, 2);
		 circle(50-82, 50-40, 2);
		 pop();

		 push();
		translate(0-4,0-15);
		angleMode(CORNER);
		rotate(this.dotleftR);
		 circle(50-71, 50-35, 2);
		 circle(50-70, 50-30, 2);
		 circle(50-69, 50-25, 2);
		 circle(50-66, 50-20, 2);
		 pop();

		 //rightdot
		 push();
		translate(0-4,0-15);
		angleMode(CORNER);
		rotate(this.dotrightR);
		 circle(50+2, 50-65, 2);
		 circle(50, 50-60, 2);
		 circle(50-2, 50-55, 2);
		 circle(50-4, 50-50, 2);
		 circle(50-6, 50-45, 2);
		 circle(50-10, 50-40, 2);
		 pop();

		 push();
		translate(0-4,0-15);
		angleMode(CORNER);
		rotate(this.dotrightR);
		 circle(50-20, 50-35, 2);
		 circle(50-21, 50-30, 2);
		 circle(50-22, 50-25, 2);
		 circle(50-25, 50-20, 2);
		 pop();

		 pop();
		 angleMode(DEGREES);
	}

	// We will work inside this function during class on April 7
	// Animate the insect
	animate(){
		if(this.topleftW ==true){
			this.topleftR= this.topleftR+0.03;
			if(this.topleftR>2.7){
				this.topleftW =false;
			}
		}else{
			this.topleftR =this. topleftR-0.03;
			if(this.topleftR <2.7){
				this.topleftW =true;
			}
		}
		if(this.toprightW ==true){
			this.toprightR= this.toprightR+0.03;
			if(this.toprightR>5.2){
				this.toprightW =false;
			}
		}else{
			this.toprightR =this. toprightR-0.03;
			if(this.toprightR <5.2){
				this.toprightW =true;
			}
		}

		if(this.bottomleftW ==true){
			this.bottomleftR= this.bottomleftR+0.03;
			if(this.bottomleftR>7.5){
				this.bottomleftW =false;
			}
		}else{
			this.bottomleftR =this. bottomleftR-0.03;
			if(this.bottomleftR <7.5){
				this.bottomleftW =true;
			}
		}
			if(this.bottomrightW ==true){
			this.bottomrightR= this.bottomrightR+0.03;
			if(this.bottomrightR>6.6){
				this.bottomrightW =false;
			}
		}else{
			this.bottomrightR =this. bottomrightR-0.03;
			if(this.bottomrightR <6.6){
				this.bottomrightW =true;
			}
		}

		if(this.dotleftW ==true){
			this.dotleftR= this.dotleftR+0.03;
			if(this.dotleftR>0){
				this.dotleftW =false;
			}
		}else{
			this.dotleftR =this. dotleftR-0.03;
			if(this.dotleftR <7.5){
				this.dotleftW =true;
			}
		}

		if(this.dotrightW ==true){
			this.dotrightR= this.dotrightR+0.03;
			if(this.dotrightR>0){
				this.dotrightW =false;
			}
		}else{
			this.dotrightR =this. dotrightR-0.03;
			if(this.dotrightR <7.5){
				this.dotrightW =true;
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