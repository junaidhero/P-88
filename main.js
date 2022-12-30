var canvas = new fabric.canvas("myCanvas");

ball_x=0
ball_y=0
hole_x=800
hole_y=400

block_image_width = 5;
block_image_height = 5;


function load_img(){
	fabric.Image.fromURL("golf-h.png", function (Img) {
          hole_object = Img
          hole_object.scaleToWidth(50)
		  hole_object.scaleToHeight(50)
		  hole_object.set({
			top:hole_x,
			left:hole_y   
		  })
		  canvas.add(hole_obj)
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img
		ball_obj.scaleToWidth(50)
		ball_obj.scaleToHeight(50)
		ball_obj.set({
		  top:hole_x,
		  left:hole_y   
		})
		canvas.add(ball_obj)
}) }
	

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y))
	canvas.remove(ball.obj)
	document.getElementById("hd3").innerHTML="You Have Hit The Goal!!!"
	document.getElementById("myCanvas").style.borderColor="red"
	


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
		if(ball_y >=0)
		{
			ball_y = ball_y + block_image_height;

            console.log("block image height = " + block_image_height )
			console.log("when Down arrow key is pressed, X = " +ball_x +",Y = " + ball_y)
			canvas.remove(ball_obj);
			new_image();
		 }
	}

	function down()
	{
		 if(ball_y <=450 )
		 {
			ball_y = ball_y + block_image_height;

            console.log("block image height = " + block_image_height )
			console.log("when Down arrow key is pressed, X = " +ball_x +",Y = " + ball_y)
			canvas.remove(ball_obj);
			new_image();
		 }
	}

	function left()
	{
		if(ball_x >=550)
		{
			{
				ball_x = ball_x + block_image_width;
	
				console.log("block image width = " + block_image_width )
				console.log("when Down arrow key is pressed, X = " +ball_x +",Y = " + ball_y)
				canvas.remove(ball_obj);
				new_image();
			 }
		}
	}

	function right()
	{
		if(ball_x <=900)
		{
			
				ball_x = ball_x + block_image_width;
	
				console.log("block image width = " + block_image_width )
				console.log("When Down arrow key is pressed, X = " +ball_x +",Y = " + ball_y)
				canvas.remove(ball_obj);
				new_image();
			 
		}
	}
	


