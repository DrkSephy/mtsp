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
   * Sets the startingDistance property of Stats.
   * @param {number} value - The distance value to set.
  */
  setStartingDistance(value) {
    this.startingDistance = value;
  }

  showStartingDistance() {
    let startingDistanceLabel = document.getElementById('simulation-cost');
    startingDistanceLabel.textContent = this.getStartingDistance();
  }

  /**
   * Sets the currentDistance property of Stats.
   * @param {number} value - The current distance of the trip.
  */
  setCurrentDistance(value) {
    this.currentDistance = value;
  }

  /**
   * Gets the currentDistance property of Stats.
   * @returns {number} The current distance of the trip.
  */
  getCurrentDistance() {
    return this.currentDistance;
  }

  /**
   * Gets the optimal distance property of Stats.
   * @returns {number} The optimal distance of the simulation.
  */
  getOptimalDistance() {
    return this.optimalDistance;
  }

  /**
   * Sets the current optimal distance = starting distance for the simulation.
  */
  setOptimalDistance() {
    this.optimalDistance = this.getStartingDistance();
  }

  computeOptimalDistance() {
    if (this.getCurrentDistance() < this.getOptimalDistance()) {
      this.optimalDistance = this.getCurrentDistance();
    }
  }

  showOptimalDistance() {
    let optimalDistanceLabel = document.getElementById('simulation-optimal');
    optimalDistanceLabel.textContent = this.getOptimalDistance()
  }
}

export default Stats;