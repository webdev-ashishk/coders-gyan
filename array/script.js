// console.log("love");
/*
const arr = ["love", "nitin", "gupta"];
console.log(arr.length);
arr.push("akanksha"); //insert at last
arr.unshift("ashishk"); //insert at start
//arr.pop(); //delete at the end and pop will return last element of an array
arr.shift(); //delete at the start and shift will return first element of an array
console.log(arr.pop());
console.log(arr.shift());
console.log(arr); */

const actors = [
  {
    name: "ashishk",
    color: "red",
    payment: 100,
  },
  {
    name: "nitink",
    color: "red",
    payment: 200,
  },
  {
    name: "palak",
    color: "red",
    payment: 300,
  },
  {
    name: "bitu",
    color: "red",
    payment: 400,
  },
];

//---------iterate through for loop---------------------------->
// console.log(actors.length);
// for (let i = 0; i < actors.length; i++) {
//   // console.log(i);
//   // console.log(actors[i]);
//   actors[i].payment = actors[i].payment - 50;
// }
// console.log(actors);
//----------iterate through for each loop--------------------------->
// actors.forEach((actor) => {
//   actor.payment = actor.payment - 50;
// });
// console.log(actors);

//----------iterate through for each of loop--------------------------->
// for (let actor of actors) {
//   actor.payment = actor.payment - 50;
// }
// console.log(actors);
//------------------Learning filter method---------------------------->
const student = [
  {
    name: "ashish",
    marks: "80",
    branch: "cs",
  },
  {
    name: "karan",
    marks: "60",
    branch: "cs",
  },
  {
    name: "nitish",
    marks: "35",
    branch: "cs",
  },
];

// const failed = student.filter((std) => {
//   // console.log(std);
//   // return false;
//   //-------first approach------------>
//   if (std.marks < 45) {
//     return true;
//   } else {
//     return false;
//   }
//   //-----we can use ternary operator here also------->
//   // ---------next way to do ----------------->
//   // return std.marks < 45;
// });
//console.log(failed);

// Best way to do previous filter
const failed = student.filter((std) => std.marks < 45);
// console.log(failed);

//------------------Learning map method---------------------------->
const users = [
  {
    fname: "ashishk",
    lname: "gpt",
  },
  {
    fname: "nitink",
    lname: "gpt",
  },
];
// users.map((user) => {
//   console.log(user);
// });
const u = users.map((user) => {
  // console.log(user);
  return {
    fullname: `${user.fname} ${user.lname}`,
  };
});
// console.log(u);
// console.log(users);

//------------------Learning reduce method---------------------------->

const movies = [
  {
    name: "starwar",
    budget: 100,
  },
  {
    name: "iron-man",
    budget: 200,
  },
  {
    name: "Avtar",
    budget: 300,
  },
];
// console.log(movies);
let total = 0;
movies.forEach((m) => {
  total += m.budget;
});

// console.log(total);
// apply forEach You can do it better way also
// acc is just like total

const totall = movies.reduce((acc, m) => {
  acc = acc + m.budget;
  return acc;
}, 0);

// console.log(totall);
//------------------Learning find method---------------------------->

const search = movies.find((s) => {
  return s.budget === 200;
});
// console.log(search);
//------------------Learning sort method---------------------------->
const myarr = ["ashish", "banana", "zebra", "dog", "elephand"];
// console.log(myarr.sort());

//------------------Learning slice method---------------------------->
//note splice method delete the element of an array
myarr.splice(2, 1);
// console.log(myarr);

const admins = [2, 4, 5, 7];
const user = {
  name: "xyz",
  id: 7,
};
// console.log(admins.indexOf(user.id));
const isAdmin = admins.indexOf(user.id) > -1;
// console.log(isAdmin);

//------------------Learning includes method---------------------------->
//note: instead of splice you can use includes
console.log(admins.includes(user.id));
