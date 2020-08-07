function range() {
    let count = 0;
    return function rangeGenerator() {
        const result = count;
        count += 1;
        return result;
    }
}

export default range;