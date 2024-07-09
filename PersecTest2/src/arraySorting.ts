export function sortStringsByNumber(arr: string[]): string[] {
    return arr.sort((a, b) => {
        const aMatch = a.match(/([A-Za-z]+)(\d*)(.*)/);
        const bMatch = b.match(/([A-Za-z]+)(\d*)(.*)/);

        if (!aMatch || !bMatch) {
            return 0;
        }

        const [, aPrefix, aNumber, aSuffix] = aMatch;
        const [, bPrefix, bNumber, bSuffix] = bMatch;

        if (aPrefix !== bPrefix) {
            return aPrefix.localeCompare(bPrefix);
        }

        const aNum = parseInt(aNumber, 10);
        const bNum = parseInt(bNumber, 10);
        if (aNum !== bNum) {
            return aNum - bNum;
        }

        return aSuffix.localeCompare(bSuffix);
    });
}
