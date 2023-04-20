//enhanced object literals
//object literals means all inside the {}
//1] computed property keys

const keyName = "name";
const product = {
  [keyName]: "mobile",
  price: 100,
};
// console.log(product);

//2] computed method definition shorthand
//--------without method defintion shorthand------------------>
const productt = {
  buy: function () {
    console.log("Bought");
  },
};
// console.log(productt);
// productt.buy();

//--------with method defintion shorthand------------------>
const producttt = {
  buy() {
    console.log("Bought");
  },
};

// producttt.buy();

//2] computed property shorthand shorthand
//--------without method defintion shorthand------------------>
const accessToken = "dfhhhafhfhh";
const referenceToken = "fhhidfhhghhf";
const user = {
  accessToken: accessToken, //problem is key and value are same then use only values,
  referenceToken: referenceToken,
};
// console.log(user);
//--------without method defintion shorthand------------------>
const accessTokenn = "dfhhhafhfhh";
const referenceTokenn = "fhhidfhhghhf";
const userr = {
  accessTokenn,
  referenceTokenn,
};
// console.log(user);

// timeStamp:< 44:5sec>/////// Destructuring//////////////////>
const users = {
  fname: "ashish",
  lname: "gpt",
  branch: "cs",
  year: "2023",
};
//-------without object destructuring--------->
const fname = user.fname;
const lname = user.lname;
const branch = user.branch;
const year = user.year;
// console.log(fname);
// console.log(lname);
// console.log(branch);
// console.log(year);
//-------with object destructuring--------->
// const { fname, lname, branch, year } = users;

// console.log(fname);
//-------- we can give aliase name--------------->
/////////////fname changed to fullname because of aliase
const { fname: fullname } = users;
// console.log(fullname);

const Parent = ["nitin", "2", "engineer"];
// console.log(Parent[0]);
// console.log(Parent[1]);
// console.log(Parent[2]);
//----------Array destructuring------------------>
const [name, age, profession] = Parent;
// console.log(name);
// console.log(age);
// console.log(profession);

//-----------------TimeStamp: 52:10sec---------------->
//$$$$$$$$$$$$$$$$$$--Default parameters---$$$$$$$$$$$$$>
//new version image='default.imgage'
const register = (_name, password, image = "default.image") => {
  // const _img = image || test.png;//older way of doing
  // console.log(_name, password, image);
};
// register("rajesh");
// register("rajesh", "123");
// register("rajesh", "123", "test.png");

//-----------------TimeStamp: 55:41sec---------------->
//***************spread operator*********************************** */
//0]spread do cello coppy
//Note: 1]Used when we clone object or array
//      2]We can add newArray element or new object element
//      3]We can override the existing values also
const lang = ["c", "c++", "js", "python"];
//const nlang = [...lang]; //clone
// const nlang = ["theory", ...lang]; //add new array element at start and clone the previous array
const nlang = [, ...lang, "theory"]; //add new array element at end and clone the previous array
// console.log(nlang);

const langObj = {
  p1: "c++",
  p2: "javascript",
  p3: "python",
};
// const _nlang = { ...langObj, p4: "golang" };
const _nlang = { ...langObj, p2: "java" }; //override the p2;
// console.log(_nlang);

//$$$$$$$$$$$$$$$$$$$$$$----Rest(...)-------------------------->
//Note: 1]rest are used using functions
//problem of the following code is we don't know how much argument user's passes here so that we need to increase parameter according
// const addItems = (a, b, c) => {
//   console.log(a + b + c);
// };
// addItems(10, 20, 40);
const addItems = (...item) => {
  // console.log(item);
};
addItems(10, 20, 40);

//TimeStamp: 1hr6sec

//-------------For of loop------------------------------->
// can we used iterable object Array,Obj,string,set,map

//with array
const n = [2, 4, 5, 9];
for (const num of n) {
  // console.log(num);
}
//with string
const str = "javascript";
for (const char of str) {
  // console.log(char);
}
//with object
//Note plain object is not iterable
const obj = {
  name: "ast",
  branch: "cs",
  year: "2016",
};
for (const [key, value] of Object.entries(obj)) {
  // console.log(key, value);
}

///////////////////timestamp: 1hr 22min--------find(array method)-----/////
//Note: when element is found the terminate from the loop
// const usr = [{ name: "rakesh" }, { name: "santosh" }];
// const u = usr.find((search) => {
//   return (search.name === "rakesh");
// });
// console.log(u);
// findIndex
//note: if element is found the index will return
//when element is not found then return -1
const usr = [{ name: "rakesh" }, { name: "santosh" }];
const u = usr.findIndex((search) => {
  // return search.name === "rakesh";
  // return search.name === "santosh";
  // return search.name === "ashish";
});
console.log(u);

// timestamp: 1hr27min:30sec--------Set----------------->
// set is an object in js
// set contain unique elements

const un = new Set();
un.add(10);
un.add(20);
un.add(30);
un.add(10);
un.add(40);
// console.log(un);
// console.log(un.size);
// console.log(un.has(30)); //true(found in set)
// console.log(un.has(50)); //false(not found in set)
//Most Important  used of set method is removing doublicates
const doublicateNum = [10, 20, 10, 20, 30, 40, 30];
const removeDoublicateNum = new Set(doublicateNum);
// console.log(removeDoublicateNum); //return type is set
// console.log(Array.from(removeDoublicateNum)); //return type is array

//--------Timestamp: 1hr:31min:20sec-----------Map method-------------->
//Map method is implementation of hashtables
//Used for fast lookup (fast search)
const urls = new Map();
urls.set("dev", "dev.exam.com");
urls.set("prod", "prod.exam.com");
// console.log(urls);
// console.log(urls.size);
// console.log(urls.get("dev"));
// console.log(urls.get("prod"));

for (const url of urls) {
  // console.log(url);
}

for (const [key, value] of urls) {
  // console.log(key, value);
}
//we can do same thing without using map but some issue are there!
// 1. Order problem(not maintain order of element stores but map did)
// 2. plain object is not iterable but map did
// 3. Fast insert comparet to object

//<----TimeStamp: 1hr: 41min: 10sec-----------Classes------------------------>
// when classes are not present then we used cunstructore to create a class
// Too much complex to use inheritance!

// function Parent(name) {
//   this.name = name;
// }
// const rakesh = new Parent("rakesh");
// const nitish = new Parent("nitish");
// const santosh = new Parent("santosh");
// console.log(rakesh);
// console.log(nitish);
// console.log(santosh);

// After es6 cames we create classes in like this

class Parentt {
  name;
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("parentt called");
  }
}
const rakesh = new Parentt("rakesh");
const nitish = new Parentt("nitish");
const santosh = new Parentt("santosh");
console.log(rakesh);
console.log(nitish);
console.log(santosh);
//Note: greet fun is availabe for every object of Parent class
console.log(rakesh.greet());
console.log(nitish.greet());
console.log(santosh.greet());

//extends key word just like public in cpp
//using extends key word we do inheritance
// we can do overiding here also
class Child extends Parentt {
  att = "happy";
  greet() {
    console.log("child called!");
  }
}
const ashish = new Child("Ashish");
console.log(ashish);
console.log(ashish.greet());
