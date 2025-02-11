import { PropositionalLogic } from "./propositionallogic";
import { ConnectiveFunction } from "./types";
import { normalizeChoiceResult } from "./utils";

export class QCCL extends PropositionalLogic {
  public static orderedDisjunction: ConnectiveFunction = (a, b) => {
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
  };

  public static orderedConjunction: ConnectiveFunction = (a, b) => {
    a = normalizeChoiceResult(a);
    b = normalizeChoiceResult(b);
    const optionality: number = a.optionality + b.optionality;
    let degree: number;
    if (a.degree === 1 && b.degree < Infinity) {
      degree = b.degree;
    } else if (a.degree < Infinity && (a.degree > 1 || b.degree === Infinity)) {
      degree = a.degree + b.optionality;
    } else {
      degree = Infinity;
    }
    return {
      degree,
      optionality,
    };
  };
}
