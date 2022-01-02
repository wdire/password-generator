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
export const allLowercase = 'abcdefghijklmnopqrstuvwxyz';
export const allUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const allNumbers = '0123456789';
export const maxStrikeIncrease = 3;

export const lowStrengthLimit = 25;
export const mediumStrengthLimit = 45;
export const greatStrengthLimit = 80;

export default OptionsData;
