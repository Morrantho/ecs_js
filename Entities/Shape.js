EntityFactory.Register(function Shape(world) {
	let id = EntityFactory.CreateEntity(world);
	EntityFactory.AddComponent(world, id, Component.Position);
	EntityFactory.AddComponent(world, id, Component.Size);
	EntityFactory.AddComponent(world, id, Component.Color);
	return id;
});