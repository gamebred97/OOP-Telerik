/* eslint-disable */
import { ApplicationData } from "../core/applicationData.js";
import { try_parse_float, try_parse_int, validateParamsCount } from "./validationHelpers.js";

export class CreateToothpasteCommand {
    #params;
    #appData;

    /**
    * @param {string[]} params
    * @param {ApplicationData} appData
    */
    constructor(params, appData) {
        validateParamsCount(params, 5);

        this.#params = params;
        this.#appData = appData;
    }

    execute() {
    const [toothpasteName, toothpasteBrand, toothpastePrice, toothpasteGender, toothpasteIngredients] = this.#params;
    this.#appData.createToothpaste(toothpasteName, toothpasteBrand, toothpastePrice, toothpasteGender, toothpasteIngredients);
  

    return `Toothpaste with name ${toothpasteName} was created!\n`
    }
}

