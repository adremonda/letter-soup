
directions = [[-1, 0], [1, 0], [1, 1],  [1, -1], [-1, -1], [-1, 1], [0, 1], [0, -1]]


/**
 * @param  {integer} rows
 * @param  {integer} colums
 * @param  {integer} chars
 * @return {array}
 */
const makeGrid = (colums, chars) => {
    return chunkArray(Array.from(chars), colums)
}


/**
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} array to split
 * @param size {Integer} Size of every group
 */
const chunkArray = (myArray, size) => {
    let tempArray = [];
    for (i = 0; i < myArray.length; i += size) {
        tempArray.push(myArray.slice(i, i+size));
    }
    return tempArray;
}

/**
 * return the number of ocurrences of the word into the grid
 * @param  {string} word
 * @param  {array} grid
 * @return {integer}
 */
const ocurrence = (word, grid) => {
    let count = 0
    for (const [i, row] of grid.entries()) {
        for (const [j, gridLetter] of row.entries()) {
            if(gridLetter !== word[0]) continue
            count += matches2d(word, grid, i, j)
        }
    }
    return count
}

const matches2d = (word, grid, i, j) => {
    let count = 0
    for ([x, y] of directions) {
        let rowDirection = i, columnDirection = j
        if(match(word, grid, rowDirection, columnDirection, x, y)) count++
    }
    return count
}

const match = (word, grid, rowDirection, columnDirection, x, y) => {
    let match = false
    for (const letter of word) {
        match = 0 <= rowDirection && rowDirection < grid.length && 
                0 <= columnDirection && columnDirection < grid[0].length && 
                letter === grid[rowDirection][columnDirection]
        if(match) {
            rowDirection += x,columnDirection += y
        } else {
            break
        }
    }
    return match
}

module.exports = {
    ocurrence: ocurrence,
    makeGrid: makeGrid,
}