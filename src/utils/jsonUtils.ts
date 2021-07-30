import fs = require('fs');

async function getJsonValues(path) {
    try {
        let data = fs.readFileSync(path, 'UTF-8');
        let parsed = JSON.parse(data);
        return parsed;
    } catch (error) {
        console.error(error);
        return null;
    }
}

function applyJsonValues(jsonValues, profile) {
    let keys = Object.keys(jsonValues);
    for(let i = 0; i < keys.length; i++) {
        profile[keys[i]] = jsonValues[keys[i]];
    }
}

export {
    getJsonValues, applyJsonValues
}