import csvParse = require('csv-parse');
import fs = require('fs');
import getStream = require('get-stream');

async function getCsvValues(path) {
    const parse = csvParse({delimiter: ','});
    const data = await getStream.array(fs.createReadStream(path).pipe(parse));
    return data;
}

function csvToArray(csvValues) {
    let header;
    const values = [];
    for (const row of csvValues) {
        if (!header) {
            header = row;
        } else {
            values.push(rowToObject(header, row));
        }
    }
    return values;
}

function rowToObject(header, row) {
    const value = {};
    for (let i = 0; i < header.length; i++) {
        value[header[i]] = row[i];
    }
    return value;
}

export {
    getCsvValues, csvToArray, rowToObject
};
