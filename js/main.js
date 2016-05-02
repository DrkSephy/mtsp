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
let xCoordinates = generateUniqueNumbers(30, 475);
let yCoordinates = generateUniqueNumbers(30, 475);
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
let population = new Population(destinations, 20, true);

stats.setStartingDistance(population.getFittest().computeDistance());
stats.showStartingDistance();
stats.setOptimalDistance();
stats.showOptimalDistance();

// Instantiate Genetic Algorithm
let ga = new Genetic(destinations);
population = ga.evolvePopulation(population);

// Evolve over 100 generations
for (var x = 0; x < 100; x++) {
  (function(delay) {
    setTimeout(function() {
      population = ga.evolvePopulation(population);
      stats.setCurrentDistance(population.getFittest().computeDistance());
      stats.computeOptimalDistance();
      stats.showOptimalDistance();
      stats.incrementGenerations();
      stats.showGenerations();
      stats.incrementTime(0.5);
      stats.showTime();
    }, 500 * delay);

    let s1 = [];
    let s2 = [];
    let s3 = [];
    let s4 = [];
    let s5 = [];

    // Store fittest trip of this population
    let fittest = population.getFittest().getTrip();
    for (var i = 0; i < fittest.length; i++) {
      if (fittest[i].owner == 1) {
        // s1++;
        s1.push(fittest[i]);
      }

      if (fittest[i].owner == 2) {
        // s2++;
        s2.push(fittest[i]);
      }

      if (fittest[i].owner == 3) {
        // s3++;
        s3.push(fittest[i]);
      }

      if (fittest[i].owner == 4) {
        // s4++;
        s4.push(fittest[i]);
      }

      if (fittest[i].owner == 5) {
        // s5++;
        s5.push(fittest[i]);
      }
    }

    // Draw the fittest individual
    for (var j = 0; j < fittest.length; j++) {
      setTimeout(function() {
        draw.clearCanvas();
      }, 500 * delay);

      // Draw all the points
      for (var destination = 0; destination < destinations.numberOfDestinations(); destination++) {
        let x = destinations.getCity(destination).x;
        let y = destinations.getCity(destination).y;
        setTimeout(function() {
          draw.drawPoint(x, y);
        }, 500 * delay);
      }

      for (var tourIndex = 0; tourIndex < s1.length; tourIndex++) {
        let x = s1[tourIndex].x;
        let y = s1[tourIndex].y;
        // Loop around for drawing
        if (tourIndex + 1 < s1.length) {
          let toX = s1[tourIndex + 1].x;
          let toY = s1[tourIndex + 1].y;
          setTimeout(function() {
            draw.drawLine(x, y, toX, toY, '#7ea4b3');
          }, 500 * delay);
        } else {
          let toX = s1[0].x;
          let toY = s1[0].y;
          setTimeout(function() {
            draw.drawLine(x, y, toX, toY, '#7ea4b3');
          }, 500 * delay);
        }
      }

      // Trip 2
      for (var tourIndex = 0; tourIndex < s2.length; tourIndex++) {
        let x = s2[tourIndex].x;
        let y = s2[tourIndex].y;
        // Loop around for drawing
        if (tourIndex + 1 < s2.length) {
          let toX = s2[tourIndex + 1].x;
          let toY = s2[tourIndex + 1].y;
          setTimeout(function() {
            draw.drawLine(x, y, toX, toY, '#7eb38d');
          }, 500 * delay);
        } else {
          let toX = s2[0].x;
          let toY = s2[0].y;
          setTimeout(function() {
            draw.drawLine(x, y, toX, toY, '#7eb38d');
          }, 500 * delay);
        }
      }

      // Trip 3
      for (var tourIndex = 0; tourIndex < s3.length; tourIndex++) {
        let x = s3[tourIndex].x;
        let y = s3[tourIndex].y;
        // Loop around for drawing
        if (tourIndex + 1 < s3.length) {
          let toX = s3[tourIndex + 1].x;
          let toY = s3[tourIndex + 1].y;
          setTimeout(function() {
            draw.drawLine(x, y, toX, toY, '#8d7eb3');
          }, 500 * delay);
        } else {
          let toX = s3[0].x;
          let toY = s3[0].y;
          setTimeout(function() {
            draw.drawLine(x, y, toX, toY, '#8d7eb3');
          }, 500 * delay);
        }
      }

      // Trip 4
      for (var tourIndex = 0; tourIndex < s4.length; tourIndex++) {
        let x = s4[tourIndex].x;
        let y = s4[tourIndex].y;
        // Loop around for drawing
        if (tourIndex + 1 < s4.length) {
          let toX = s4[tourIndex + 1].x;
          let toY = s4[tourIndex + 1].y;
          setTimeout(function() {
            draw.drawLine(x, y, toX, toY, '#8d8d8d');
          }, 500 * delay);
        } else {
          let toX = s4[0].x;
          let toY = s4[0].y;
          setTimeout(function() {
            draw.drawLine(x, y, toX, toY, '#8d8d8d');
          }, 500 * delay);
        }
      }

      // Trip 5
      for (var tourIndex = 0; tourIndex < s5.length; tourIndex++) {
        let x = s5[tourIndex].x;
        let y = s5[tourIndex].y;
        // Loop around for drawing
        if (tourIndex + 1 < s5.length) {
          let toX = s5[tourIndex + 1].x;
          let toY = s5[tourIndex + 1].y;
          setTimeout(function() {
            draw.drawLine(x, y, toX, toY, '#ffff4d');
          }, 500 * delay);
        } else {
          let toX = s5[0].x;
          let toY = s5[0].y;
          setTimeout(function() {
            draw.drawLine(x, y, toX, toY, '#ffff4d');
          }, 500 * delay);
        }
      } 
    }
  })(x);
}