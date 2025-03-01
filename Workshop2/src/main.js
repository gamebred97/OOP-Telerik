/* eslint-disable */
import { ApplicationData } from "./core/applicationData.js";
import { CommandFactory } from "./core/commandFactory.js";
import { Engine } from "./core/engine.js";

const main = () => {
  // The following demonstrates the Composition pattern.
  const data = new ApplicationData();
  const commandFactory = new CommandFactory(data);
  const engine = new Engine(commandFactory);

  const commands = [
    "CreateShampoo MyMan Trashy 10.99 Men 1000 EveryDay",
    "CreateToothpaste White Expensive 10.99 Men calcium,fluorid",
    "CreateCream Krema Essentials 15.99 Unisex Vanilla",
    "CreateCategory Shampoos",
    "CreateCategory Cream",
    "CreateCategory Toothpastes",
    "AddToCategory Shampoos MyMan",
    "AddToCategory Toothpastes White",
    "AddToCategory Cream Krema",
    "AddToShoppingCart MyMan",
    "AddToShoppingCart Krema",
    "AddToShoppingCart White",
    "ShowCategory Shampoos",
    "ShowCategory Toothpastes",
    "ShowCategory Cream",
    "TotalPrice",
    "RemoveFromCategory Shampoos MyMan",
    "ShowCategory Shampoos",
    "RemoveFromShoppingCart MyMan",
    "TotalPrice"
  ];

  const result = engine.run(commands);
  console.log(result);
};

main();

