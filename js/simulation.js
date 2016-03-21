'use strict';

class Simulation {
  /**
   * Constructs the Simulation class.
  */
  constructor() {
    this.paused = true;
    this.running = false;
  }

  /**
   * Attaches an event listener to window object.
  */
  attachEventListners() {
    window.addEventListener('keydown', this.enableKeyboard.bind(this), false);
  }

  /**
   * Toggles pause value of Simulation class.
  */
  togglePause() {
    this.paused ? this.paused = false : this.paused = true;
  }

  /**
   * Tracks keyboard events, recognizing spacebar presses.
   * @param {object} event - The keyboard event via keypress.
   * @returns {undefined}
  */
  enableKeyboard(event) {
    if (event.which == 32) {
      event.preventDefault();
      this.togglePause();
    }
  }

  /**
   * Pauses the simulation.
  */
  pauseSimulation() {
    this.running = false;
  }

  /**
   * Resumes the simulation.
  */
  resumeSimulation() {
    this.running = true;
  }
}

export default Simulation;