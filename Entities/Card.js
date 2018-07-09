EntityFactory.Register(function Card(world) {
	let id = EntityFactory.CreateEntity(world);
	EntityFactory.AddComponent(world, id, Component.Position);
	EntityFactory.AddComponent(world, id, Component.Size);
	EntityFactory.AddComponent(world, id, Component.Sprite);
	EntityFactory.AddComponent(world, id, Component.Text);
	return id;
});