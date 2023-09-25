/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    let len = flowerbed.length;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            if (i - 1 < 0 && flowerbed[i + 1] === 0) {
                count++
                i++;
            } else if (i + 1 >= len && flowerbed[i - 1] === 0) {
                count++;
                i++;
            } else if (i - 1 < 0 && i + 1 >= len) {
                count++;
                i++;
            }
            else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                count++
                i++
            }
        }
    }
    return count >= n
};
/* 
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 
*/