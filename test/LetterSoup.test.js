const LetterSoup = require('../src/LetterSoup.js');

test('Should return return the number of ocurrence (3)', () => {
    const letterSoup = new LetterSoup(3, 3, 'OIEIIXEXE')
    result = letterSoup.ocurrence('OIE')
    if (result !== 3) {
        throw new Error('Result should be 3. Got ' + result)      
    }
})

test('Should return return the number of ocurrence (4)', () => {
    const letterSoup = new LetterSoup(1, 10, 'EIOIEIOEIO')
    result = letterSoup.ocurrence('OIE')
    if (result !== 4) {
        throw new Error('Result should be 4. Got ' + result)      
    }
})

test('Should return return the number of ocurrence (8)', () => {
    const letterSoup = new LetterSoup(5, 5, 'EAEAEAIIIAEIOIEAIIIAEAEAE')
    result = letterSoup.ocurrence('OIE')
    if (result !== 8) {
        throw new Error('Result should be 8. Got ' + result)      
    }
})

test('Should return return the number of ocurrence (3)', () => {
    const letterSoup = new LetterSoup(7, 2, 'OXIOEXIIOXIEEX')
    result = letterSoup.ocurrence('OIE')
    if (result !== 3) {
        throw new Error('Result should be 3. Got ' + result)      
    }
})


test('Should return return the number of ocurrence (0)', () => {
    const letterSoup = new LetterSoup(1, 1, 'E')
    result = letterSoup.ocurrence('OIE')
    if (result !== 0) {
        throw new Error('Result should be 0. Got ' + result)      
    }
})


test('Should make a grid from a characters string', () => {
    const letterSoup = new LetterSoup(5, 5, 'EAEAEAIIIAEIOIEAIIIAEAEAE')
    letterSoup.makeGrid()
    expectdGrid = [['E', 'A', 'E', 'A', 'E'], 
                    ['A', 'I', 'I', 'I', 'A'], 
                    ['E', 'I', 'O', 'I', 'E'], 
                    ['A', 'I', 'I', 'I', 'A'], 
                    ['E', 'A', 'E', 'A', 'E']]
    if (grid.length === 5) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                    expect(grid[i][j]).toEqual(expectdGrid[i][j])
            }
        }
    }
    console.log(grid)
})