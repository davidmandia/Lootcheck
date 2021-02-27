import bitcoinreducer from './bitcoin';
import { FETCH_BITCOIN } from '../actions/constants';


describe('bitcoinReducer', () => {
    const bitcoinData = { bpi: 'bitcoin price index'};

    it('fetches and sets the bitcoin data', () => {
        expect(bitcoinreducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData}))
        .toEqual(bitcoinData);
    })
})