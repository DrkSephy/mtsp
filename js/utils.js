/**
 * Utility Methods.
 * @module js/utils
*/

/**
 * Generations a random integer between min and max (inclusive)
 * @param {number} min - The minimum desired output.
 * @param {number} max - The maximum desired output.
 * @return {number} undefined
*/
export function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}