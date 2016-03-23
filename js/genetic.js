'use strict';

import Trip from './trip.js';
import Population from './population.js';
import {containsObject, generateRandomInt} from './utils.js';

class Genetic {
  /**
   * Constructs the Genetic Algorithm parameters.
   * @param {array} destinations - Instance of the Destinations class.
  */
  constructor(destinations) {
    this.destinations = destinations;
    this.mutationRate = 0.01;
    this.tournamentSize = 5;
    this.elitism = true;
  }

  /**
   * Evolves a population using Genetic Operators.
   * @param {object} population - Instance of Population class.
   * @returns {array} newPopulation - The new generation of individuals.
  */
  evolvePopulation(population) {
    let newPopulation = new Population(this.destinations, population.populationSize(), false);
    let elitismOffset = 0;
    if (this.elitism) {
      newPopulation.saveTrip(0, population.getFittest());
      elitismOffset = 1;
    }

    for (var i = elitismOffset; i < newPopulation.populationSize(); i++) {
      let parent1 = this.tournamentSelection(population);
      let parent2 = this.tournamentSelection(population);
      let child   = this.crossover(parent1, parent2);
      newPopulation.saveTrip(i, child);
    }

    // for (var i = elitismOffset; i < newPopulation.populationSize(); i++) {
    //   this.mutate(newPopulation.getTrip(i));
    // }

    return newPopulation;
  }

  /**
   * Generates a new child from two parents.
   * @param {array} parent1 - Instance of Trip class.
   * @param {array} parent2 - Instance of Trip class.
   * @returns {array} child - The new child trip.
  */
  crossover(parent1, parent2) {
    let child = new Trip(this.destinations);
    let start = generateRandomInt(0, parent1.getTripSize() - 1);
    let end   = generateRandomInt(0, parent1.getTripSize());
    let startPosition = Math.min(start, end);
    let endPosition   = Math.max(start, end);
    let cities = [];

    // Cities taken from mother chromosome
    let motherCities1 = 0;
    let motherCities2 = 0;
    let motherCities3 = 0;
    let motherCities4 = 0;
    let motherCities5 = 0;

    // Cities taken from father chromosome
    let fatherCities1 = 0;
    let fatherCities2 = 0;
    let fatherCities3 = 0;
    let fatherCities4 = 0;
    let fatherCities5 = 0;

    for (var x = 0; x < child.getTripSize(); x++) {
      cities.push(null);
    }

    for (var i = 0; i < child.getTripSize(); i++) {
      // Gets cities within range
      // Example:
      // Start position = 4
      // End position = 8;
      // Will have cities at index 5, 6, 7
      if ((startPosition < endPosition) && (i > startPosition) && (i < endPosition)) {
        cities[i] = parent1.getCity(i);
        let owner = parent1.getCity(i).getOwner();

        if (owner == 1) {
          motherCities1++
        }

        if (owner == 2) {
          motherCities2++;
        }

        if (owner == 3) {
          motherCities3++;
        }

        if (owner == 4) {
          motherCities4++;
        }

        if (owner == 5) {
          motherCities5++;
        }
      }
    }

    for (var i = 0; i < parent2.getTripSize(); i++) {
      // If parent 2 city not already in cities array...
      if (!containsObject(parent2.getCity(i), cities)) {
        // Loop over cities array
        for (var j = 0; j < cities.length; j++) {
          // If the entry is null, we insert here!
          if (cities[j] == null) {
            cities[j] = parent2.getCity(i);
            let owner = parent2.getCity(i).getOwner();

            if (owner == 1) {
              fatherCities1++
            }

            if (owner == 2) {
              fatherCities2++;
            }

            if (owner == 3) {
              fatherCities3++;
            }

            if (owner == 4) {
              fatherCities4++;
            }

            if (owner == 5) {
              fatherCities5++;
            }

            break;
          }
        }
      }
    }

    let partition1 = motherCities1 + fatherCities1;
    let partition2 = motherCities2 + fatherCities2;
    let partition3 = motherCities3 + fatherCities3;
    let partition4 = motherCities4 + fatherCities4;
    let partition5 = motherCities5 + fatherCities5;
    let childPartition  = [partition1, partition2, partition3, partition4, partition5];

    // Copy all cities into the child
    for (var i = 0; i < child.getTripSize(); i++) {
      child.setCity(i, cities[i]);
    }

    child.setPartition(childPartition);
    return child;
  }

  /**
   * Random mutates a trip, swaps positions of two locations in trip.
   * @param {array} trip - Instance of Trip class.
  */
  mutate(trip) {
    for (var i = 0; i < trip.getTripSize(); i++) {
      if (Math.random() < this.mutationRate) {
        let splice = Math.floor(trip.getTripSize() * Math.random());
        let city1  = trip.getCity(i);
        let city2  = trip.getCity(splice);
        trip.setCity(splice, city1);
        trip.setCity(i, city2);
      }
    }
  }

  /**
   * Tournament Selection for selecting fittest individual for next generation.
   * @param {array} population - Instance of Population class.
   * @returns {array} fittest - The fittest individual trip from the tournament.
  */
  tournamentSelection(population) {
    let tournament = new Population(this.destinations, this.tournamentSize, false);
    for (var i = 0; i < this.tournamentSize; i++) {
      let random = Math.floor(Math.random() * population.populationSize());
      tournament.saveTrip(i, population.getTrip(random));
    }
    let fittest = tournament.getFittest();
    return fittest;
  }
}

export default Genetic;