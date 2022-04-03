import { func } from "./index.js";

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
        {args: ['', 's', 'r'], expectedResult: -1},
        {args: ['abc', 'a', 'd'], expectedResult: -1}, // Original func returns -1 if a or b == s[0]
        {args: ['abc', 'd', 'a'], expectedResult: -1},
        {args: ['1234567', 1, 4], expectedResult: 3}, // Need to test for eqeq cases,
                                                      // as function can be used with bools or numbers elsewhere
        {args: ['123123', true, false], expectedResult: 3},        
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
