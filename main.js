var canvas = new fabric.Canvas('myCanvas');

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

player_object = ""

greencar_x = 5;
greencar_y = 25;

function car_update()
{
	fabric.Image.fromURL("car2.png", function(Img)
	{
		player_object = Img;
		player_object.scaleToWidth(75)
		player_object.scaleToWidth(100)
		player_object.set({
			top:greencar_y,
			left:greencar_x
		}); 
		canvas.add(player_object);
	});
};

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
	if(greencar_y >=0) 
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed, x =" + greencar_x + "| y" + greencar_y);
		canvas.remove(player_object);
		car_update();
	}
}

function down()
{
	if(greencar_y <=300) 
	{
		greencar_y = greencar_y + 10;
		console.log("When up arrow is pressed, x =" + greencar_x + "| y" + greencar_y);
		canvas.remove(player_object);
		car_update();
	}
}

function left()
{
	if(greencar_x >=0) 
	{
		greencar_x = greencar_x - 10;
		console.log("When up arrow is pressed, x =" + greencar_x + "| y" + greencar_y);
		canvas.remove(player_object);
		car_update();
	}
}

function right()
{
	if(greencar_x <=700) 
	{
		greencar_x = greencar_x + 10;
		console.log("When up arrow is pressed, x =" + greencar_x + "| y" + greencar_y);
		canvas.remove(player_object);
		car_update();
	}
}
