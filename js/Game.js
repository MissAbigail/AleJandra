class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  alice = createSprite(480,450,50,50);
  alice.addImage(aliceImg);
  alice.scale= 0.20;
  lucy = createSprite(300,600,50,50);
  lucy.addImage(lucyImg);
  lucy.scale = 0.20;
  plays = [alice,lucy];
  carbonGroup = new Group();
    
    
   
  }

  
  play(){
    form.hide();

    Player.getPlayerInfo();
    //player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      image(backgroundImg2,0,0,width,height);
      
      //index of the array
      var index = 0;
      drawSprites();
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
          var x = allPlayers[plr].positionX;
          var y = height - allPlayers[plr].positionY;
  
          plays[index - 1].position.x = x;
          plays[index - 1].position.y = y;
        
        }
  
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
     //player.distance +=10
      player.positionY += 10;
      player.update();
    }

    if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50) {
      player.positionX -= 5;
      player.update();
    }

    if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 300) {
      player.positionX += 5;
      player.update();
    }

    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      //player.distance +=10
       player.positionY -= 10;
       player.update();
     }

    if (frameCount % 20 === 0) {
      gemas = createSprite(random(100, 1000), 0, 100, 100);
      gemas.velocityY = 6;
      var rand = Math.round(random(1,4));
      switch(rand){
          case 1: gemas.addImage("gema1",diamanteImg);
          gemas.scale = 0.10;
          break;
          case 2: gemas.addImage("gema2", gemaImg1);
          gemas.scale = 0.10;
          break;
          case 3: gemas.addImage("gema3", gemaImg2);
          gemas.scale = 0.10;
          break;
          case 4: gemas.addImage("gema4", gemaImg3);
          gemas.scale = 0.10;
          break;
        
      }
      gemasGroup.add(gemas);  
      
  }
  if(frameCount % 40 === 0){
    this.addObstacles()
 }

  if (player.index !== null) {
    for (var i = 0; i < gemasGroup.length; i++) {
        if (gemasGroup.get(i).isTouching(plays)) {
            gemasGroup.get(i).destroy();
            player.score =player.score+1;
            player.update();
            

        }
    }
    if(carbonGroup.isTouching(plays)){
      gameState = 2;
    }
  }
    //drawSprites();    
  }

    end(){ 
    console.log("Game Ended"); 
    console.log(player.rank);
    }    

    
    addObstacles()
    {
       
            var x, y;
      
            x = random(0, width-100);
            y = 0
                var obstacle = createSprite(x, y);
                obstacle.addImage("carbon", carbonImg);
                obstacle.velocityY = 4;
          
                obstacle.scale = 0.15;
                carbonGroup.add(obstacle);
            
           
          
    }
    gameOver() {
      textSize(40)
      fill("white")
      text("FIN DEL JUEGO",displayWidth/2-400,displayHeight/2-200)
      }

end(){
//console.log("Juego terminado");
//console.log(player.rank)
this.gameOver();
}

}