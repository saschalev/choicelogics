export type ChoiceResult = {
  degree: number;
  optionality: number;
};

export type ConnectiveFunction = (
  a: ChoiceResult,
  b: ChoiceResult
) => ChoiceResult;
export type ModifierFunction = (a: ChoiceResult) => ChoiceResult;
export type ConnectMultipleFunction = (...args: ChoiceResult[]) => ChoiceResult;
