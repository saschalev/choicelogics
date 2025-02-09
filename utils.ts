import { ChoiceResult } from "./types";

export function normalizeChoiceResult(result: ChoiceResult): ChoiceResult {
  return {
    degree: Math.abs(result.degree),
    optionality: Math.abs(result.optionality),
  };
}

export function validateChoiceResult(result: ChoiceResult): boolean {
  const { degree, optionality } = result;
  return degree >= 1 && optionality >= 1 && optionality !== Infinity;
}

export function boolToChoiceResult(value: boolean): ChoiceResult {
  return {
    degree: value ? 1 : Infinity,
    optionality: 1,
  };
}

export function choiceResultToBool(result: ChoiceResult): boolean {
  return result.degree < Infinity;
}
