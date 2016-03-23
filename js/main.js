'use strict';

import Draw from './draw.js';
import Trip from './trip.js';
import City from './city.js';
import Stats from './stats.js';
import Genetic from './genetic.js';
import Population from './population.js';
import Simulation from './simulation.js';
import Destinations from './destinations.js';
import {generateUniqueNumbers} from './utils.js';

// Store destination cities
let destinations = new Destinations();

// Generate destination cities
let xCoordinates = generateUniqueNumbers(30, 450);
let yCoordinates = generateUniqueNumbers(30, 450);
for (var j = 0; j < 30; j++) {
  let city = new City(xCoordinates[j], yCoordinates[j]);
  destinations.addCity(city);
}

// Setup Simulation class and event handlers
let simulation = new Simulation();
simulation.attachEventListners();

// Initialize Draw class
let draw = new Draw();

// Initialize Stats class
let stats = new Stats();

// Generate the initial population
let population = new Population(destinations, 100, true);
// console.log(population);
console.log('Initial Distance: ' + population.getFittest().computeDistance());
console.log(population);

// console.log(population);
// stats.setStartingDistance(population.getFittest().computeDistance());
// stats.showStartingDistance();
// stats.setOptimalDistance();
// stats.showOptimalDistance();

// Instantiate Genetic Algorithm
let ga = new Genetic(destinations);
population = ga.evolvePopulation(population);
// console.log(population);
console.log('New Distance after one evolution: ' + population.getFittest().computeDistance());

for (var x = 0; x < 100; x++) {
  population = ga.evolvePopulation(population);
}

console.log('Final solution: ' + population.getFittest().computeDistance());
console.log(population.getFittest());
// // Evolve over 100 generations
// for (var x = 0; x < 200; x++) {
//   (function(delay) {
//     setTimeout(function() {
//       population = ga.evolvePopulation(population);
//       stats.setCurrentDistance(population.getFittest().computeDistance());
//       stats.computeOptimalDistance();
//       stats.showOptimalDistance();
//       stats.incrementGenerations();
//       stats.showGenerations();
//       stats.incrementTime(0.5);
//       stats.showTime();
//     }, 500 * delay);

//     for (var j = 0; j < population.populationSize(); j++) {
//       setTimeout(function() {
//         draw.clearCanvas();
//       }, 500 * delay);

//       for (var destination = 0; destination < destinations.numberOfDestinations(); destination++) {
//         let x = destinations.getCity(destination).x;
//         let y = destinations.getCity(destination).y;
//         setTimeout(function() {
//           draw.drawPoint(x, y);
//         }, 500 * delay);
//       }

//       for (var destination = 0; destination < population.getTrip(j).getTripSize(); destination++) {
//         let x = population.getTrip(j).getCity(destination).x;
//         let y = population.getTrip(j).getCity(destination).y;
//         if (destination + 1 < population.getTrip(j).getTripSize()) {
//           let toX = population.getTrip(j).getCity(destination + 1).x;
//           let toY = population.getTrip(j).getCity(destination + 1).y;
//           setTimeout(function() {
//             draw.drawLine(x, y, toX, toY);
//           }, 500 * delay);
//         } else {
//           let toX = population.getTrip(j).getCity(0).x;
//           let toY = population.getTrip(j).getCity(0).y;
//           setTimeout(function() {
//             draw.drawLine(x, y, toX, toY);
//           }, 500 * delay);
//         }
//       }
//     }
//   })(x);
// }