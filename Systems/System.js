const System = {
	systems:{},

	Register(system) {
		System.systems[system.name] = system;
	},

	Run(world,canvas) {
		let context = canvas.getContext("2d");
		context.fillStyle = "rgb(0,0,0)";
		context.fillRect(0,0,canvas.width,canvas.height);

		for (let system in System.systems) {
			System.systems[system](world,context);
		}

		requestAnimationFrame((e) => { System.Run(world,canvas);});
	}
};