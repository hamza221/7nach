function snake(){
    this.x=1*scl;
    this.y=1*scl;
    this.xspeed=0;
    this.yspeed=0;
    this.total=0;
    this.tail=[];
    this.maxx =10;
    this.reset=function(){
        this.x=1*scl;
    this.y=1*scl;
    this.xspeed=1;
    this.yspeed=0;
    this.total=0;
    this.tail=[];
   

    }
    this.speed=function(){
        if ((this.total>=0)&&(this.total<=3)){
            this.maxx = 10;
        }else if ((this.total>3)&&(this.total<=6)){
            this.max=20;
        }
        else if ((this.total>6)&&(this.total<10)){
            this.max=25
        }
        else if ((this.total>=10)&&(this.total<50)){
            this.max=30
        }
        else {
            this.max=40;
        }
       
       
        return this.maxx;
    }
    this.death=function(){
        for(var i=0;i<this.tail.length;i++){
            pos = this.tail[i];
            q=((this.x===pos.x)&&(this.y==pos.y));
            
            if(q ){
                this.reset();
                
            }
           
        }
    }
    this.update=function(){
        if(this.total===this.tail.length){ 
        for(var i =0;i<this.total-1;i++){
            this.tail[i]=this.tail[i+1];
        }}
        this.tail[this.total-1]=createVector(this.x,this.y);
      this.x=this.x+this.xspeed*scl;
      this.y=this.y+this.yspeed*scl;
      this.x=constrain(this.x,0,width-scl);
      this.y=constrain(this.y,0,height-scl);
    }
    this.show=function(){

        fill(255);        
        for(var i =0;i<=this.tail.length-1;i++){        
        rect(this.tail[i].x,this.tail[i].y,scl,scl);
    }   
        rect(this.x,this.y,scl,scl);
      
      
    }
    this.eat=function(pos){
        
        var d=dist(this.x,this.y,pos.x,pos.y);
        if(d<1){
            this.total++;
            return true;
        }
        else{
            return false;
        }
    }
    this.dir=function(a,b){
      this.xspeed=a;
      this.yspeed=b;
    }
    this.chek=function(x,y){
        if((x===this.xspeed)&&(y===this.yspeed)){
            return false;
        }
        else{
            return true;
        }
    }
}