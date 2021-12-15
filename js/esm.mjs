console.log("esm.js 1")

export const fnc_mjs = () => {return "this is fnc_mjs"}
import {fnc_1js} from "./1.mjs";
export {fnc_1js}
import {fnc_2js} from "./2.mjs";
export {fnc_2js}

console.log("esm.js 2")

