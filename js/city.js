'use strict';

import {generateRandomInt} from './utils.js'

class City {
  /**
   * Create a city at location x, y.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
  */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Create a city at a random x, y location.
  */
  city() {
    this.x = generateRandomInt(0, 500);
    this.y = generateRandomInt(0, 500);
  }

  /**
   * Get the x-coordinate of this city.
   * @returns {number} The x-coordinate of this city.
  */
  getX() {
    return this.x;
  }

  /**
   * Get the y-coordinate of this city.
   * @returns {number} The y-coordinate of this city.
  */
  getY() {
    return this.y;
  }

  /**
   * Computes the Euclidean Distance between two cities.
   * @param {object} city - The city object to compute distance to.
   * @returns {number} The euclidean distance from this city to the given city.
  */
  euclideanDistance(city) {
    const dx = this.x - city.x;
    const dy = this.y - city.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Prints the x, y position of this city.
   * @returns {undefined}
  */
  toString() {
    console.log(this.x + ', ' + this.y);
  }
}

export default City;