class ReverseEncoder {
    public encode(input: string): string {
        const words = input.split(' ');
        const reversedWords = words.map(word => this.reverseCharacters(word));
        return reversedWords.join(' ');
    }
    public decode(input: string): string {
        const words = input.split(' ');
        const reversedWords = words.map(word => this.reverseCharacters(word));
        return reversedWords.join(' ');
    }
    private reverseCharacters(word: string): string {
        const reversedChars = word.split('').map(char => this.swapCharacter(char)).join('');

        return reversedChars;
    }
    private swapCharacter(char: string): string {
        if (char >= 'a' && char <= 'z') {
            const originalIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
            const newIndex = 25 - originalIndex; 
            return String.fromCharCode('a'.charCodeAt(0) + newIndex);
        }
        return char;
    }
}

export default ReverseEncoder;
