'use strict';

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

/**
 * Shuffles an array in O(n) time (Durstenfeld shuffle algorithm).
 * @param {array} array - The array to shuffle.
 * @returns {array} array - Shuffled input array.
*/
export function shuffleArray(array) {
  for(var i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}