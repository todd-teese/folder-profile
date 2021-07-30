import { flags, SfdxCommand } from '@salesforce/command';
import { Messages, SfdxError } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';
import fs = require('fs');

Messages.importMessagesDirectory(__dirname);

const messages = Messages.loadMessages('folder-profile', 'profile');

export default class Profile extends SfdxCommand {
    public static description = messages.getMessage('commandDescription');

    protected static flagsConfig = {
        // flag with a value (-n, --name=VALUE)
        source: flags.string({char: 's', required:true, description: messages.getMessage('sourceFlagDescription')}),
        target: flags.string({char: 't', required:true, description: messages.getMessage('targetFlagDescription')})
    };

    public async run(): Promise<AnyJson> {
        console.log('Getting Source and ting');
        const source: string = this.flags.source;
        const target: string = this.flags.target;
        // see if source is good,
        if(!await this.hasAccess(source)) {
            throw new SfdxError(messages.getMessage('errorSource'));
        }


        return {};
    }

    private async hasAccess(path: string) : Promise<boolean>  {
        let canAccess: boolean = true;
        try {
            fs.accessSync(path, (fs.constants.F_OK | fs.constants.W_OK))
        } catch (error) {
            canAccess = false;
        }
        return canAccess;
    }
}