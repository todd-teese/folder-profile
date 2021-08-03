import fs = require('fs');

async function getJsonValues(path) {
    try {
        const data = fs.readFileSync(path, 'UTF-8');
        const parsed = JSON.parse(data);
        return parsed;
    } catch (error) {
        console.error(error);
        return null;
    }
}

function applyJsonValues(jsonValues, profile) {
    const keys = Object.keys(jsonValues);
    for (const key of keys) {
        profile[key] = jsonValues[key];
    }
}

export {
    applyJsonValues, getJsonValues
};
