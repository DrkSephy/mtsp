'use strict';

class Draw {
  /**
   * Initializes references to the canvas element.
  */
  constructor() {
    this.canvas = document.getElementById('grid');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = '#ffffff';
    this.ctx.lineWidth = 2;
    this.width = 500;
    this.height = 500;
  }

  /**
   * Draws a rectangle on the canvas.
   * @param {number} x - The x-coordinate to draw at.
   * @param {number} y - The y-coordinate to draw at.
  */
  drawPoint(x, y) {
    this.ctx.fillRect(x, y, 8, 8);
  }

  drawLine(x, y, toX, toY, strokeColor) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = strokeColor;
    this.ctx.moveTo(x + 4, y + 4);
    this.ctx.lineTo(toX + 4, toY + 4);
    this.ctx.stroke();
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

export default Draw;