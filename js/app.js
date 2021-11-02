// Aqui van las clases

class Background{
    //constructor 
    constructor(w,h){
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src= "../images/background.jpg"
    
    }

    // metodos
    draw(){
        if(this.x < -canvas.width){
            this.x = 0
        }
        this.x --;

        // draw image
        ctx.drawImage(this.image, this.x,this.y,this.width, this.height)
     
    }
}

class Returner {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image()
        this.image.src = "../images/returner.png" 
        
    }

    //metodos
    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }

    collision(item){
        return(this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y)
   
    }
}

class Defender{
     constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image()
        this.image.src = "../images/returner.png" 
    }

    //metodos
    draw(){
        if(frames % 10 === 0) this.x -= 5;
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
}