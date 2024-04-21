import {getMonth} from './work3.js';

describe(('find the name of the month'), () => {
    it('find the name of the 4 month', () => expect(getMonth(4)).toBe('Апрель')),
    it('find the name of the 8 month', () => expect(getMonth(8)).toBe('Август')),
    it('find the name of the invalid number of the month', () => expect(getMonth(15)).toBe('Номер месяца неверный'));
})