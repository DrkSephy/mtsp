'use strict';

import {shuffleArray, containsObject} from './utils.js';

class Trip {
  /**
   * Create a trip.
   * @param {array} destinations - Instance of Destinations class.
   * @param {number} fitness - The fitness of the trip.
   * @param {number} distance - The distance traveled on the trip.
  */
  constructor(destinations, trip = null) {
    this.destinations = destinations;
    this.trip = [];
    this.fitness = 0;
    this.distance = 0;
    if (trip != null) {
      this.trip = trip;
    } else {
      for (var i = 0; i < this.destinations.numberOfDestinations(); i++) {
        this.trip.push(null);
      }
    }
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
    if (this.fitness == 0) {
      this.fitness = 1 / this.computeDistance();
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

  /**
   * Generates a randomized trip.
   * @returns {undefined} Shuffles internal class trip.
  */
  generateTrip() {
    for(var cityIndex = 0; cityIndex < this.destinations.numberOfDestinations(); cityIndex++) {
      this.setCity(cityIndex, this.destinations.getCity(cityIndex));
    }
    shuffleArray(this.trip);
  }

  /**
   * Checks whether a given city is inside the current trip.
   * @param {object} city - The city to test inclusion.
   * @returns {boolean} Whether the city is in the current trip.
  */
  containsCity(city) {
    return containsObject(city, this.trip);
  }

  /**
   * Computes the total distance of the trip.
   * @returns {number} The distance of the entire trip.
  */
  computeDistance() {
    if (this.distance == 0) {
      let tripDistance = 0;
      for(var cityIndex = 0; cityIndex < this.getTripSize(); cityIndex++) {
        let fromCity = this.getCity(cityIndex);
        let destinationCity = null;
        // Get the next destination city if within bounds
        if (cityIndex + 1 < this.getTripSize()) {
          destinationCity = this.getCity(cityIndex + 1);
        }
        // Return to starting position to complete the trip
        else {
          destinationCity = this.getCity(0);
        }
        tripDistance += fromCity.euclideanDistance(destinationCity);
      }
      this.distance = tripDistance;
    }

    return this.distance;
  }
}

export default Trip;