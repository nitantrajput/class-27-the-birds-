class Chain{
    constructor(BodyA , BodyB){
      var options = {
          bodyA : BodyA,
          bodyB : BodyB,
          length : 50,
          stifness : 0.2
      }
      this.body = Constraint.create(options)
      World.add(world,this.body)
      this.bodyA = BodyA
      this.bodyB = BodyB
    }
  display(){
      line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y)
  }
  
  }