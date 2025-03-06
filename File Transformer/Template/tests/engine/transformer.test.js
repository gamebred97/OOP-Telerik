/* eslint-disable */
import { Transformer } from "../../src/engine/transformer.js";

describe('Transformer' , () => {

    it('does the transform method call the passes function' , () => {
        const transformer = new Transformer();
        const mockFn = jest.fn();

        const data = [1,2,3];
        transformer.transform(data,mockFn)

        expect(mockFn).toHaveBeenCalledTimes(data.length);

        data.forEach((item, index) => {
            expect(mockFn).toHaveBeenCalledWith(item, index, data)
        })
    })


    it('does the transform method return the correct value, i.e. the transformed array' , () => {

        const transformer = new Transformer();
        const fn = (item) => item * 2;
        const data = [1 ,2 ,3];
        const expected = [2 ,4, 6];

        const result = transformer.transform(data, fn);

        expect(result).toEqual(expected);
    })
})
