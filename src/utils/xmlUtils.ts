const xml2js = require('xml2js');
import fs = require('fs');

async function convertProfileToXml(profileName, profile, xmlDirectory) {
    let obj = {'Profile': {
        $: {xmlns:"http://soap.sforce.com/2006/04/metadata"},
        custom: false
        }
    }
    let keys = Object.keys(profile);
    for(let i = 0; i < keys.length; i++) {
        obj['Profile'][keys[i]] = profile[keys[i]];
    }
    let xmlBuilder  = new xml2js.Builder();
    var xml = xmlBuilder.buildObject(obj);
    let canAccess = true
    try {
        await fs.promises.access(xmlDirectory, fs.constants.F_OK | fs.constants.W_OK);
    } catch (error) {
        canAccess = false;
    }

    if(!canAccess) {
        fs.mkdirSync(xmlDirectory);

    }

    fs.writeFileSync(xmlDirectory + '\\' + profileName + '.profile-meta' + '.xml', xml);

}

export {
    convertProfileToXml
}