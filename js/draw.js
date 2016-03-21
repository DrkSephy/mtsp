'use strict';

class Draw {
  /**
   * Initializes references to the canvas element.
  */
  constructor() {
    this.canvas = document.getElementById('grid');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = '#ffffff';
    this.width = 500;
    this.height = 500;
  }

  /**
   * Draws a rectangle on the canvas.
   * @param {number} x - The x-coordinate to draw at.
   * @param {number} y - The y-coordinate to draw at.
  */
  drawPoint(x, y) {
    this.ctx.fillRect(x, y, 4, 4);
  }

  drawLine(x, y, toX, toY) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(toX, toY);
    this.ctx.stroke();
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

export default Draw;