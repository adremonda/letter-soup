const util = require('./util.js');

test('Should return return the number of ocurrence (3)', () => {
    grid = [['O', 'I', 'E'], 
            ['I', 'I', 'X'], 
            ['E', 'X', 'E']]
    result = util.ocurrence('OIE', grid )
    if (result !== 3) {
        throw new Error('Result should be 3. Got ' + result)      
    }
})

test('Should return return the number of ocurrence (4)', () => {
    result = util.ocurrence('OIE', [['E', 'I', 'O', 'I', 'E', 'I', 'O', 'E', 'I', 'O']] )
    if (result !== 4) {
        throw new Error('Result should be 4. Got ' + result)      
    }
})

test('Should return return the number of ocurrence (8)', () => {
    grid = [['E', 'A', 'E', 'A', 'E'], 
            ['A', 'I', 'I', 'I', 'A'], 
            ['E', 'I', 'O', 'I', 'E'], 
            ['A', 'I', 'I', 'I', 'A'], 
            ['E', 'A', 'E', 'A', 'E']]
    result = util.ocurrence('OIE', grid)
    if (result !== 8) {
        throw new Error('Result should be 8. Got ' + result)      
    }
})

test('Should return return the number of ocurrence (3)', () => {
    grid = [['O', 'X'],
            ['I', 'O'],
            ['E', 'X'],
            ['I', 'I'],
            ['O', 'X'],
            ['I', 'E'],
            ['E', 'X']]
    result = util.ocurrence('OIE', grid)
    console.log(result)
    if (result !== 3) {
        throw new Error('Result should be 3. Got ' + result)      
    }
})


test('Should return return the number of ocurrence (0)', () => {
    result = util.ocurrence('OIE', [['E']] )
    if (result !== 0) {
        throw new Error('Result should be 0. Got ' + result)      
    }
})