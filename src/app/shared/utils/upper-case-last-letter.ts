export const upperCaseLastLetter = (s: string): string => {
    if (s) {
        const lastLetter = s.charAt(s.length - 1);
        const restText = s.substring(0, s.length - 1);
        return restText + lastLetter.toUpperCase();
    }
    return s;
};
