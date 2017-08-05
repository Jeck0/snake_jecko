function Onefield(x,y) {
    this.x=x;
    this.y=y;
}

function Field(w,h) {
    this.w=w;
    this.h=h;
}

function Node(x,y){
    this.x=x;
    this.y=y;
}

var field=new Field(600,800);
var onefield=new Onefield(100,100);

function infield(Node,Field){
    if (Node.x>Field.w || Node.y>Field.h || Node.x<0 || Node.y<0) return -1;
    if (Node.x==Field.w || Node.y==Field.h || Node.x==0 || Node.y==0) return 0;
    if (Node.x<Field.w || Node.y>Field.h) return 1; 
}

function insnake(Node,Snake){
    for (i=0;i<Snake.length;i++){
        
        if (Node.x==Snake)
    }
}

function Snake(){
    this.nodes[0]=new Node((Field.w)/2,(Field.h)/2);
    this.nodes[1]=new Node((Field.w)/2,(Field.h)/2+1);
    this.nodes[2]=new Node((Field.w)/2,(Field.h)/2+2);
}

function gethead(snake){
    return snake.nodes[0];
}

function gettail(snake){
    return snake.nodes[snake.nodes.length-1];
}

function exit1(){
    conole.log("Zid! Igra je gotova!");
}

function exit2(){
    conole.log("Ujed! Igra je gotova!");
}

function addnode(snake,orientation){
    var head=gethead(snake);
    
    var node=new Node(x,y);
    
    if (infield(Node,Field==-1) return exit1(); 
    
    if (insnake)
    
}

