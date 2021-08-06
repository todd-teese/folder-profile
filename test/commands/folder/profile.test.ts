import { test } from '@salesforce/command/lib/test'; //expect
import fs = require('fs');

const objectPermissions = 'object,enabled\ntestObject,true';
const otherAttributes = '{"custom":true}';

const testPath = './TestProfiles';
const testPathAdmin = './TestProfiles\\Admin';
const testPathAdminObjectPermissions = './TestProfiles\\Admin\\objectPermissions.csv';
const testPathAdminOtherAttributes = './TestProfiles\\Admin\\otherAttributes.json';

const testOutputPath = './TestProfilesOutput';
const testOutputAdminPath = './TestProfilesOutput\\Admin.profile-meta.xml';

describe('Hooks', () => {
    before(async () => {
        await fs.mkdir(testPath, async err => {
            await fs.mkdir(testPathAdmin, async err => {
                await fs.writeFile(testPathAdminObjectPermissions, objectPermissions, err => {})
                await fs.writeFile(testPathAdminOtherAttributes, otherAttributes, err => {})
            })
        })
    });

    after(async () => {

        await fs.unlink(testPathAdminObjectPermissions, async (err) => {
            await fs.unlink(testPathAdminOtherAttributes, async err => {
                await fs.rmdir(testPathAdmin, async err => {
                    await fs.rmdir(testPath, async err => {
                        await fs.unlink(testOutputAdminPath, async err => {
                            await fs.rmdir(testOutputPath, async err => {})
                        })
                    })
                })
            })
        })





    });

    describe('folder:profile', () => {
        test
        .command(['folder:profile', '-s', testPath, '-t', testOutputPath])
        .it('runs folder:profile -s ./TestProfiles -t ./TestProfilesOutput', () => {})
    });
})

