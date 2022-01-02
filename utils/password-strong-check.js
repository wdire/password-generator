import { allNumbers, allSymbols, maxStrikeIncrease } from './options-data';

const passwordStrongCheck = (password) => {
  let score = 0;

  const passwordParts = getPasswordParts(password);
  // Additions

  score += calculateAdditions(passwordParts);

  // Deductions

  score += calculateDeductions(passwordParts);

  //console.log('total score:', score);

  return score;
};

const getPasswordParts = (password) => {
  const passwordSplit = password.split('');
  return {
    passwordSplit,
    uppercaseLetters: passwordSplit.filter(
      (e) => isLetter(e) && e === e?.toUpperCase()
    ),
    lowercaseLetters: passwordSplit.filter(
      (e) => isLetter(e) && e === e?.toLowerCase()
    ),
    numbers: passwordSplit.filter((e) => !isNaN(e)),
    symbols: passwordSplit.filter((e) => allSymbols.indexOf(e) !== -1),
    symbolsOrNumbers: passwordSplit.filter(
      (e) => allSymbols.indexOf(e) !== -1 || !isLetter(e)
    ),
    length: password.length
  };
};

const calculateAdditions = (passwordParts) => {
  let score = {
    length: 0,
    uppercase: 0,
    lowercase: 0,
    numbers: 0,
    symbols: 0,
    symbolsOrNumbers: 0
  };

  score.length = passwordParts.length * 4;

  score.uppercase = passwordParts.uppercaseLetters.length * 2;

  score.lowercase = passwordParts.lowercaseLetters.length * 2;

  score.numbers =
    passwordParts.passwordSplit.length !== passwordParts.numbers.length
      ? passwordParts.numbers.length * 4
      : 0;

  score.symbols = passwordParts.symbols.length * 6;

  score.symbolsOrNumbers = passwordParts.symbolsOrNumbers.length * 2;

  console.log('positive score:', score);

  return (
    score.length +
    score.uppercase +
    score.lowercase +
    score.numbers +
    score.symbols +
    score.symbolsOrNumbers
  );
};

const calculateDeductions = (passwordParts) => {
  let score = 0;
  score -=
    passwordParts.uppercaseLetters.length +
    passwordParts.lowercaseLetters.length;

  score -= passwordParts.numbers.length;

  //Repetitive characters

  score -= repetitiveCharacters(passwordParts);

  // Consecutive letters, numbers, symbols

  score -= consecutiveCharacters(passwordParts);

  // TODO: Add sequential letters & numbers & symbols

  console.log('negative score:', score);

  return score;
};

const repetitiveCharacters = (passwordParts) => {
  let repetitiveScore = 0;
  let repetitiveStrike = 1;

  for (let i = 0; i < passwordParts.passwordSplit.length; i++) {
    if (
      passwordParts.passwordSplit[i - 1] &&
      passwordParts.passwordSplit[i] === passwordParts.passwordSplit[i - 1]
    ) {
      //Prev is same
      repetitiveStrike += repetitiveStrike < maxStrikeIncrease ? 1 : 0;
      repetitiveScore += repetitiveStrike;

      if (
        passwordParts.passwordSplit[i - 2] &&
        passwordParts.passwordSplit[i - 2] !== passwordParts.passwordSplit[i]
      ) {
        //Repetitivity starts
        repetitiveScore++;
        repetitiveStrike = 1;
      }
    }
  }

  console.log('repetitive score:', repetitiveScore * 2);

  return repetitiveScore;
};

const consecutiveCharacters = (passwordParts) => {
  let consecutiveScore = {
    letters: 0,
    numbers: 0,
    symbols: 0
  };

  let consecutiveStrike = {
    letters: 1,
    numbers: 1,
    symbols: 1
  };

  for (let i = 0; i < passwordParts.passwordSplit.length; i++) {
    if (isPreviousLetterConsecutive(passwordParts.passwordSplit, i)) {
      consecutiveStrike.letters +=
        consecutiveStrike.letters < maxStrikeIncrease ? 1 : 0;
      consecutiveScore.letters += consecutiveStrike.letters;

      if (isConsecutiveLettersStarted(passwordParts.passwordSplit, i)) {
        consecutiveStrike.letters++;
        consecutiveStrike.letters = 1;
      }
    }

    if (isPreviousNumberConsecutive(passwordParts.passwordSplit, i)) {
      consecutiveStrike.numbers +=
        consecutiveStrike.numbers < maxStrikeIncrease ? 1 : 0;
      consecutiveScore.numbers += consecutiveStrike.numbers;

      if (isConsecutiveNumberStarted(passwordParts.passwordSplit, i)) {
        consecutiveScore.numbers++;
        consecutiveStrike.numbers = 1;
      }
    }

    if (isPreviousSymbolConsecutive(passwordParts.passwordSplit, i)) {
      consecutiveStrike.symbols +=
        consecutiveStrike.symbols < maxStrikeIncrease ? 1 : 0;
      consecutiveScore.symbols += consecutiveStrike.symbols;

      if (isConsecutiveSymbolStarted(passwordParts.passwordSplit, i)) {
        consecutiveScore.symbols++;
        consecutiveStrike.symbols = 1;
      }
    }
  }

  console.log('cconsecutive score:', consecutiveScore, 'total:');

  return (
    consecutiveScore.letters +
    consecutiveScore.numbers +
    consecutiveScore.symbols
  );
};

const isPreviousSymbolConsecutive = (passwordSplit, i) => {
  return (
    passwordSplit[i - 1] &&
    isSmybol(passwordSplit[i]) &&
    isSmybol(passwordSplit[i - 1]) &&
    isSmybol(passwordSplit[i]) === isSmybol(passwordSplit[i - 1])
  );
};

const isConsecutiveSymbolStarted = (passwordSplit, i) => {
  return (
    !passwordSplit[i - 2] ||
    !isSmybol(passwordSplit[i - 2]) ||
    (isSmybol(passwordSplit[i - 2]) &&
      isSmybol(passwordSplit[i - 2]) !== isSmybol(passwordSplit[i]))
  );
};

const isPreviousNumberConsecutive = (passwordSplit, i) => {
  return (
    passwordSplit[i - 1] &&
    isNumber(passwordSplit[i]) &&
    isNumber(passwordSplit[i - 1]) &&
    isNumber(passwordSplit[i]) === isNumber(passwordSplit[i - 1])
  );
};

const isConsecutiveNumberStarted = (passwordSplit, i) => {
  return (
    !passwordSplit[i - 2] ||
    !isNumber(passwordSplit[i - 2]) ||
    (isNumber(passwordSplit[i - 2]) &&
      isNumber(passwordSplit[i - 2]) !== isNumber(passwordSplit[i]))
  );
};

const isPreviousLetterConsecutive = (passwordSplit, i) => {
  return (
    passwordSplit[i - 1] &&
    isLetter(passwordSplit[i]) &&
    isLetter(passwordSplit[i - 1]) &&
    isUppercase(passwordSplit[i]) === isUppercase(passwordSplit[i - 1])
  );
};

const isConsecutiveLettersStarted = (passwordSplit, i) => {
  return (
    !passwordSplit[i - 2] ||
    !isLetter(passwordSplit[i - 2]) ||
    (isLetter(passwordSplit[i - 2]) &&
      isUppercase(passwordSplit[i - 2]) !== isUppercase(passwordSplit[i]))
  );
};

const isSmybol = (e) => {
  return allSymbols.includes(e);
};

const isNumber = (e) => {
  return allNumbers.includes(e);
};

const isLetter = (e) => {
  return e?.toLowerCase() != e?.toUpperCase();
};

const isUppercase = (e) => {
  return e.toUpperCase() === e;
};

export default passwordStrongCheck;
