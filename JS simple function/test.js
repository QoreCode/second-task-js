const func = require("./index");

try {
    const testsData = [
        {args: ['sntriignhgs', 'n'], expectedResult: 7},
        {args: ['sntriignhgs', 'r', 'i'], expectedResult: 5},
        {args: ['sntriignhgs', 'i', 'r'], expectedResult: 5},
        {args: ['sntriignhgs', 'h', 'i'], expectedResult: 8},
        {args: ['sntriignhgs', 'i'], expectedResult: 5},
        {args: ['sntriignhgs', 'z', 'x'], expectedResult: -1},
        {args: ['sntriignhgs', 'nhg', 'sn'], expectedResult: -1},
        {args: ['sntriignhgs', 's', 'r'], expectedResult: 10},
        {args: ['', 's', 'r'], expectedResult: -1}
    ];

    testsData.forEach((testData) => test(testData.args, testData.expectedResult));

    console.info("Congratulations! All tests passed.");
} catch (e) {
    console.error(e);
}

function test(args, expectedResult) {
    const result = func(...args);

    if (result === expectedResult) {
        console.info(`Test with args ${JSON.stringify(args)} is passed successfully.`);

        return;
    }

    throw new Error(`Test with index ${JSON.stringify(args)} is failed!`);
}
