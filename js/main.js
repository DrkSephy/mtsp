'use strict';

import Draw from './draw.js';
import Trip from './trip.js';
import City from './city.js';
import Stats from './stats.js';
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

// Setup Simulation class and event handlers
let simulation = new Simulation();
simulation.attachEventListners();

// Initialize Draw class
let draw = new Draw();

// Initialize Stats class
let stats = new Stats();

// Generate the initial population
let population = new Population(destinations, 50, true);
stats.startingDistance = population.getFittest().computeDistance();
// console.log(population);
// console.log('Initial Distance: ' + population.getFittest().computeDistance());

// Instantiate Genetic Algorithm
let ga = new Genetic(destinations);
population = ga.evolvePopulation(population);

// Evolve over 100 generations
for (var x = 0; x <= 100; x++) {
  (function(delay) {
    setTimeout(function() {
      population = ga.evolvePopulation(population);
      console.log('Best distance: ' + population.getFittest().computeDistance());
      stats.incrementTime(0.5);
      stats.showTime();
    }, 500 * delay);

    for (var j = 0; j < population.populationSize(); j++) {
      setTimeout(function() {
        draw.clearCanvas();
      }, 500 * delay);

      for (var destination = 0; destination < destinations.numberOfDestinations(); destination++) {
        let x = destinations.getCity(destination).x;
        let y = destinations.getCity(destination).y;
        setTimeout(function() {
          draw.drawPoint(x, y);
        }, 500 * delay);
      }

      for (var destination = 0; destination < population.getTrip(j).getTripSize(); destination++) {
        let x = population.getTrip(j).getCity(destination).x;
        let y = population.getTrip(j).getCity(destination).y;
        if (destination + 1 < population.getTrip(j).getTripSize()) {
          let toX = population.getTrip(j).getCity(destination + 1).x;
          let toY = population.getTrip(j).getCity(destination + 1).y;
          setTimeout(function() {
            draw.drawLine(x, y, toX, toY);
          }, 500 * delay);
        } else {
          let toX = population.getTrip(j).getCity(0).x;
          let toY = population.getTrip(j).getCity(0).y;
          setTimeout(function() {
            draw.drawLine(x, y, toX, toY);
          }, 500 * delay);
        }
      }
    }
  })(x);
}