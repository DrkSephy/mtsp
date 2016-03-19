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

  /**
   * Evolves a population using Genetic Operators.
   * @param {object} population - Instance of Population class.
   * @returns {array} newPopulation - The new generation of individuals.
  */
  evolvePopulation(population) {
    let newPopulation = Population(this.destinations, population.populationSize(), false);
    let elitismOffset = 0;
    if (this.elitism) {
      newPopulation.saveTrip(0, population.getFittest());
      elitismOffset = 1;
    }

    for (var i = elitismOffset; i < newPopulation.populationSize(); i++) {
      let parent1 = this.tournamentSelection(population);
      let parent2 = this.tournamentSelection(population);
      let child   = this.crossover(parent1, parent2);
      newPopulation.saveTrip(i, child);
    }

    for (var i = elitismOffset; i < newPopulation.populationSize(); i++) {
      this.mutate(newPopulation.getTrip(i));
    }

    return newPopulation;
  }
}