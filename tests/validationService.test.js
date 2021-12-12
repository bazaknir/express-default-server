
// TBD: add tests (!)


const { validateUpperRightCoord, validateMowerInitialPosition, validateMowersCommands } = require('../services/validation.service');

// ***************************** validateUpperRightCoord ******************************//

test('Should validate upper right coord successfuly', () => {
    const validationStatus = validateUpperRightCoord("5 5");
    expect(validationStatus.status).toBe(true);
})

test('Should NOT validate upper right coord - not provided numbers', () => {
    const validationStatus = validateUpperRightCoord("5 A");
    expect(validationStatus.status).toBe(false);
})

test('Should NOT validate upper right coord - not provided 2 numbers', () => {
    const validationStatus = validateUpperRightCoord("4 ");
    expect(validationStatus.status).toBe(false);
})

test('Should NOT validate upper right coord - not provided space', () => {
    const validationStatus = validateUpperRightCoord("6");
    expect(validationStatus.status).toBe(false);
})

test('Should NOT validate upper right coord - negative number provided', () => {
    const validationStatus = validateUpperRightCoord("5 -1");
    expect(validationStatus.status).toBe(false);
})

test('Should NOT validate upper right coord - too many params', () => {
    const validationStatus = validateUpperRightCoord("5 3 6");
    expect(validationStatus.status).toBe(false);
})

// ***************************** validateMowerInitialPosition ******************************//

test('Should validate mower initial position successfuly', () => {
    const validationStatus = validateMowerInitialPosition("1 2 N", 5, 5);
    expect(validationStatus.status).toBe(true);
})

test('Should NOT validate mower initial position - not provided numbers in position', () => {
    const validationStatus = validateMowerInitialPosition("P 2 N", 5, 5);
    expect(validationStatus.status).toBe(false);
})

test('Should NOT validate mower initial position - not provided direction', () => {
    const validationStatus = validateMowerInitialPosition("1 2", 5, 5);
    expect(validationStatus.status).toBe(false);
})

test('Should NOT validate mower initial position - direction lowercase', () => {
    const validationStatus = validateMowerInitialPosition("1 2 n", 5, 5);
    expect(validationStatus.status).toBe(false);
})

test('Should NOT validate mower initial position - mower is out bounderies', () => {
    const validationStatus = validateMowerInitialPosition("4 2 N", 3, 5);
    expect(validationStatus.status).toBe(false);
})

// ***************************** validateMowersCommands ******************************//

test('Should validate mower commands successfuly', () => {
    const validationStatus = validateMowersCommands("LFLFLFLFF");
    expect(validationStatus.status).toBe(true);
})

test('Should NOT validate mower commands - not provided L/R/F sequence (got numbers)', () => {
    const validationStatus = validateMowersCommands("1234");
    expect(validationStatus.status).toBe(false);
})

test('Should NOT validate mower commands - provided lowerecase', () => {
    const validationStatus = validateMowersCommands("lLLLRF");
    expect(validationStatus.status).toBe(false);
})

test('Should NOT validate mower commands - provided space', () => {
    const validationStatus = validateMowersCommands("RLLL RF");
    expect(validationStatus.status).toBe(false);
})

// test('Should calculate total with tip', () => {
//     const total = calculateTip(10, 0.3);
//     expect(total).toBe(13);
// })

// test('Should calculate total with default tip', () => {
//     const total = calculateTip(10);
//     expect(total).toBe(12.5);
// })

// test('Should convert 32 fahrenheit to  0celsius', () => {
//     const celsius = fahrenheitToCelsius(32);
//     expect(celsius).toBe(0);
// })

// test('Should convert 0 celsius to 32 fahrenheit', () => {
//     const fahrenheit = celsiusToFahrenheit(0);
//     expect(fahrenheit).toBe(32);
// })

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2);
//         done()
//     }, 2000)
// })

// // When we working with promises (async code) we can choose to work with 'done' or 'async await'
// test('Should add two numbers', (done) => {
//     add(2, 3).then((sum) => {
//         expect(sum).toBe(5);
//         done();
//     })
// })

// // Here we dont need to use 'done' since we can use async await
// test('Should add two numbers async/await', async () => {
//     const sum = await add(10, 22);
//     expect(sum).toBe(32);
// })