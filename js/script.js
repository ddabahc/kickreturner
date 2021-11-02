window.onload = function(){
// llamar a las clases
const bg = new Background(canvas.width, canvas.height)
const returner = new Returner (200,200,200,300)
const defender =  new Defender (200,200,200,300)



document.getElementById("start-button").onclick = function(){
    if (requestId){
        return true
    }
    startGame();
};

function startGame(){

    requestId = requestAnimationFrame(update)
}

function update(){
    frames ++;
    //clear canvas
    ctx.clearRect(0,0,canvas.width,canvas.height)
    bg.draw();
    returner.draw();
    defender.draw();


}
    if(requestId){
        requestId= requestAnimationFrame(update)
    }
}

function generateDefenders(){
    if (frames % 100 == 0|| frames % 60 === 0|| frames % 170 === 0){
        let y = Math.floor(Math.random()*(400-10)+10)
        let w = Math.floor(Math.random()*(80-30)+30)
        
        const defender = new Defender (w,y)
        defender.push(defender)

    
    }
}

function drawDefenders(){
    defender.forEach((defender,index_defender)=>{
        defender.draw()
    })
}