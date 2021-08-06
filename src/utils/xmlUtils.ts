import fs = require('fs');
import xml2js = require('xml2js');

async function convertProfileToXml(profileName, profile, xmlDirectory) {
    const obj = {Profile: {
        $: {xmlns: 'http://soap.sforce.com/2006/04/metadata'},
        custom: false
        }
    };
    const keys = Object.keys(profile);
    for (const key of keys) {
        obj.Profile[key] = profile[key];

    }

    const xmlBuilder  = new xml2js.Builder();
    const xml = xmlBuilder.buildObject(obj);
    let canAccess = true;
    try {
        await fs.promises.access(xmlDirectory, fs.constants.F_OK | fs.constants.W_OK);
    } catch (error) {
        canAccess = false;
    }

    if (!canAccess) {
        fs.mkdirSync(xmlDirectory);
    }

    fs.writeFileSync(xmlDirectory + '/' + profileName + '.profile-meta' + '.xml', xml);
}

export {
    convertProfileToXml
};
