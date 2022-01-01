const generatePassword = (length, options) => {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '%$#&^!@*';

  let charset = '';
  let output = '';

  if (options.lowercase) {
    charset += lowercase;
  }

  if (options.uppercase) {
    charset += uppercase;
  }

  if (options.numbers) {
    charset += numbers;
  }

  if (options.symbols) {
    charset += symbols;
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
