class SlingShot {
   constructor(bodyA,pointB) {
    var options = {
        bodyA:bird.body,
        pointB:pointB,
        stifness:0.04,
        length:10
       } 
       this.pointB=pointB;
       this.sling = Constraint.create(options);
       World.add(world,this.sling);

   }
   fly(){
   this.sling.bodyA=null;

   }
 display(){
     var pointA = this.sling.bodyA.position;
     var pointB = this.pointB;
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
   
    
 }

}