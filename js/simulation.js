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
    if (this.paused) {
      this.showRunning();
      this.paused = false;
    } else {
      this.showPaused();
      this.paused = true;
    }
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

  /**
   * Updates Simulation Pause Label to show simulation is running.
  */
  showRunning() {
    let simulationLabel = document.getElementById('simulation-pause');
    simulationLabel.textContent = 'Running';
  }

  /**
   * Updates Simulation Pause Label to show simulation is paused.
  */
  showPaused() {
    let simulationLabel = document.getElementById('simulation-pause');
    simulationLabel.textContent = 'Paused';
  }

  /**
   * Returns running state of simulation.
   * @returns {boolean} undefined - Whether the simulation is running or not.
  */
  isRunning() {
    return this.running;
  }
}

export default Simulation;