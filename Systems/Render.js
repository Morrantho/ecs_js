Component.RenderMask = Component.Position | Component.Size | Component.Sprite;

System.Register(function Render(world, context) {
	for (let id = 0; id < EntityFactory.MaxEntities; id++) {
		if (world.Mask[id] & Component.RenderMask) {
			let pos = world[Component.Position][id];
			let size = world[Component.Size][id];
			let sprite = world[Component.Sprite][id];

			//context.fillStyle = "rgba(" + col.r + "," + col.g + "," + col.b + "," + col.a + ")";
			//context.fillRect(pos.x, pos.y, size.w, size.h);
		}
	}
});