const Component = {
	counter:0,

	components:{},

	// Store the alias as an enum and a reference to its data as the enum value in the components dictionary.
	Register(component) {
		let uid = 1 << Component.counter;
		Component[component.name] = uid;
		Component.components[uid] = component;
		Component.counter++;
	},
};