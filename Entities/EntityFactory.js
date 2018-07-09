const EntityFactory = {
	MaxEntities:255,

	// Initializes a world object with all registered components as dictionaries. Each index in each component is an entity id, with the value being it's component data.
	CreateWorld() {
		let world = {};
		for (let e in Component.components) {
			world[e] = {};
		}
		world.Mask = {};
		return world;
	},
	// Returns next available null spot in the world mask.
	CreateEntity(world) {
		let id = 0;

		for (; id < EntityFactory.MaxEntities; id++)
			if (world.Mask[id] == Component.None)
				return id;
		return EntityFactory.MaxEntities;
	},
	DestroyEntity(world,id){
		world.Mask[id] = Component.None;
	},
	// Adds a component to an entity if it doesnt already contain it.
	AddComponent(world, id, mask) {
		world[mask][id] = new Component.components[mask](); // Add the component to the world's component list at the entity's id.
		world.Mask[id] |= mask || mask; // Add the component to the entities' mask.
	},

	// Adds component(s) to an entity by bit mask.
	AddComponents(world, id, mask) {
		for (let component in Component.components) {
			if(mask & component){
				world[component][id] = new Component.components[component]();
			}
		}
		// If an entity's mask is null, set it to the provided mask, else add the provided mask's bits to the current mask.
		world.Mask[id] |= mask || mask;
	},
	// Removes a component from an entity's mask.
	RemoveComponent(world,id,mask){
		if (world.Mask[id] & mask) { // If entity has component
			delete world[mask][id];
			world.Mask[id] ^= mask; // Remove the component from entity mask.
		}
	},
	// Registers an entity as a factory method by alias.
	Register(ctor) {
		EntityFactory[ctor.name] = ctor;
	}
};