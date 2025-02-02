import { ChoiceResult } from "./types";
import { normalizeChoiceResult } from "./utils";

export class PropositionalLogic {
  public static and(a: ChoiceResult, b: ChoiceResult): ChoiceResult {
    a = normalizeChoiceResult(a);
    b = normalizeChoiceResult(b);
    return {
      degree: Math.max(a.degree, b.degree),
      optionality: Math.max(a.optionality, b.optionality),
    };
  }

  public static or(a: ChoiceResult, b: ChoiceResult): ChoiceResult {
    a = normalizeChoiceResult(a);
    b = normalizeChoiceResult(b);

    return {
      degree: Math.min(a.degree, b.degree),
      optionality: Math.max(a.optionality, b.optionality),
    };
  }

  public static negation(a: ChoiceResult): ChoiceResult {
    return {
      degree: a.degree === Infinity ? 1 : Infinity,
      optionality: 1,
    };
  }
}
