// Task: convert letters to numbers to create encrypted string
// Algorithm:
// function that takes a string
// and converts it to the related character in the set
// Print the second part of the array by analyzing the first part

// Algorithm
// * divide the input into an array
// ! map thru whole input string array
// ! if charMapArr[i] === inputArray[i], print [][3]
// ! map thru input first coz that is longer
// ! and when it matches to value [0] in the map, then print value 3
// ! hold the result in an array and keep pushing
// ! print pushed result

import { charMapArr } from "./converter";

const convert = (input: string): string => {
  const inputArray = input.split("");
  let encryptedArr: string[] = [];

  //   we want to map through whatever the user types in,
  //  then map thru the character map and add letters to our encrypted array when they match
  inputArray.map((letter, i) => {
    charMapArr.map((set: any) => {
      //   if the letter from the input is equal to ANYTHING in the character map, then add it to our encrypted ting
      if (letter === set.slice(0, 1)) {
        encryptedArr.push(set.slice(-3));
      }
    });
  });

  const encryptedStr = encryptedArr.join("");

  console.log(encryptedStr);
  return encryptedStr;
};

convert("Password");
convert("Ameley");
