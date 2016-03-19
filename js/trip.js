class Trip {
  /**
   * Store the list of destination cities.
   * @param {array} path - List of cities we can travel to.
  */
  constructor(destinations) {
    this.destinations = destinations;
  }

  /**
   * Adds a city to list of destinations.
   * @param {object} city - The city to add to destinations.
   * @returns {undefined}
  */
  addCity(city) {
    this.destinations.push(city);
  }

  /**
   * Gets a city from list of destinations.
   * @param {number} index - The index of the city to get.
   * @returns {object} undefined - The city at given index.
  */
  getCity(index) {
    return this.destinations[index];
  }

  /**
   * Gets the length of total destination cities.
   * @returns {number} undefined - Total number of destinations.
  */
  numberOfDestinations() {
    return this.destinations.length;
  }
}

export default Trip;