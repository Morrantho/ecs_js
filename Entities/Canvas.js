EntityFactory.Register(function Canvas(w,h) {
	let canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	document.body.appendChild(canvas);
	return canvas;
});