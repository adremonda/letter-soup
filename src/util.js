
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
    const rowsQty = grid.length
    const columsQty = grid[0].length
    for (let i= 0; i <grid.length; i++) {
        for (let j = 0; j < columsQty; j++) {
            
            for ([x, y] of directions) {
                let rowDirection = i, columnDirection = j
                let match = true
                for (k of word) {
                    if(
                        !(0 > rowDirection || rowDirection >= rowsQty || 0 > columnDirection || columnDirection >= columsQty) && 
                        k === grid[rowDirection][columnDirection]
                    ) {
                        rowDirection += x,columnDirection += y
                    } else {
                        match = false
                        break
                    }
                }
                if(match) count++
            }

            
        }
    }
    return count
}

module.exports = {
    ocurrence: ocurrence,
    makeGrid: makeGrid,
}