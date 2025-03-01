import { ApplicationData } from "../core/applicationData.js";

export class ShowShoppingCart {
    #appData;

    /**
    * @param {ApplicationData} appData
    */
    constructor(appData) {
        this.#appData = appData;
    }
    

    execute(){
        return this.#appData.shoppingCart.print();
    }
}