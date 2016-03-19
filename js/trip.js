'use strict';

class Trip {
  /**
   * Create a trip.
   * @param {array} destinations - Instance of Destinations class.
   * @param {number} fitness - The fitness of the trip.
   * @param {number} distance - The distance traveled on the trip.
  */
  constructor(destinations, tour=null) {
    this.destinations = destinations;
    this.trip = [];
    this.fitness = 0;
    this.distance = 0;
  }

  /**
   * Returns a city in the trip.
   * @param {number} index - Index of city in path.
   * @returns {object} undefined - The city at given index.
  */
  getCity(index) {
    return this.trip[index];
  }

  /**
   * Sets a city at specific location in the trip.
   * @param {number} index - The city index to change on the trip.
   * @param {object} city - The city to add to the trip.
   * @returns {undefined}
  */
  setCity(index, city) {
    this.trip[index] = city;
    this.fitness = 0;
    this.distance = 0;
  }

  /**
   * Computes the fitness of the current trip.
   * @returns {number} fitness - The fitness of the current trip.
  */
  computeFitness() {
    if (this.fitness === 0) {
      this.fitness = 1 / this.getDistance();
    }
    return this.fitness;
  }

  /**
   * Returns the length of the current trip.
   * @returns {number} The number of cities in the current trip.
  */
  getTripSize() {
    return this.trip.length;
  }

  /**
   * Prints the optimal trip.
   * @returns {string} The string representation of cities in trip. 
  */
  printTrip() {
    let separator = '|';
    for(var i = 0; i < this.getTripSize(); i++) {
      separator += this.getCity(i) + '|';
    }
    return separator;
  }
}

export default Trip;