const util = require('./util.js');

test('Should return return the number of ocurrence (3)', () => {
    grid = ['OIE', 
            'IIX', 
            'EXE']
    result = util.ocurrence('OIE', grid )
    if (result !== 3) {
        throw new Error('Result should be 3. Got ' + result)      
    }
})

test('Should return return the number of ocurrence (4)', () => {
    result = util.ocurrence('OIE', ['EIOIEIOEIO'] )
    if (result !== 4) {
        throw new Error('Result should be 4. Got ' + result)      
    }
})

test('Should return return the number of ocurrence (8)', () => {
    grid = ['EAEAE', 
            'AIIIA', 
            'EIOIE', 
            'AIIIA', 
            'EAEAE']
    result = util.ocurrence('OIE', grid)
    if (result !== 8) {
        throw new Error('Result should be 8. Got ' + result)      
    }
})

test('Should return return the number of ocurrence (3)', () => {
    grid = ['OX',
            'IO',
            'EX',
            'II',
            'OX',
            'IE',
            'EX']
    result = util.ocurrence('OIE', grid)
    console.log(result)
    if (result !== 3) {
        throw new Error('Result should be 3. Got ' + result)      
    }
})


test('Should return return the number of ocurrence (0)', () => {
    result = util.ocurrence('OIE', ['E'] )
    if (result !== 0) {
        throw new Error('Result should be 0. Got ' + result)      
    }
})