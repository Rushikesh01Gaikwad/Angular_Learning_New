const { browser } = require('protractor');

describe('launch sample website', function() {
    it('validate site title', async function() {
        await browser.get('https://getbootstrap.com/docs/5.3/getting-started/introduction/');
        const title = await browser.getTitle();
        expect(title).toEqual('Introduction · Bootstrap');
    });
});
