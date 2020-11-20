class dustbin{
constructor(x,y){
    this.x=x
    this.y=y
   
var options={isStatic:true}
this.body= Bodies.rectangle(this.x,this.y,40,230,options)
World.add(world,this.body)
}
display(){
var pos= this.body.position
push()
translate(pos.x,pos.y)
rectMode(CENTER)
strokeWeight(4)
stroke("yellow")
fill("green")
rect(0,0,20,200)
pop()
}
}