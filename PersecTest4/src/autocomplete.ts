export function autocomplete(search: string, items: string[], maxResult: number): string[] {
    const lowerSearch = search.toLowerCase();
    const startsWith: string[] = [];
    const middleOf: string[] = [];
    const endsWith: string[] = [];

    for (const item of items) {
        const lowerItem = item.toLowerCase();
        if (lowerItem.startsWith(lowerSearch)) {
            startsWith.push(item);
        } else if (lowerItem.includes(lowerSearch)) {
            if (lowerItem.endsWith(lowerSearch)) {
                endsWith.push(item); 
            } else {
                middleOf.push(item);
            }
        }
    }
    const combined = [...startsWith, ...endsWith, ...middleOf];

    return combined.slice(0, maxResult);
}
