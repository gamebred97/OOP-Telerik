/* eslint-disable */
import { Transformer } from './transformer.js';
import { FileReader } from './file-reader.js';
import { Logger } from './logger.js'; 

export class Engine {

  #reader;
  #transformer;
  #logger;

  constructor(reader , transformer, logger){
    this.#reader = reader;
    this.#transformer = transformer;
    this.#logger = logger;
  }

  run(transformFn, logWithFn) {
    const data = JSON.parse(this.#reader.readFile('Template/data.json'));
    const transformedData = this.#transformer.transform(data, transformFn);
    this.#logger.logWith(transformedData, logWithFn);
  }

}
