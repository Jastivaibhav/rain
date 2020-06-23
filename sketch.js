var rand,rand2,rand3,rand4;


function setup() {
  createCanvas(200,800);
  rand=random(0,200);
  rand2=random(0,190);
  rand3=random(0,120);
  rand4=random(0,160);
  a=createSprite(10, 0, 20, 50);
  a.shapeColor="green";
  b=createSprite(30, 0, 20, 50);
  b.shapeColor="blue";
  c=createSprite(50, 0, 20, 50);
  c.shapeColor="red";
  d=createSprite(70, 0, 20, 50);
  d.shapeColor="pink";
  e=createSprite(90, 0, 20, 50);
  e.shapeColor="yellow";
  f=createSprite(110, 0, 20, 50);
  f.shapeColor="maroon";
  g=createSprite(130, 0, 20, 50);
  g.shapeColor="violet";
  h=createSprite(150,0, 20, 50);
  h.shapeColor="purple";
  i=createSprite(170, 0, 20, 50);
  i.shapeColor="black";
  j=createSprite(190, 0, 20, 50);
  j.shapeColor="orange";
}

function draw() {

a.velocityY= 12;
b.velocityY= 11;
c.velocityY= 10;
d.velocityY= 9;
e.velocityY= 12;
f.velocityY= 11;
g.velocityY= 10;
h.velocityY= 9;
i.velocityY= 12;
j.velocityY= 11;

if(a.y>800){
  a.y=0;
  a.velocityY= 12;
  a.x=rand;
}
if(b.y>800){
  b.y=0;
  b.velocityY= 12;
  b.x=rand2;
}
if(c.y>800){
  c.y=0;
  c.velocityY= 12;
  c.x=rand3;
}
if(d.y>800){
  d.y=0;
  d.velocityY= 12;
  d.x=rand4;
}
if(e.y>800){
  e.y=0;
  e.velocityY= 12;
  e.x=rand;
}
if(f.y>800){
  f.y=0;
  f.velocityY= 12;
  f.x=rand2;
}

if(g.y>800){
  g.y=0;
  g.velocityY= 12;
  g.x=rand3;
}

if(h.y>800){
  h.y=0;
  h.velocityY= 12;
  h.x=rand4;
}
if(i.y>800){
  i.y=0;
  i.velocityY= 12;
  i.x=rand;
}

if(j.y>800){
  j.y=0;
  j.velocityY= 12;
  j.x=rand2;
}

  drawSprites();
}