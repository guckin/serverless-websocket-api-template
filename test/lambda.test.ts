import {handler} from '../src/lambda';

describe('handler', () => {
    it('is not implemented', async () => {
        expect(await handler()).toEqual('Hello World!');
    });
});
