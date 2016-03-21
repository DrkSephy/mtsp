'use strict';

class Stats {
  /**
   * Stores parameters of the simulation.
  */
  constructor() {
    this.time = 0;
    this.generations = 0;
    this.startingDistance = 0;
    this.optimalDistance = 0;
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

  /**
   * Gets the generations property of Stats.
   * @returns {number} Total number of generations formed during simulation.
  */
  getGenerations() {
    return this.generations;
  }

  /**
   * Increments generations property by 1.
  */
  incrementGenerations() {
    this.generations++;
  }

  /**
   * Gets the starting distance property of Stats.
   * @returns {number} The starting distance of the simulation.
  */
  getStartingDistance() {
    return this.startingDistance;
  }

  /**
   * Gets the optimal distance property of Stats.
   * @returns {number} The optimal distance of the simulation.
  */
  getOptimalDistance() {
    return this.optimalDistance;
  }
}