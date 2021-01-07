var player,playerimg,form,bgimg,bgimg2,role,cafe,cafeimg,standImg,rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,ledge,redge,tedge,bedge;
var name=null;
var gameState='start';
var Usebutton,Rbutton,useimg;
var room1img,room1,task1;
function preload(){
    bgimg=loadImage('BG.png')
    playerimg=loadAnimation('walk2.png','walk3.png','walk4.png','walk5.png')
    cafeimg=loadImage('cafe.png')
    standImg=loadImage('walk1.png')
    room1img=loadImage('room1.png')
    useimg=loadImage('Use.png')
}
function setup(){
    
    createCanvas(displayWidth,displayHeight);
    form=new Form();
    if (gameState==='start'){
        
        background(bgimg)
       
        form.display()
        console.log("gamestate is start");
       
    }
    Usebutton=createSprite(camera.position.x+500,camera.position.y+200,100,100)
    Usebutton.addImage(useimg)
    Usebutton.scale=0.3
    ledge=createSprite(0,displayHeight/2,1,displayHeight)
    redge=createSprite(displayWidth,displayHeight/2,1,displayHeight)
    tedge=createSprite(displayWidth/2,0,displayWidth,1)
    bedge=createSprite(displayWidth/2,displayHeight,displayWidth,1)
    room1=createSprite(displayWidth-200,160,10,10)
        room1.scale=1.2
        
        room1.addImage(room1img)
        rect1=createSprite(390,150,10,300)
        rect2=createSprite(390,displayHeight-150,10,300)
        rect3=createSprite(1150,250,10,500)
        rect4=createSprite(1150,displayHeight-100,10,200)
        
        rect5=createSprite(150,300,300,10)
        rect6=createSprite(240,displayHeight-300,300,10)
        rect7=createSprite(1350,displayHeight-200,200,10)
        rect8=createSprite(1300,500,300,10)
        task1=createSprite(displayHeight-150,160,10,10)
        task1s=createSprite(displayWidth/2,displayHeight/2,300,300)
        task1s.visible=false
        task1s.shapeColor='green'
        rect1.visible=false
        rect2.visible=false
        rect3.visible=false
        rect4.visible=false
        rect5.visible=false
        rect6.visible=false
        rect7.visible=false
        rect8.visible=false
        room1.visible=false
        Usebutton.visible=false

   
    
}
function draw(){
    
    
   
    if (gameState==='play'){
        background(0)
        play()
        player.depth=cafe.depth+1
        room1.depth=player.depth-1
        player.collide(rect1)
        player.collide(rect2)
        player.collide(rect3)
        player.collide(rect4)
        player.collide(rect5)
        player.collide(rect6)
        player.collide(rect7)
        player.collide(rect8)
        rect1.visible=true
        rect2.visible=true
        rect3.visible=true
        rect4.visible=true
        rect5.visible=true
        rect6.visible=true
        rect7.visible=true
        rect8.visible=true
        room1.visible=true
     




        if(room1.y-player.y===50 && Usebutton.mousePressedOver()){task1s.visible=true}

        

    }
    drawSprites()
    if(gameState==='play'){
        fill('white')
        text(name,player.x-10,player.y-50)
        textSize(20)
        text('You are : '+role,camera.position.x-100,camera.position.y-400)
        player.bounceOff(redge)
        player.bounceOff(ledge)
        player.bounceOff(tedge)
        player.bounceOff(bedge)

    }
   
    
}
function getRole(){
    player=createSprite(displayWidth/2,displayHeight/2,20,20);
    player.addImage("stand",standImg);
    player.addAnimation('running',playerimg);

    player.scale=.5
    var rand = Math.round(random(1,3));
    switch(rand) {
   //   case 1: role='IMPOSTER';
   //           break;
        case 1:role='CrewMate'
        break;
      case 2: role='CrewMate';
              break;
      case 3: role='CrewMate';
              break;
    default:break;
    }
    
}
function play(){
    Usebutton.visible=true
    player.changeImage("stand",standImg);
    camera.position.x=player.x
    camera.position.y=player.y
    
    textSize(50)
    
   


    if(keyDown("w")) {
      
        player.y = player.y-3;
        player.changeAnimation('running',playerimg);
      }
      if (keyDown("s")) {
        
       player.y =player.y + 3;
       player.changeAnimation('running',playerimg);
        
      }
      if (keyDown("d")) {
       
      player.x=player.x+ 3;
      player.changeAnimation('running',playerimg);
     
      }
      if (keyDown("a")) {
        
        player.x=player.x -3;
        player.changeAnimation('running',playerimg);
    }
    

}