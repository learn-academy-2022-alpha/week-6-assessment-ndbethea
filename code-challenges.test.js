// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" },
];
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// Pseudo Code
// create a describe method for sentenceBot
// create an it statement that will describe what our function is to do with
// create an expect statement for people that will return ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("sentenceBot", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(sentenceBot(people)).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ]);
  });
});

// b) Create the function that makes the test pass.

// Pseudo Code
// create const sentenceBot
// create a function that takes in an array
// create a variable let answer be equal to the array.map passing in the parameter of value
// create variable let name be equal to the value.name.split an empty "".map
// iterate through the value at the index to uppercase, then the .substring of the 1 value to return the rest of the string
// return our value to equal the name variable.join an empty "" + "is" + our value.occupation + "."
// return final answer

const sentenceBot = (array) => {
  let answer = array.map((value) => {
    let name = value.name
      .split(" ")
      .map((v) => v.charAt(0).toUpperCase() + v.substring(1));
    return (value = name.join(" ") + " is " + value.occupation + ".");
  });
  return answer;
};

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
// Expected output: [ 2, 1, -1 ]

// Pseudo Code
// create a describe statement with name of function remainderArr
// create an it statement describing what the function does
// create expect statement for hodgepodge1 to equal [ 2, 0, -1, 0 ]
// create expect statement for hodgepodge2 to equal [ 2, 1, -1 ]

describe("remainderArr", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(remainderArr(hodgepodge1)).toEqual([2, 0, -1, 0]);
    expect(remainderArr(hodgepodge2)).toEqual([2, 1, -1]);
  });
});

// b) Create the function that makes the test pass.

// Pseudo Code
// create a const for remainder arr
// create a function that takes in an array
// create a variable let to equal our array.filter of value
// return v using the typeof method to be strictly equal to "number"
// return our variable of filterIt.map
// create function of our value to you the modulo of 3 to get the remainder

const remainderArr = (array) => {
  let filterIt = array.filter((v) => {
    return typeof v === "number";
  });
  return filterIt.map((v) => v % 3);
};

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4];
// Expected output: 99
const cubeAndSum2 = [0, 5, 10];
// Expected output: 1125

// Pseudo Code
// create a describe statement with name of function cubeAdd
// create an in it statement describing what the function does
// create an expect statement for cubeAndSum1 to equal 99
// create an expect statement for cubeAndSum2 to equal 1125

describe("cubeAdd", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(cubeAdd(cubeAndSum1)).toEqual(99);
    expect(cubeAdd(cubeAndSum2)).toEqual(1125);
  });
});

// b) Create the function that makes the test pass.

// Pseudo Code
// create const cubeAdd
// create a function that takes in an array and returns the sum of all the numbers cubed
// return the array.map passing in our value and create function to cube our value
// use.reduce method to return method of a, b to return the functions accumulated results

const cubeAdd = (array) => {
  return array.map((val) => Math.pow(val, 3)).reduce((a, b) => a + b);
};
