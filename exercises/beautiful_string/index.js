/*
=================
Base Exercise:
=================

A string is said to be beautiful if "b" occurs in it no more times than "a"; "c" occurs in it no more times than "b"; etc.
Given a string s, check whether it is beautiful.

Example

For s = "bbbaacdafe", the output should be true;

a   b   c   d   e   f   g ...  z
|   |   |   |   |   |   |      |
3 ≥ 3 > 1 ≥ 1 ≥ 1 ≥ 1 > 0 ... ≥0

It's so beautiful ;-)```

For `s = "aabbb"`, the output should be `false`

[execution time limit] 4 seconds (js)
*/

const isBeautifulString = (inputString) => {
  let isBeautiful = false;
  const letters = split(inputString);

  if (letters) {
    const totalByLetter = countLetters(letters);
    isBeautiful = validate(totalByLetter);
  }

  return isBeautiful;
};

const validate = (totalByLetter) => {
  const keys = Object.keys(totalByLetter).sort();
  let isBeauty = true;

  keys.map((key, index, keys) => {
    const current = totalByLetter[key];
    const next = totalByLetter[keys[index + 1]];

    if (next && next > current) {
      isBeauty = false;
      return;
    }
  });

  return isBeauty;
};

const countLetters = (list = []) => {
  const total = {};

  list.map((letter) => {
    total[letter] = 0;
  });

  list.map((letter) => {
    total[letter]++;
  });

  return total;
};

const split = (string = "") => {
  return string ? [...string] : string;
};

module.exports = isBeautifulString;
