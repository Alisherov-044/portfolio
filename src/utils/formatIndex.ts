export function formatIndex(index: number) {
    if (index + 1 < 10) {
        return `0${index + 1}`;
    }

    return index + 1;
}
