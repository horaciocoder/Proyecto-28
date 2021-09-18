class Joint {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 10
        }
        this.joint = Constraint.create(options);
        World.add(world, this.joint);
        this.pointA = bodyA.position;
        this.pointB = pointB;
    }
    fly() {
        this.joint.bodyA = null;
    }
    display() {
        if (this.joint.bodyA) {
        stroke("black");
        strokeWeight(4);
        line(this.pointA.x, this.pointA.y, this.pointB.x, this.pointB.y);
        }
    }
}