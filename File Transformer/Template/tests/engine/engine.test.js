/* eslint-disable */
import { Engine } from '/Users/krasi2459/Desktop/File Transformer/Template/src/engine/engine.js';
import { Transformer } from '/Users/krasi2459/Desktop/File Transformer/Template/src/engine/transformer.js';
import { FileReader } from '/Users/krasi2459/Desktop/File Transformer/Template/src/engine/file-reader.js';
import { Logger } from '/Users/krasi2459/Desktop/File Transformer/Template/src/engine/logger.js';

describe('Engine', () => {
  it('should run and call all methods correctly', () => {

    const mockReader = { readFile: jest.fn(() => '{"data": [1, 2, 3]}') };
    const mockTransformer = { 
        transform: jest.fn((data, fn) => {  
            return data.data.map(fn);  
          })
     };
    const mockLogger = { logWith: jest.fn() };


    const engine = new Engine(mockReader, mockTransformer, mockLogger);


    const transformFn = (item) => item * 2;
    const logWithFn = (data) => console.log(data);

    engine.run(transformFn, logWithFn);

    
    expect(mockReader.readFile).toHaveBeenCalledWith('Template/data.json');
    expect(mockTransformer.transform).toHaveBeenCalledWith({data: [1, 2, 3]}, transformFn);
    expect(mockLogger.logWith).toHaveBeenCalledWith([2, 4, 6], logWithFn);
  });
});