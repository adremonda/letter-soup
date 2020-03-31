/**
 * .
 *LetterSoup class return the number of ocurrences of a word in a grid
 * @class LetterSoup
 *
 * @param  {integer} columsQty
 * @param  {integer} rowsQty
 * @param  {string} characters
 */
class LetterSoup {

    /**
     * @param  {integer} columsQty
     * @param  {integer} rowsQty
     * @param  {string} characters
     */
    constructor(rowsQty, columsQty, characters) {
        this.columsQty = columsQty
        this.rowsQty = rowsQty
        this.characters = characters
        this.directions = [[-1, 0], [1, 0], [1, 1],  [1, -1], [-1, -1], [-1, 1], [0, 1], [0, -1]]
        this.grid = []
    }

    /**
     * make a grid from a characters string.
     */
    makeGrid() {
        let tempArray = []
        const charactersArray = Array.from(this.characters)
        for (let i = 0; i < charactersArray.length; i += this.columsQty) {
            tempArray.push(charactersArray.slice(i, i+this.columsQty))
        }
        this.grid = tempArray
    }

    /**
     * return the number of ocurrences of a word into a grid
     * @param  {string} word
     * @return {integer}
     */
    ocurrence(word) {
        if (this.grid.length === 0)
            this.makeGrid()
        let count = 0
        for (const [i, row] of this.grid.entries()) {
            for (const [j, gridLetter] of row.entries()) {
                if(gridLetter !== word[0]) 
                    continue
                count += this.matches2d(word, i, j)
            }
        }
        return count
    }

    /**
     * @param  {string} word
     * @param  {integer} i
     * @param  {integer} j
     */
    matches2d(word, i, j) {
        let count = 0
        for (const [x, y] of this.directions) {
            let rowDirection = i, columnDirection = j
            if(this.match(word, rowDirection, columnDirection, x, y)) 
                count++
        }
        return count
    }

    /**
     * @param  {string} word
     * @param  {integer} rowDirection
     * @param  {integer} columnDirection
     * @param  {number} x
     * @param  {number} y
     * @return {boolean}
     */
    match(word, rowDirection, columnDirection, x, y) {
        let match = false
        for (const letter of word) {
            match = 0 <= rowDirection && rowDirection < this.rowsQty && 
                    0 <= columnDirection && columnDirection < this.columsQty && 
                    letter === this.grid[rowDirection][columnDirection]
            if(match) {
                rowDirection += x,columnDirection += y
            } else {
                break
            }
        }
        return match
    }
}
module.exports = LetterSoup

