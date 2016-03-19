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

  /**
   * Generates a new child from two parents.
   * @param {array} parent1 - Instance of Trip class.
   * @param {array} parent2 - Instance of Trip class.
   * @returns {array} child - The new child trip.
  */
  crossover(parent1, parent2) {
    let child = new Trip(this.destinations);
    let startPosition = Math.floor(Math.random() * parent1.getTripSize());
    let endPosition   = Math.floor(Math.random() * parent2.getTripSize());

    for (var i = 0; i < child.getTripSize(); i++) {
      if (startPosition < endPosition && i > startPosition && i < endPosition){
        child.setCity(i, parent1.getCity(i));
      }

      else if (startPosition > endPosition) {
        if (!(i < startPosition && i > endPosition)) {
          child.setCity(i, parent1.getCity(i));
        }
      }
    }

    for (var i = 0; i < parent2.getTripSize(); i++) {
      if (!child.containsCity(parent2.getCity(i))) {
        for (var j = 0; j < child.getTripSize(); j++) {
          if (child.getCity(j) == null) {
            child.setCity(j, parent2.getCity(i));
          }
        }
      }
    }

    return child;
  }

  /**
   * Random mutates a trip, swaps positions of two locations in trip.
   * @param {array} trip - Instance of Trip class.
  */
  mutate(trip) {
    for (var i = 0; i < trip.getTripSize(); i++) {
      if (Math.random() < this.mutationRate) {
        let splice = Math.floor(trip.getTripSize() * Math.random());
        let city1  = trip.getCity(i);
        let city2  = trip.getCity(splice);
        trip.setCity(splice, city1);
        trip.setCity(i, city2);
      }
    }
  }
}

export default Genetic;