'use strict';

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
}