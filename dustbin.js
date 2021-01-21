class Dustbin{

    constructor(x,y,height,width){        
      
        var options = {

            isStatic : true
        }

        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.body = Bodies.rectangle(x,y,height,width,options)
        World.add(world,this.body)
    }

    display(){

        var dustbinpos = this.body.position

        rectMode(CENTER)
        fill("white")
        rect(dustbinpos.x,dustbinpos.y,this.height,this.width)
    }
}