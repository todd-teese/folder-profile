import fs = require('fs');
const getStream = require('get-stream');
const csvParse = require('csv-parse');

async function getCsvValues(path) {
    const parse = csvParse({delimiter: ','});
    const data = await getStream.array(fs.createReadStream(path).pipe(parse));
    return data;
}

function csvToArray(csvValues) {
    let header;
    let values = [];
    for(let i = 0; i < csvValues.length; i++) {
        const row = csvValues[i];
        if(!header) {
            header = row;
        } else {
            values.push(rowToObject(header, row));
        }
    }
    return values;
}

function rowToObject(header, row) {
    let value = {};
    for(let i = 0; i < header.length; i++) {
        value[header[i]] = row[i];
    }
    return value;
}

export {
    getCsvValues, csvToArray, rowToObject
}