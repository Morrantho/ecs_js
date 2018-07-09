let canvas = EntityFactory.Canvas(512,512);
let world = EntityFactory.CreateWorld();
let e = EntityFactory.Shape(world);

System.Run(world,canvas);