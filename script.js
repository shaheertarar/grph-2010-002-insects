// Please only write code in sections where specified, otherwise the template might break!

console.log("Insect template is working!");

var insects = [];

// Do not add any code to this function
function setup(){
	createCanvas(windowWidth, windowHeight);

	//snail
	var ziwen = new InsectZiwen(random(width), random(height));
	insects.push(ziwen);

	//centipede
	var josh = new InsectJosh(random(width), random(height));
	insects.push(josh);

	//ladybug
	var jenny = new InsectJenny(random(width), random(height));
	insects.push(jenny);

	//ladybug
	var sophia = new InsectSophia(random(width), random(height));
	insects.push(sophia);

	//ladybug
	var yaxin = new InsectYaxin(random(width), random(height));
	insects.push(yaxin);

	//cicada
	var shaheer = new InsectShaheer(random(width), random(height));
	insects.push(shaheer);

	//morpho butterfly
	var tania = new InsectTania(random(width), random(height));
	insects.push(tania);

	//wasp
	var june = new InsectJune(random(width), random(height));
	insects.push(june);

	//dragonfly
	var karlie = new InsectKarlie(random(width), random(height));
	insects.push(karlie);

	//bee
	var sabrina = new InsectSabrina(random(width), random(height));
	insects.push(sabrina);

	//fly
	var sally = new InsectSally(random(width), random(height));
	insects.push(sally);

	//moth
	var hui = new InsectHui(random(width), random(height));
	insects.push(hui);

	// bee
	var zeyun = new InsectZeyun(random(width), random(height));
	insects.push(zeyun);
}

// Do not add any code to this function
function draw(){
	background(230);

	textSize(20);
	fill(140);
	text("GRPH-2010-002 Insect Emporium", 20, 35);

	textSize(12);
	text("Insects by Josh Arseneault, Tania Chakravarty, Jenny Chan, June Jung, Yiwei Ke, Yaxin Luo, Ziwen Meng, Karlie Nguyen, Sabrina Song, Sally Wang, Hui Xu, Sophia Xu, Zeyun Xu and Shaheer Tarar.", 20, height - 28, width - 40);

	for (var i=0; i<insects.length; i++){
		insects[i].display();
		insects[i].animate();
		insects[i].move();
	}
}