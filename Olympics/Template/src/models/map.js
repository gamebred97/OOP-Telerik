/* eslint-disable */
//Used this class initially but was trying to find a workaround the ListOlympiansTask since i was getting an error. Did not end up using it.
export class Map {

    #entries;

    constructor(entries) {
        this.#entries = entries;
    }

    get entries(){
        return this.#entries;
    }

    pr() {
        return Array.from(this.#entries).map(([key, value]) => `${key}m: ${value}s`).join('\n');
    }
}