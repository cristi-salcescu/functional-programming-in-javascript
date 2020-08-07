function toArray(generate) {
    let arr = [];
    let value = generate();
    // eslint-disable-next-line functional/no-loop-statement
    while (value !== undefined) {
        arr = [...arr, value];
        value = generate();
    }
    return arr;
}

export default toArray;