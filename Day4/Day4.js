function nextImage()
{
  const ele = document.getElementById("image");
  ele.src = "https://cdn.britannica.com/s:700x500/77/170477-050-1C747EE3/Laptop-computer.jpg";
}
function newImage()
{
  const ele = document.getElementById("image");
  ele.src = "https://betanews.com/wp-content/uploads/2020/01/windows-10-pc-laptop.jpg";
}
function backImage()
{
  const ele = document.getElementById("image");
  ele.src = "https://img.business.com/rc/816x500/aHR0cHM6Ly93d3cuYnVzaW5lc3MuY29tL2ltYWdlcy9jb250ZW50LzVjYS8zZTFhYTVhMjE1ZThhNDU4YmIzMTMvMC04MDAt?_ga=2.104530496.1567260935.1599730570-1300763477.1599730570";
}

//---------------------------------------------------------------------------------------------------

function copyContent() {
  const ele = document.getElementsByClassName("input");
  let i = ele[0].value;
  ele[1].value = i;
}

//---------------------------------------------------------------------------------------------------

let Student = [
  {
    name: "Abc",
    age: 31,
    country: "India",
    hobbies: ["Swimming", "Dancing", "Cricket", "Workout"],
  },
  {
    name: "Def",
    age: 22,
    country: "USA",
    hobbies: ["Reading", "Dancing", "Cricket", "Workout", "Acting"],
  },
  {
    name: "Pqr",
    age: 19,
    country: "India",
    hobbies: ["Reading", "Dancing", "Acting", "Singing"],
  },
  {
    name: "Rst",
    age: 21,
    country: "India",
    hobbies: ["Swimming", "Reading", "Dancing", "Singing", "Workout", "Acting"],
  },
  {
    name: "Xyz",
    age: 34,
    country: "England",
    hobbies: ["Workout", "Rugby", "Martial Arts"],
  },
];

//---------------------------------------------------------------------------------------------------

console.log("Answer 3:");
console.log("Objects :");
Student.forEach(function (ele) {
  console.log(ele);
});

//---------------------------------------------------------------------------------------------------

console.log("Answer 4:");
console.log("Students with age less than 30 :");
for (let i = 0; i < Student.length; i++) {
  if (Student[i].age < 30) {
    console.log(Student[i]);
  }
}

console.log("Student who lives in India :");
for (let i = 0; i < Student.length; i++) {
  if (Student[i].country == "India") {
    console.log(Student[i]);
  }
}

//---------------------------------------------------------------------------------------------------
