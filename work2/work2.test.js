import {repeatWord} from './work2.js';

describe(('repeat the word the "count" times'), () => {
    it('repeat the word "car" 3 times', () => expect(repeatWord('car', 3)).toBe('car1, car2, car3')),
    it('repeat the word "home" 2 times', () => expect(repeatWord('home', 2)).toBe('home1, home2')),
    it('repeat the word "Tom" 1 times', () => expect(repeatWord('Tom', 1)).toBe('Tom1'));

})