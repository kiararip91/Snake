//Snake class
function Snake(){
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];


  this.update = function(scl){

    for(i=0; i<this.tail.length-1; i++){
      this.tail[i] = this.tail[i+ 1];
    }

    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }

    this.x = this.x + this.xSpeed*scl;
    this.y = this.y + this.ySpeed*scl;
    frameRate(10);

    //this.x = constrain(this.x, 0, width - scl);
    //this.y = constrain(this.y, 0, height - scl);

  }

  this.show = function(){

    fill(255);

    for(i=0; i<this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x,this.y,scl,scl);

  }

  this.dir = function(x,y){
    this.xSpeed = x;
    this.ySpeed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);

      if (d < 1 || pos.x >= width-scl || pos.y >= height-scl || pos.x <= 0 || pos.y <= 0) {
        console.log('starting over');
        this.total = 0;
        this.tail = [];
        this.x=0;
        this.y=0;
        this.xSpeed = 1;
        this.ySpeed = 0;
      }
    }
  }

  this.eat = function(pos){
    var d = dist(this.x, this.y, pos.x, pos.y);
    if(d < 1){
      this.total++;
      return true;
    }

  }
}
