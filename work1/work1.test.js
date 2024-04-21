import {getPercents} from './work1.js';

describe(('calculating a percentage of a number'), () => {
    it('calculate a 30% of a 200', () => expect(getPercents(30, 200)).toBe(60)),
    it('calculate a 25% of a 100', () => expect(getPercents(25, 100)).toBe(25));
    })


