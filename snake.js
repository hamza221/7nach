function snake(){
    this.x=0;
    this.y=0;
    this.xspeed=1;
    this.yspeed=0;
    this.total=0;
    this.tail=[];
    this.reset=function(){
        this.x=0;
    this.y=0;
    this.xspeed=1;
    this.yspeed=0;
    this.total=0;
    this.tail=[];

    }
    this.death=function(){
        for(var i=0;i<this.tail.length;i++){
            pos = this.tail[i];
            d= dist(this.x,this.y,pos.x,pos.y);
            if(d<1){
                this.total=0;
                this.tail=[];
                return true;
            }
            else{
                return false;
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
        for(var i =0;i<this.tail.length-1;i++){        
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