import { allLowercase, allNumbers, allUppercase, symbolsToUse } from './config';

const generatePassword = (length, options) => {
  let charset = '';
  let output = '';

  if (options.lowercase) {
    charset += allLowercase;
  }

  if (options.uppercase) {
    charset += allUppercase;
  }

  if (options.numbers) {
    charset += allNumbers;
  }

  if (options.symbols) {
    charset += symbolsToUse;
  }

  charset = charset.split('');

  for (let k = charset.length - 1; k > 0; k--) {
    var j = Math.floor(Math.random() * (k + 1));
    var tmp = charset[k];
    charset[k] = charset[j];
    charset[j] = tmp;
  }

  charset = charset.join('');

  for (var i = 0, n = charset.length; i < length; ++i) {
    output += charset.charAt(Math.floor(Math.random() * n));
  }

  return output;
};

export default generatePassword;
