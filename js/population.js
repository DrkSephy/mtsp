'use strict';

import Trip from './trip.js';

class Population {
  /**
   * Manages our population of trips.
   * @param {array} destinations - Instance of Destinations class.
   * @param {number} size - The size of the population to generate.
   * @param {boolean} initialize - Whether or not to initialize a new population.
  */
  constructor(destinations, size, initialize) {
    this.trips = [];
    this.size = size;
    for (var i = 0; i < size; i++) {
      this.trips.push(null);
    }
    if (initialize) {
      for (var i = 0; i < size; i++) {
        let newTrip = new Trip(destinations);
        newTrip.generateTrip();
        this.saveTrip(i, newTrip)
      }
    }
  }

  /**
   * Saves a trip.
   * @param {number} key - The population index to save trip to.
   * @param {number} value - The trip to save.
   * @returns {undefined}
  */
  saveTrip(key, value) {
    this.trips[key] = value;
  }

  /**
   * Gets a trip from our population.
   * @param {number} index - The individual to get from the population.
   * @returns {array} The trip from the population.
  */
  getTrip(index) {
    return this.trips[index];
  }

  /**
   * Computes the fittest individual tour.
   * @returns {number} fittest - The fitness of the best tour.
  */
  getFittest() {
    let fittest = this.trips[0];
    for (var i = 0; i < this.populationSize(); i++) {
      if (fittest.computeFitness() <= this.getTrip(i).computeFitness()) {
        fittest = this.getTrip(i);
      }
    }
    return fittest;
  }

  /**
   * Returns the number of trips in our population.
   * @returns {number} The number of individuals in the population.
  */
  populationSize() {
    return this.trips.length;
  }
}

export default Population;