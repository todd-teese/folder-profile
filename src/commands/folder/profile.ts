import { flags, SfdxCommand } from '@salesforce/command';
import { Messages, SfdxError } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';

import fs = require('fs');

import {csvToArray, getCsvValues} from '../../utils/csvUtils';
import {applyJsonValues, getJsonValues} from '../../utils/jsonUtils';
import {convertProfileToXml} from '../../utils/xmlUtils';

Messages.importMessagesDirectory(__dirname);

const messages = Messages.loadMessages('folder-profile', 'profile');

export default class Profile extends SfdxCommand {
    public static description = messages.getMessage('commandDescription');

    protected static flagsConfig = {
        source: flags.string({
            char: 's',
            required: true,
            description: messages.getMessage('sourceFlagDescription')}),
        target: flags.string({
            char: 't',
            required: true,
            description: messages.getMessage('targetFlagDescription')})
    };

    private target: string;

    public async run(): Promise<AnyJson> {
        const source: string = this.flags.source;
        this.target = this.flags.target;
        if (!await this.hasAccess(source)) {
            throw new SfdxError(messages.getMessage('errorSource'));
        }

        this.ux.startSpinner('Creating Profiles');
        this.getProfiles(source).catch(error => {
            throw new SfdxError('Issue in Creating Profiles');
        });
        this.ux.stopSpinner('Done');
        this.ux.log('Created Profiles in Folder ' + this.target);

        return true;
    }

    private async hasAccess(path: string): Promise<boolean>  {
        let canAccess: boolean = true;
        try {
            fs.accessSync(path, (fs.constants.F_OK | fs.constants.W_OK));
        } catch (error) {
            canAccess = false;
        }
        return canAccess;
    }

    private async getProfiles(path) {
        if (this.hasAccess(path)) {
            const profileDirectories = fs.readdirSync(path);
            for (const directory of profileDirectories) {
                this.getProfileFiles( path + '/' + directory, directory).catch(error => {
                    console.error(error);
                    throw new SfdxError('Error in Profile Generation');
                });
            }
        }
    }

    private async getProfileFiles(path, profileName) {
        let canAccess = true;
        try {
            await fs.promises.access(path, fs.constants.F_OK | fs.constants.W_OK);
        } catch (error) {
            canAccess = false;
        }

        if (fs.statSync(path).isFile()) {
            return;
        }
        if (canAccess && !fs.statSync(path).isFile()) {
            let profileFiles;

            profileFiles = fs.readdirSync(path);

            const profileValue = {};
            for (const file of profileFiles) {
                const fileType = file.substring(file.lastIndexOf('.'));
                const attribute = file.substring(0, file.lastIndexOf('.'));
                if (fileType === '.csv') {
                    const csvData = await getCsvValues(path + '/' + file);
                    const attributeArray = csvToArray(csvData);
                    profileValue[attribute] = attributeArray;
                }
                if (fileType === '.json') {
                    const jsonData = await getJsonValues(path + '/' + file);
                    if (jsonData) {
                        applyJsonValues(jsonData, profileValue);
                    }
                }
            }
            convertProfileToXml(profileName, profileValue, this.target).catch(error => {
                throw new SfdxError('Issue in Profile Generation');
            }) ;
        }
    }
}
