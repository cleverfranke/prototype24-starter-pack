// First, we create a new GUI
let gui = new lil.GUI();

// Parameters for controlling the visual aspects
let parameters = {
  Name: "Complex visual",
  backgroundColor: "#efefef",
};

function setup() {
  // Set up responsive canvas sizing
  setResponsiveSizing(0.8);
  createCanvas(SKETCHWIDTH, SKETCHHEIGHT);

  // Set the background color
  background(parameters.backgroundColor);

  // Add parameters to the GUI for interaction
  // Check https://lil-gui.georgealways.com/ for more info on how to add parameters to the gui
  gui.add(parameters, "Name");
  gui.addColor(parameters, "backgroundColor");
}

function draw() {
  // Clear the background, if you want
  background(parameters.backgroundColor);

  // Example: get the minimum and maximum values for land area and forest area and log it to the console
  const minLandArea = getMinValue("land_area_m2");
  const maxForestArea = getMaxValue("forest_area_ha");
  console.log(minLandArea, maxForestArea);

  // GO WILD HERE
}
