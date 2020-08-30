/* Question 1:
  Program to search for a particular character in a string */

  console.log("Answer 1");
  let inputString = "Hello, World!";
  let searchString = "W";
  let output = inputString.indexOf(searchString);
  console.log("The character " + searchString+ " is present at index " + output + "\n\n");

// --------------------------------------------------------- //

/* Question 2:
  Program to convert minutes to seconds */

  console.log("Answer 2");
  let minute = 15;
  let second = minute * 60;
  console.log(`${minute} minutes is equal to ${second} seconds\n\n`);

// --------------------------------------------------------- //

/* Question 3:
  Program to search for an element in a array of strings */

  console.log("Answer 3");
  var array = ["apple","mango","banana","grapes","orange","pineapple"];
  let searchElement = "orange";
  for(var i=0; i<=array.length; i++)
  {
    if(searchElement==array[i])
    {
      console.log("True\n" + searchElement + " is present at index " + i + " in " + array + "\n\n");
    }
  }

// --------------------------------------------------------- //

/* Question 4:
  Program to display only elements containing "a" in them from an array */

  console.log("Answer 4");
  var array = ["cricket","football","hockey","basketball","volleyball"];
  let newArray = [];
  for(var i in array)
  {
    if(array[i].includes("a"))
    {
      newArray.push(array[i])
    }
  }
  console.log("The elements containing 'a' are " + newArray + "\n\n");

// --------------------------------------------------------- //

/* Question 5:
  Print an array in reverse order */

  console.log("Answer 5");
  var array = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  for(var i=array.length-1; i>=0; i--)
  {
    console.log(array[i]);
  }

// --------------------------------------------------------- //