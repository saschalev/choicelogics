# choicelogics
This Code is a practical implementation of [Bernreiter, Michael, Jan Maly, and Stefan Woltran. "Choice logics and their computational properties." Artificial Intelligence 311 (2022): 103755](https://doi.org/10.1016/j.artint.2022.103755)
This npm package provides a general framework for choice logics. It offers a flexible and extensible foundation for preference modeling and reasoning, encapsulating various choice logics, including Qualitative Choice Logic (QCL) and Conjunctive Choice Logic (CCL), while allowing the definition of new ones.

## Installation

To install the package, use npm:

```bash
npm install choicelogics
```

## Usage

### Importing the Module

```typescript
import { QCCL, PropositionalLogic, ChoiceResult, normalizeChoiceResult, choiceResultToBool, boolToChoiceResult } from "choicelogics";
```

### Example

```typescript
const a: ChoiceResult = { degree: 2, optionality: 1 };
const b: ChoiceResult = { degree: Infinity, optionality: 2 };

const result1 = QCCL.orderedDisjunction(a, b);
console.log(result1); // { degree: 2, optionality: 3 }

const result2 = PropositionalLogic.and(a, b);
console.log(result2); // { degree: Infinity, optionality: 2 }

const boolResult = choiceResultToBool(a);
console.log(boolResult); // true

const choiceResult = boolToChoiceResult(false);
console.log(choiceResult); // { degree: Infinity, optionality: 1 }
```

## API

### Classes

#### `QCCL (Extends PropositionalLogic)`
A combination of QCL and CCL
- `static orderedDisjunction(a: ChoiceResult, b: ChoiceResult): ChoiceResult`
- `static orderedConjunction(a: ChoiceResult, b: ChoiceResult): ChoiceResult`

#### `PropositionalLogic`

- `static and(a: ChoiceResult, b: ChoiceResult): ChoiceResult`
- `static or(a: ChoiceResult, b: ChoiceResult): ChoiceResult`
- `static negation(a: ChoiceResult): ChoiceResult`

### Types

#### `ChoiceResult`

```typescript
type ChoiceResult = {
  degree: number;
  optionality: number;
};
```

### Util Functions

#### `normalizeChoiceResult(result: ChoiceResult): ChoiceResult`

#### `boolToChoiceResult(value: boolean): ChoiceResult`

#### `choiceResultToBool(result: ChoiceResult): boolean`

## Extending the Logic

You can extend the existing logic by inheriting from the provided classes. Here is an example of how to create a new logic class by extending `PropositionalLogic`:

```typescript
import { PropositionalLogic, ChoiceResult } from "choicelogics";

class CustomLogic extends PropositionalLogic {
  public static customOperation(a: ChoiceResult, b: ChoiceResult): ChoiceResult {
    // Custom logic implementation
    return {
      degree: a.degree + b.degree,
      optionality: a.optionality * b.optionality,
    };
  }
}

const a: ChoiceResult = { degree: 2, optionality: 1 };
const b: ChoiceResult = { degree: 3, optionality: 2 };

const result = CustomLogic.customOperation(a, b);
console.log(result); // { degree: 5, optionality: 2 }
```

## License

This project is licensed under the ISC License.
