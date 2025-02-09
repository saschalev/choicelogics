import { ConnectiveFunction, ModifierFunction } from "./types";
import { normalizeChoiceResult } from "./utils";

export class PropositionalLogic {
  public static and: ConnectiveFunction = (a, b) => {
    a = normalizeChoiceResult(a);
    b = normalizeChoiceResult(b);
    return {
      degree: Math.max(a.degree, b.degree),
      optionality: Math.max(a.optionality, b.optionality),
    };
  };

  public static or: ConnectiveFunction = (a, b) => {
    a = normalizeChoiceResult(a);
    b = normalizeChoiceResult(b);

    return {
      degree: Math.min(a.degree, b.degree),
      optionality: Math.max(a.optionality, b.optionality),
    };
  };

  public static negation: ModifierFunction = (a) => {
    return {
      degree: a.degree === Infinity ? 1 : Infinity,
      optionality: 1,
    };
  };
}
