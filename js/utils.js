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
  for (var i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

/**
 * Checks if an object is inside an array.
 * @param {object} obj - The object to test inclusion.
 * @param {array} array - The array to test object inclusion.
 * @returns {boolean} Whether the array contained the given object.
*/
export function containsObject(obj, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === obj) {
      return true;
    }
  }
  return false;
}

export function generateUniqueNumbers(length) {
  let arr = [];
  while (arr.length < length) {
    const randomNumber = Math.ceil(Math.random() * 150);
    let found = false;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] == randomNumber) {
        found = true;
        break;
      }
    }
    if (!found) {
      arr[arr.length] = randomNumber;
    }
  }

  return arr;
}