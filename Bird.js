class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.trijectory = []

    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
    var position = [this.body.position.x,this.body.position.y]
    this.trijectory.push(position)
    }
    for(var i = 0;i < this.trijectory.length;i++ ){
      image(this.image2,this.trijectory[i][0],this.trijectory[i][1])
    }
    
  }
}
var array=[["avc","string","world","hello"],["tiger","panda"],["java","python"]]
array.push("ankur")
console.log(array)