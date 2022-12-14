class Form {
  constructor() {
    this.input = createInput("Nombre");
    this.button = createButton('Jugar');
    this.greeting = createElement('h2');
    this.reset = createButton('reset');
  }
  
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Juego de Aldeanas");
    title.position(displayWidth/2 - 200, 0);

    this.input.position(displayWidth/2 - 150, displayHeight/2 - 80);
    this.button.position(displayWidth/2 - 90, displayHeight/2);
    this.reset.position(displayWidth-300,20);


    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.addPlayer();
      player.updateCount(playerCount);
      this.greeting.html("Hola " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);   
     });
     this.reset.mousePressed(()=>{
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {},
        //CarsAtEnd: 0
      });
      window.location.reload();
    });
     
  }
}
