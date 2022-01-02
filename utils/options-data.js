const OptionsData = {
  names: {
    uppercase: 'Uppercase',
    lowercase: 'Lowercase',
    numbers: 'Numbers',
    symbols: 'Symbols'
  },
  defaults: {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  }
};

export const minPassLength = 1;
export const maxPassLength = 32;
export const allSymbols = "@%+/'!#$*^?:.(){}[]~-_>;&";
export const symbolsToUse = '%$#&^!@*_-.';

export default OptionsData;
