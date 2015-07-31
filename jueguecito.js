
var lienzo = document.getElementById("lienzo");
var pluma = lienzo.getContext("2d");
var pars = [];
var mapa = [];
var g = 0;
var magnet=0;
var bacolor = "beige";
function Jugador() {
	this.x = Math.random()*1160 + 20;
	this.y = Math.random()*460 + 20;
	this.vx = Math.random()*6 - 3;
	this.vy = Math.random()*6 - 3;
}

Jugador.prototype.mover = function() {
	this.x = this.x + this.vx;
	this.y = this.y + this.vy;
	if (this.x>1180 || this.x<20){
		this.vx = 0-this.vx;
	}
	if (this.y>480 || this.y<20){
		this.vy = 0-this.vy;
	}
	if (this.y<480){
		this.vy = this.vy + g;
	}
	this.vy = this.vy + 0.1*magnet*this.vx;
	this.vx = this.vx - 0.1*magnet*this.vy;
};

Jugador.prototype.entrada = function jugador_entrada(keyCode) {
	if(keyCode == 87 && this.vy > -15) {
		this.vy = this.vy - 1;
	}
	if(keyCode == 65 && this.vx > -15) {
		this.vx = this.vx - 1;
	}
	if(keyCode == 68 && this.vx < 15) {
		this.vx = this.vx + 1;
	}
	if(keyCode == 83 && this.vy < 15) {
		this.vy = this.vy + 1;
	}
	if(keyCode == 69){
		this.vy = 0;
		this.vx = 0;
	}
	if(keyCode == 67){
		this.y = 250;
		this.x = 600;
	}
	if (keyCode == 71) {
		g = 1 - g;
	}
	if (keyCode == 82) {
		magnet = 1;
		bacolor = "pink";
	}
	if (keyCode == 76) {
		magnet = -1;
		bacolor = "LightBlue";
	}
	if (keyCode == 79) {
		magnet = 0;
		bacolor = "beige";
	}
};

Jugador.prototype.dibujar = function () {
	pluma.fillStyle = bacolor;
	pluma.fillRect(0, 0, 1200, 500);
	pluma.fillStyle = "black";
	var i;
	pluma.beginPath();
	for (i=1; i<10; ++i){
		pluma.arc(this.x,this.y,i,0,2*Math.PI);
	}
	pluma.stroke();
};

function Par() {
	this.x = Math.random()*1160 + 20;
	this.y = Math.random()*460 + 20;
	this.vx = Math.random()*6 - 3;
	this.vy = Math.random()*6 - 3;
}

Par.prototype.mover = function() {
	this.x = this.x + this.vx;
	this.y = this.y + this.vy;
	if (this.x>1180 || this.x<20){
		this.vx = 0-this.vx;
	}
	if (this.y>480 || this.y<20){
		this.vy = 0-this.vy;
	}
	if (this.y<480){
		this.vy = this.vy + g;
	}
	this.vy = this.vy + 0.1*magnet*this.vx;
	this.vx = this.vx - 0.1*magnet*this.vy;
};

Par.prototype.dibujar = function () {
	pluma.fillStyle = "green";
	var i;
	pluma.beginPath();
	for (i=1; i<10; ++i){
		pluma.arc(this.x,this.y,i,0,2*Math.PI);
	}
	pluma.stroke();
};

function comenzar() {
	var n;
	for (n=0; n<1500; ++n){
		mapa [n] = Math.floor(Math.random()*8);
	}
	for (n=0; n<3; ++n){
		pars[n] = new Par();
	}
	jugador = new Jugador();
}

function jugar() {
	jugador.dibujar();
	pars.forEach(function (par) {
		par.dibujar();
	});
	jugador.mover();
	pars.forEach(function (par) {
		par.mover();
	});
}

window.addEventListener("keydown", function(event) {
	jugador.entrada(event.keyCode);
});

comenzar();

window.setInterval(jugar, 25);