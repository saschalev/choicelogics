import { PropositionalLogic } from "./propositionallogic";
import { ChoiceResult } from "./types";
import { normalizeChoiceResult } from "./utils";

export class QCCL extends PropositionalLogic {
  public static orderedDisjunction(
    a: ChoiceResult,
    b: ChoiceResult
  ): ChoiceResult {
    a = normalizeChoiceResult(a);
    b = normalizeChoiceResult(b);

    const optionality: number = a.optionality + b.optionality;

    let degree: number;

    if (a.degree < Infinity) {
      degree = a.degree;
    } else if (a.degree === Infinity && b.degree < Infinity) {
      degree = b.degree + a.optionality;
    } else {
      degree = Infinity;
    }

    return {
      degree,
      optionality,
    };
  }

  public static orderedConjunction(
    a: ChoiceResult,
    b: ChoiceResult
  ): ChoiceResult {
    a = normalizeChoiceResult(a);
    b = normalizeChoiceResult(b);
    const optionality: number = a.optionality + b.optionality;
    let degree: number;
    if (a.degree < Infinity) {
      degree = a.degree;
    } else if (a.degree === Infinity && b.degree < Infinity) {
      degree = b.degree + a.optionality;
    } else {
      degree = Infinity;
    }
    return {
      degree,
      optionality,
    };
  }
}
