class Paper {
    constructor(x, y) {
      var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      //------ no width and height for circle, only radius
      this.body = Bodies.circle(x, y, 20, options);
      //this.width = 50;
      //this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
    //-------- its not ball its 'this.body' its already save in 'pos' variable
    //------since translate is given (pos.x, pos.y) the rect x & y becomes 0
      ellipse(0,0,20,20);
      fill("red");
      strokeWeight(4);
      stroke("red");
      pop();
    }
  };