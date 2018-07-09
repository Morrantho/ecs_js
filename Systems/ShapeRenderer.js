Component.ShapeRenderMask = Component.Position | Component.Size | Component.Color;

System.Register(function ShapeRenderer(world,context){
	for (let id = 0; id < EntityFactory.MaxEntities; id++) {
		if (world.Mask[id] & Component.ShapeRenderMask){
			let pos = world[Component.Position][id];
			let size = world[Component.Size][id];
			let col = world[Component.Color][id];

			context.fillStyle = "rgba(" + col.r + "," + col.g + "," + col.b + "," + col.a + ")";
			context.fillRect(pos.x,pos.y,size.w,size.h);
		}
	}
});