var canvas= new fabric.Canvas("myCanvas");
var player_x= 10;
var player_y= 10;
var block_img_width= 30;
var block_img_height= 30;
var player_object= "";
var block_img_object= "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_Image(get_Image){
    fabric.Image.fromURL(get_Image, function(Img){
    block_img_object=Img;
    block_img_object.scaleToWidth(block_img_width);
    block_img_object.scaleToHeight(block_img_height);
    block_img_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    var keypressed=e.keyCode;
    console.log(keypressed);

    if( keypressed=='80'){
        console.log("p and shift are pressed together");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if( keypressed=='77'){
        console.log("m and shift are pressed together");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(keypressed=='37'){
        left();
        console.log("left");
    }

    if(keypressed=='38'){
        up();
        console.log("up");
    }

    if(keypressed=='39'){
        right();
        console.log("right");
    }

    if(keypressed=='40'){
        down();
        console.log("down");
    }
    
    if(keypressed=='87'){
        new_Image("wall.jpg");
        console.log("w is pressed in the world");
    }

    if(keypressed=='71'){
        new_Image("ground.png");
        console.log("g is pressed in the ground");
    }

    if(keypressed=='76'){
        new_Image("light_green.png");
        console.log("l is pressed in the light");
    }

    if(keypressed=='84'){
        new_Image("trunk.jpg");
        console.log("t is pressed in the trunk of a tree");
    }

    if(keypressed=='82'){
        new_Image("roof.jpg");
        console.log("r is pressed in the roof");
    }

    if(keypressed=='89'){
        new_Image("yellow_wall.png");
        console.log("y is pressed in the yellow");
    }

    if(keypressed=='68'){
        new_Image("dark_green.png");
        console.log("d is pressed in the drake");
    }

    if(keypressed=='85'){
        new_Image("unique.png");
        console.log("u is pressed in the udta punjab");
    }

    if(keypressed=='67'){
        new_Image("cloud.jpg");
        console.log("c is pressed in the cloud");
    }
}

function up(){
    if(player_y>0){
        player_y=player_y-block_img_height;
        console.log("height of block is "+block_img_height);
        console.log("up arrow is pressed, x="+player_x+", y="+player_y );
        canvas.remove(player_object);
        player_update();
    } 
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_img_height;
        console.log("height of block is "+block_img_height);
        console.log("down arrow is pressed, x="+player_x+", y="+player_y );
        canvas.remove(player_object);
        player_update();
    } 
}

function left(){
    if(player_x>0){
        player_x=player_x-block_img_width;
        console.log("width of block is "+block_img_width);
        console.log("left arrow is pressed, x="+player_x+", y="+player_y );
        canvas.remove(player_object);
        player_update();
    } 
}

function right(){
    if(player_x<=850){
        player_x=player_x+block_img_width;
        console.log("width of block is "+block_img_width);
        console.log("right arrow is pressed, x="+player_x+", y="+player_y );
        canvas.remove(player_object);
        player_update();
    } 
}

