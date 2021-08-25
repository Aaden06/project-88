var canvas = new fabric.Canvas('myCanvas');
ballx = 10;
bally = 10;
targetx = 430;
targety = 350;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:targety,
			left:targetx
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:bally,
			left:ballx
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ballx==targetx)&&(bally==targety)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have hit the goal!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(bally >0){
			bally = bally - block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When down arrow key is pressed, X = " + ballx + " , Y = " + bally);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(bally <=550){
			bally = bally + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When down arrow key is pressed, X = " + ballx + " , Y = " + bally);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ballx >5)
		{
			ballx = ballx - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When down arrow key is pressed, X = " + ballx + " , Y = " + bally);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ballx <=800)
		{
			ballx = ballx + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When down arrow key is pressed, X = " + ballx + " , Y = " + bally);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

