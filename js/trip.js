'use strict';

import clone from 'clone';
import {shuffleArray, containsObject, generateRandomInt, arrayClone} from './utils.js';

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
    this.partition = 0;
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
   * Generates a randomized trip.
   * @returns {undefined} Shuffles internal class trip.
  */
  generateTrip() {
    for(var cityIndex = 0; cityIndex < this.destinations.numberOfDestinations(); cityIndex++) {
      this.setCity(cityIndex, this.destinations.getCity(cityIndex));
    }
    shuffleArray(this.trip);
    
    // Generate random partition
    let partition = this.generatePartition();

    // Assign partition
    this.setPartition(partition);

    // Generate ranges for cities owned by each salesman
    let ranges = [];
    let end = 0;
    for (var partitionIndex = 0; partitionIndex < this.partition.length; partitionIndex++) {
      end += this.partition[partitionIndex];
      ranges.push(end);
    }

    // Assign ownerships
    let trip1 = clone(this.trip.slice(0, ranges[0]));
    let trip2 = clone(this.trip.slice(ranges[0], ranges[1]));
    let trip3 = clone(this.trip.slice(ranges[1], ranges[2]));
    let trip4 = clone(this.trip.slice(ranges[2], ranges[3]));
    let trip5 = clone(this.trip.slice(ranges[3], ranges[4]));

    for (var i = 0; i < trip1.length; i++) {
      let city = trip1[i];
      city.owner = 1;
    }

    for (var i = 0; i < trip2.length; i++) {
      let city = trip2[i];
      city.owner = 2;
    }

    for (var i = 0; i < trip3.length; i++) {
      let city = trip3[i];
      city.owner = 3;
    }

    for (var i = 0; i < trip4.length; i++) {
      let city = trip4[i];
      city.owner = 4;
    }

    for (var i = 0; i < trip5.length; i++) {
      let city = trip5[i];
      city.owner = 5;
    }

    // Stitch the trips back together
    this.trip = trip1.concat(trip2).concat(trip3).concat(trip4).concat(trip5);
  }

  /**
   * Checks whether a given city is inside the current trip.
   * @param {object} city - The city to test inclusion.
   * @returns {boolean} Whether the city is in the current trip.
  */
  containsCity(city) {
    return containsObject(city, this.trip);
  }

  generatePartition() {
    return [30, 30, 30, 30, 30];
  }

  setPartition(partition) {
    this.partition = partition;
  }

  getPartition() {
    return this.partition;
  }

  getTrip() {
    return this.trip;
  }

  /**
   * Computes the total distance of the trip.
   * @returns {number} The distance of the entire trip.
  */
  computeDistance() {
    if (this.distance == 0) {
      let start = 0;
      let end = 0;
      let totalDistance = 0;
      // console.log(this.partition);
      // Loop over each partition
      for (var partitionIndex = 0; partitionIndex < this.partition.length; partitionIndex++) {
        // Splice trip together
        end += this.partition[partitionIndex];
        let trip = this.trip.slice(start, end);
        start = end;

        // Compute the distance for this trip
        for(var cityIndex = 0; cityIndex < trip.length; cityIndex++) {
          let fromCity = trip[cityIndex];
          let destinationCity = null;
          // Get the next destination city if within bounds
          if (cityIndex + 1 < trip.length) {
            destinationCity = trip[cityIndex + 1];
          }
          // Return to starting position to complete the trip
          else {
            destinationCity = trip[0];
          }

          totalDistance += fromCity.euclideanDistance(destinationCity);
        }
      }

      this.distance = totalDistance;
    }

    return this.distance;
  }
}

export default Trip;