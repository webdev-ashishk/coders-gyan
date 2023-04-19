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

const person = ["nitin", "2", "engineer"];
// console.log(person[0]);
// console.log(person[1]);
// console.log(person[2]);
//----------Array destructuring------------------>
const [name, age, profession] = person;
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
//Note: 1]when we clone object or array
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
