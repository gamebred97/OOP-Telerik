/* eslint-disable */
import { ApplicationData } from "../core/applicationData.js";
import { try_parse_float, try_parse_int, validateParamsCount } from "./validationHelpers.js";

export class CreateShampooCommand {
    #params;
    #appData;

    /**
    * @param {string[]} params
    * @param {ApplicationData} appData
    */
    constructor(params, appData) {
        validateParamsCount(params, 6);

        this.#params = params;
        this.#appData = appData;
    }

    execute() {
    const [nameShampoo, brandShampoo, priceShampoo, genderShampoo, millilitersShampoo, usageShampoo] = this.#params;
    this.#appData.createShampoo(nameShampoo, brandShampoo, priceShampoo, genderShampoo, millilitersShampoo, usageShampoo);
    return `Shampoo with the name ${nameShampoo} was created!`
    }
}