
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
    count = 0
    for (let i= 0; i <rid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            count += matches2d()
        }
    }
    return count
}

matches2d = () => {
    for ([x, y] of directions) {
        let rowDirection = i, columnDirection = j
        let match = true
        for (letter of word) {
            match = !(0 > rowDirection || rowDirection >= rowsQty || 0 > columnDirection || columnDirection >= columsQty) && 
            letter === grid[rowDirection][columnDirection]
            if(math)
                rowDirection += x,columnDirection += y
        }
        if(match) count++
    }
}

module.exports = {
    ocurrence: ocurrence,
    makeGrid: makeGrid,
}