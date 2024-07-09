import { sortStringsByNumber } from './arraySorting';

describe('sortStringsByNumber', () => {
    it('sorts strings with different letters correctly', () => {
        const input: string[] = ["TH19", "SG20", "TH2"];
        const expected: string[] = ["SG20", "TH2", "TH19"];
        const result = sortStringsByNumber(input);
        console.log('Sorted result:', result);
        expect(result).toEqual(expected);
    });

    it('sorts strings with same letters correctly', () => {
        const input: string[] = ["TH19", "TH2", "TH1"];
        const expected: string[] = ["TH1", "TH2", "TH19"];
        const result = sortStringsByNumber(input);
        console.log('Sorted result:', result);
        expect(result).toEqual(expected);
    });

    it('sorts another set of strings correctly', () => {
        const input: string[] = ["TH10", "TH3Netflix", "TH1", "TH7"];
        const expected: string[] = ["TH1", "TH3Netflix", "TH7", "TH10"];
        const result = sortStringsByNumber(input);
        console.log('Sorted result:', result);
        expect(result).toEqual(expected);
    });
    it('sorts another set of strings correctly', () => {
        const input: string[] = ["TH10", "TH3Netflix", "TH3Ant", "AU3", "TH7"];
        const expected: string[] = ["AU3", "TH3Ant", "TH3Netflix", "TH7", "TH10"];
        const result = sortStringsByNumber(input);
        console.log('Sorted result:', result);
        expect(result).toEqual(expected);
    });
});
