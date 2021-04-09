
// You will be writing all of your code in this function
class InsectJenny{
	// Do not add any code to this function
	constructor(x, y){
		this.x = x;
		this.y = y;

	////////////adding////////////
		this.pulse = 0;
		this.pulsing =true;

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
		///////circle body//////////
		noStroke();
        fill(255,140,0);
		ellipse(0, 0+5, 35, 38);
		
		////////half circle head///////
		noStroke();
        fill(0,0,0);
		arc(0, 0-10, 22,18, -PI, 0, CHORD);

		/////////circle small head////////
		noStroke();
        fill(0,0,0);
		ellipse(0, 0-17.5, 9, 6);

		////////antenna///////////
		noStroke();
        fill(0,0,0);
		ellipse(0-4, 0-20, 6, 1);

		noStroke();
        fill(0,0,0);
		ellipse(0+4, 0-20, 6, 1);

		

		/////////////////legs///////////////
		noStroke();
        fill(0,0,0);
		//left top//
		rect(0-15.8, 0-10, 5, 0.3); //horizontal
		rect(0-15.8, 0-15, 0.3, 5); //vertical
		//left middle//
		rect(0-19.9, 0, 3, 0.3);
		rect(0-19.9, 0, 0.3, 6);
		rect(0-21.9, 0+5.7, 2, 0.3);
		//left bottom//
		rect(0-17.8, 0+15, 3, 0.3);
		rect(0-17.9, 0+15, 0.3, 8);
		rect(0-19.9, 0+22.7, 2, 0.3);
		//right top//
		rect(0+10.8, 0-10, 5, 0.3); //horizontal
		rect(0+15.5, 0-15, 0.3, 5); //vertical
		//right middle//
		rect(0+16.9, 0, 3, 0.3);
		rect(0+19.9, 0, 0.3, 6);
		rect(0+19.9, 0+5.7, 2, 0.3);
		//right bottom//
		rect(0+14.8, 0+15, 3, 0.3);
		rect(0+17.7, 0+15, 0.3, 8);
		rect(0+17.9, 0+22.7, 2, 0.3);

		/////////eyes///////
		//left
		noStroke(); 
        fill(255,255,255);
		ellipse(0-1.5, 0-19, 1, 1);
		//right
		noStroke(); 
        fill(255,255,255);
		ellipse(0+1.5, 0-19, 1, 1);

		/////////black spots on head///////
		//left
		noStroke(); 
        fill(255,255,255);
		ellipse(0-6.8, 0-14, 3, 3.3);
		//right
		noStroke();
        fill(255,255,255);
		ellipse(0+6.8, 0-14, 3, 3.3);

		//line going down body
		noStroke();
        fill(0,0,0);
		rect(0, 0-10, 0.1, 34);

		///////spots on body////////
		noStroke(); 
        fill(0,0,0);
		//left
		ellipse(0-10, 0-4, this.pulse+6); //top 
		ellipse(0-12.8, 0+3, this.pulse+5); //second row left
		ellipse(0-6.8, 0+5, this.pulse+5); //second row close to mid line
		ellipse(0-10, 0+11, this.pulse+5); //third row
		ellipse(0-4, 0+18, this.pulse+6); //last row 
		//right
		ellipse(0+10, 0-4, this.pulse+6);//top 
		ellipse(0+12.8, 0+3, this.pulse+5);//second row left
		ellipse(0+6.8, 0+5, this.pulse+5);//second row close to mid line
		ellipse(0+10, 0+11, this.pulse+5);//third row
		ellipse(0+4, 0+18, this.pulse+6);//last row 

		pop();
	}

	// We will work inside this function during class on April 7
	// Animate the insect
	animate(){
	//circles on body
		if(this.pulsing==true){
			this.pulse = this.pulse +0.05; //speed
			if(this.pulse > 0.5){ //size
				this.pulsing=false;
			}
		}else{
			this.pulse = this.pulse -0.05; //speed
			if(this.pulse < -0.5){ //size
				this.pulsing=true;
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