var lienzo = document.getElementByID("lienzo");
var pluma = lienzo.getContext("2d");

function Par() {
	this.q = Math.floor(Math.random()*40 - 10);
	this.m = Math.floor(Math.random()*20);
	this.e = Math.floor(Math.random()*20);
	this.x = Math.random()*1180 + 10;
	this.y = Math.random()*480 + 10;
	this.vx = 0;
	this.vy = 0;
}

Par.prototype.pintar = function par_pintar(){
	pluma.fillStyle = "black"
	pluma.beginPath();
	pluma.arc(this.x,this.y,10,0,2*Math.PI);
	pluma.stroke();
}


