var dog,happyDog;
var dogs,happyDogs
var database;
var foodS, foodStock;



function preload()
{
  dogs = loadImage("images/dogImg.png");
  happyDogs = loadImage("images/dogImg1.png");
}


function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {

  if(x <= 0) {
    x = 0;
    
  }

  else {
    x = x-1;
  }

  database.ref('/').update({
    Food: x})
}




function setup() {
  createCanvas(500, 500);

  dog = createSprite(250,250,10,10);
  dog.addImage(dogs);
  
  //foodS = 20

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  
  
}


function draw() {  
  background(46,139,87)  //maybe add rgb() if this doesn't work
  dog.scale = (0.25)
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    
    dog.addImage(happyDogs);
  }
  if(foodS<=0) {
    dog.addImage(dogs);
    textSize(20);
    fill("red");
    stroke(2);
    text("You ran out of food!" ,200,100)
  }
  drawSprites();
  //add styles here
  textSize(20);
  fill("red")
  stroke(2);
  text("Food Remaining: " + foodS,200,150);

}





