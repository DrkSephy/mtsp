'use strict';

import Draw from './draw.js';
import Trip from './trip.js';
import City from './city.js';
import Genetic from './genetic.js';
import Population from './population.js';
import Simulation from './simulation.js';
import Destinations from './destinations.js';

// Store destination cities
let destinations = new Destinations();

// Add some cities
let city = new City(60, 200)
destinations.addCity(city)
let city2 = new City(180, 200)
destinations.addCity(city2)
let city3 = new City(80, 180)
destinations.addCity(city3)
let city4 = new City(140, 180)
destinations.addCity(city4)
let city5 = new City(20, 160)
destinations.addCity(city5)
let city6 = new City(100, 160)
destinations.addCity(city6)
let city7 = new City(200, 160)
destinations.addCity(city7)
let city8 = new City(140, 140)
destinations.addCity(city8)
let city9 = new City(40, 120)
destinations.addCity(city9)
let city10 = new City(100, 120)
destinations.addCity(city10)
let city11 = new City(180, 100)
destinations.addCity(city11)
let city12 = new City(60, 80)
destinations.addCity(city12)
let city13 = new City(120, 80)
destinations.addCity(city13)
let city14 = new City(180, 60)
destinations.addCity(city14)
let city15 = new City(20, 40)
destinations.addCity(city15)
let city16 = new City(100, 40)
destinations.addCity(city16)
let city17 = new City(200, 40)
destinations.addCity(city17)
let city18 = new City(20, 20)
destinations.addCity(city18)
let city19 = new City(60, 20)
destinations.addCity(city19)
let city20 = new City(160, 20)
destinations.addCity(city20);

let simulation = new Simulation();
simulation.attachEventListners();

let draw = new Draw();

// Generate the initial population
let population = new Population(destinations, 50, true);

// console.log(population);
console.log('Initial Distance: ' + population.getFittest().computeDistance());

for (var i = 0; i < population.populationSize(); i++) {

  setTimeout(function() {
    draw.clearCanvas();
  }, 100 * i);

  for (var destination = 0; destination < destinations.numberOfDestinations(); destination++) {
    let x = destinations.getCity(destination).x;
    let y = destinations.getCity(destination).y;
    setTimeout(function() {
      draw.drawPoint(x, y);
    }, 100 * i);
  }
  
  for (var destination = 0; destination < population.getTrip(i).getTripSize(); destination++) {
    // console.log(population.getTrip(i).getCity(destination));
    let x = population.getTrip(i).getCity(destination).x;
    let y = population.getTrip(i).getCity(destination).y;
    if (destination + 1 < population.getTrip(i).getTripSize()) {
      let toX = population.getTrip(i).getCity(destination + 1).x;
      let toY = population.getTrip(i).getCity(destination + 1).y;
      setTimeout(function() {
        draw.drawLine(x, y, toX, toY);
      }, 100 * i);
    } else {
      let toX = population.getTrip(i).getCity(0).x;
      let toY = population.getTrip(i).getCity(0).y;
      setTimeout(function() {
        draw.drawLine(x, y, toX, toY);
      }, 100 * i);
    }
  }
}


// Instantiate Genetic Algorithm
let ga = new Genetic(destinations);
population = ga.evolvePopulation(population);
// console.log('New distance for the new population: ' + population.getFittest().computeDistance());

// // Evolve over 100 generations
for (var i = 0; i <= 100; i++) {
  population = ga.evolvePopulation(population);
}

// console.log('Final Distance: ' + population.getFittest().computeDistance());
// console.log('Solution: ');
// console.log(population.getFittest());




