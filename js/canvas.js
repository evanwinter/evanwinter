// http://stackoverflow.com/questions/40064493/how-to-get-mouseover-to-draw-on-html-canvas-with-event-listener-with-my-code-ht/40065244
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var x = null;
var y = null;
var z = null;
var n = null;

function getPosHover(e) {
	var rect = canvas.getBoundingClientRect();
	//if it is the first time the event listener is called then set x and y to the new mouse coordinate
	if (x == null) {
		x = Math.round((e.clientX-rect.left)/(rect.right-rect.left)*canvas.width);
		y = Math.round((e.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height);

	}
	//otherwise draw from the previous point (x, y) to the new coordinates (e.clientX, e.clientY).
	context.beginPath();
	context.moveTo(x,y);
	context.lineTo(Math.round((e.clientX-rect.left)/(rect.right-rect.left)*canvas.width), Math.round((e.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height));
	context.strokeStyle="white";
	context.stroke();
	x = Math.round((e.clientX-rect.left)/(rect.right-rect.left)*canvas.width);
	y = Math.round((e.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height);
}

function getPosClick(e) {

	var rect = canvas.getBoundingClientRect();
	//if it is the first time the event listener is called then set x and y to the new mouse coordinate
	if (z == null) {
		z = Math.round((e.clientX-rect.left)/(rect.right-rect.left)*canvas.width);
		n = Math.round((e.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height);

	}
	//otherwise draw from the previous point (x, y) to the new coordinates (e.clientX, e.clientY).
	context.beginPath();
	context.moveTo(z,n);
	context.lineTo(Math.round((e.clientX-rect.left)/(rect.right-rect.left)*canvas.width), Math.round((e.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height));
	context.strokeStyle="white";
	context.stroke();
	z = Math.round((e.clientX-rect.left)/(rect.right-rect.left)*canvas.width);
	n = Math.round((e.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height);
}

$("nav").css("border-bottom", "none");