var cidade, cidadeImg;
var balao, balaoImg;

function preload(){
    cidadeImg=loadImage("assets/cityImage.png");
    balaoImg=loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");
}

function setup(){
    createCanvas(700,560);

    //imagem de fundo
    cidade=createSprite(350,280);
    cidade.addImage(cidadeImg);
    cidade.scale= 0.4;

    //personagem principal
    balao=createSprite(100,200,20,50);
    balao.addAnimation("balao", balaoImg);
    balao.scale= 0.35;
}

function draw() {
    background("black");

    //movendo o fundo
    cidade.velocityX= -2;
    if (cidade.x<200) {
        cidade.x= cidade.width/2-750;
    }

    //movendo o balao
    if (keyDown("space")) {
        balao.velocityY=-4;
    }

    //gravidade
    balao.velocityY+=0.4;

    drawSprites();
   
}
