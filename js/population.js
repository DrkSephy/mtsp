'use strict';

class Population {
  /**
   * Manages our population of trips.
   * @param {array} destinations - Instance of Destinations class.
   * @param {number} size - The size of the population to generate.
   * @param {boolean} initialize - Whether or not to initialize a new population.
  */
  constructor(destinations, size, initialize) {
    this.trips = [];
    for(var i = 0; i <= size; i++) {
      this.trips.push(null);
    }
  }

  /**
   * Saves a trip.
   * @param {number} key - The population index to save trip to.
   * @param {number} value - The trip to save.
   * @returns {undefined}
  */
  saveTrip(key, value) {
    this.tours[key] = value;
  }

  /**
   * Gets a trip from our population.
   * @param {number} index - The individual to get from the population.
   * @returns {array} The trip from the population.
  */
  getTrip(index) {
    return this.trips[index];
  }
}