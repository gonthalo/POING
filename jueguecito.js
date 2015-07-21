var lienzo = document.getElementByID("lienzo");
var pluma = lienzo.getContext("2d");
var pars[];
var jugador;

function Par() {
	this.q = Math.floor(Math.random()*40 - 10);
	this.m = Math.floor(Math.random()*20);
	this.e = Math.floor(Math.random()*20);
	this.x = Math.random()*1180 + 10;
	this.y = Math.random()*480 + 10;
	this.vx = 0;
	this.vy = 0;
}

Par.prototype.dibujar = function par_pintar(){
	pluma.fillStyle = "black"
	pluma.beginPath();
	pluma.arc(this.x,this.y,10,0,2*Math.PI);
	pluma.stroke();
}

Par.prototype.mover = function par_mover(dt){
	var ax = 0;
	var ay = 0;
	this.x = this.x + this.vx*dt + ax*ax*dt*0.5;
	this.y = this.y + this.vy*dt + ay*ay*dt*0.5;
	this.vx = this.vx + ax*dt;
	this.vy = this.vy + ay*dt;
}

function Jugador() {
	this.q = Math.floor(Math.random()*3 - 1)*5;
	this.m = 5;
	this.e = 5;
	this.x = Math.random()*1180 + 10;
	this.y = Math.random()*480 + 10;
	this.vx = 0;
	this.vy = 0;
}

Jugador.prototype.dibujar = function jugador_dibujar(){
	pluma.fillStyle = "black"
	pluma.beginPath();
	pluma.arc(this.x,this.y,10,0,2*Math.PI);
	pluma.stroke();
}

Jugador.prototype.mover = function jugador_mover(dt){
	var ax = 0;
	var ay = 0;
	this.x = this.x + this.vx*dt + ax*ax*dt*0.5;
	this.y = this.y + this.vy*dt + ay*ay*dt*0.5;
	this.vx = this.vx + ax*dt;
	this.vy = this.vy + ay*dt;
}

function comenzar(){
	var n;
	for (n = 0; n < 0; ++n){
		pars[n] = new Par();
	}
	jugador = new Jugador();
}

function dibujar(){
	pluma.fillStyle = "white";
	pluma.fillRect(0, 0, 1200, 500);
}

function mover() {
	var dt = 40;
	pars.forEach(function (par){
		par.mover(dt);
	});
	jugador.mover;
}

function jugar() {
	dibujar();
	mover();
}

window.addEventListener("keydown", function(event) {
	jugador.entrada(event.keyCode);
});

setInterval(jugar, 25);