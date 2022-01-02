import { allSymbols } from './options-data';

const passwordStrongCheck = (password) => {
  let score = 0;
  const passwordSplit = password.split('');

  // Additions

  const length = password.length;
  score += length * 4;

  const uppercaseLetters = passwordSplit.filter(
    (e) => isLetter(e) && e === e?.toUpperCase()
  );
  score += (length - uppercaseLetters.length) * 2;

  const lowercaseLetters = passwordSplit.filter(
    (e) => isLetter(e) && e === e?.toLowerCase()
  );
  score += (length - lowercaseLetters.length) * 2;

  const numbers = passwordSplit.filter((e) => !isNaN(e));
  score += numbers.length * 4;

  const symbols = passwordSplit.filter((e) => allSymbols.indexOf(e) !== -1);
  score += symbols.length * 6;

  const symbolsOrNumbers = passwordSplit.filter(
    (e) => allSymbols.indexOf(e) !== -1 || !isLetter(e)
  );
  score += symbolsOrNumbers.length * 2;

  // Deductions

  // Repetitive characters

  score -= uppercaseLetters.length + lowercaseLetters.length;

  score -= numbers.length;

  let repetitiveLength = 0;
  let repetitiveStrike = 1;

  for (let i = 0; i < passwordSplit.length; i++) {
    if (passwordSplit[i] === passwordSplit[i - 1]) {
      //Prev is same
      repetitiveStrike += 1;
      repetitiveLength += repetitiveStrike + 1;

      if (passwordSplit[i - 2] !== passwordSplit[i]) {
        repetitiveLength++;
        repetitiveStrike = 1;
      }
    }
  }

  score -= repetitiveLength * 2;

  // TODO: Check for also, consecutive letters & numbers as deductions

  return score;
};

const isLetter = (e) => {
  return e.toLowerCase() != e.toUpperCase();
};

export default passwordStrongCheck;
