'use strict';

class Stats {
  /**
   * Stores parameters of the simulation.
  */
  constructor() {
    this.time = 0;
    this.generations = 0;
    this.startingCode = 0;
    this.optimalCost = 0;
  }

  /**
   * Gets the time property of Stats.
   * @returns {number} Total time elapsed during simulation.
  */
  getTime() {
    return this.time;
  }

  /**
   * Increments time property by 1.
  */
  incrementTime() {
    this.time++;
  }
}