'use strict';

class Population {
  constructor(destinations, size, initialize) {
    this.trips = [];
    for(var i = 0; i <= size; i++) {
      this.trips.push(null);
    }
  }
}