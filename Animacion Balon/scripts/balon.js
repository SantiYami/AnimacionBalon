$(document).ready(inicio);

function inicio(){
	lienzo = $("#lienzo")[0];
	contexto = lienzo.getContext("2d");
	buffer = document.createElement("canvas");

	balon = new Balon();
	balon.dibujar(contexto);

	animar();
}

function animar(){
	contexto.clearRect(0,0,800,600);
	contexto.drawImage($("#fondo")[0],0,0);
	balon.dibujar(contexto);
	balon.actualizar(0);
	window.onkeydown = compruebaTecla;
	
	setTimeout("animar()",20)
}

function Balon(){
	this.x=310;
	this.y=15;
	this.k=5;
	this.img=$("#balon")[0];

	
	this.dibujar=function(ctx){
		ctx.drawImage(this.img,this.x,this.y);
	}

	this.actualizar=function(num){
		
		this.y=this.y+this.k;
		
		if(this.y>=600-128)
			this.k=-5;
		else if(this.y<0)
			this.k=5;			
		if(num==2)
			this.x=this.x+5;
		else if(num==3)
			this.x=this.x-5;
			
		if(this.x<-30)
			this.x=this.x+10;
		else if(this.x>720)
			this.x=this.x-10;
	}
}

function compruebaTecla (e) {
var keyCode = document.all ? e.which : e.keyCode;
 
 
  if (keyCode == 39)
	balon.actualizar(2);
  else if (keyCode == 37)
	balon.actualizar(3);
  return true;
}

 
 

