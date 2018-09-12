class Sorter {
    constructor() {
        this.array = [];
    }

    add(element) {
        this.array.push(element);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        let temp = [];

        for (let i = 0; i < indices.length; i++) {
            temp.push(this.array[indices[i]]);
        }

        this.compare ? (temp.sort(this.compare)) : (temp.sort((a, b) => a - b));

        indices.sort();

        for (let i = 0; i < indices.length; i++) {
            this.array[indices[i]] = temp[i];
        }
    }

    setComparator(compareFunction) {
        this.compare = compareFunction;
    }
}

module.exports = Sorter;
