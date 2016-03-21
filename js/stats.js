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
    this.currentDistance = 0;
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
  incrementTime(value) {
    this.time += value;
  }

  /**
   * Updates the Time Elapsed Label on simulation.
  */
  showTime() {
    let timeLabel = document.getElementById('simulation-time');
    if (this.getTime() % 1 === 0) {
      timeLabel.textContent = this.getTime() + '.0 Seconds';
    } else {
      timeLabel.textContent = this.getTime() + ' Seconds';
    }
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
   * Updates the Generations Formed Label on simulation.
  */
  showGenerations() {
    let generationsLabel = document.getElementById('simulation-generation') ;
    generationsLabel.textContent = this.getGenerations();
  }

  /**
   * Gets the startingDistance property of Stats.
   * @returns {number} The starting distance of the simulation.
  */
  getStartingDistance() {
    return this.startingDistance;
  }

  /**
   * Sets the currentDistance property of Stats.
   * @param {number} value - The current distance of the population.
  */
  setCurrentDistance(value) {
    this.currentDistance = value;
  }

  /**
   * Gets the optimal distance property of Stats.
   * @returns {number} The optimal distance of the simulation.
  */
  getOptimalDistance() {
    return this.optimalDistance;
  }
}

export default Stats;