class Ground{

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

        var groundPositon = this.body.position

        rectMode(CENTER)
        fill("yellow")
        rect(groundPositon.x,groundPositon.y,this.height,this.width)

    }
}