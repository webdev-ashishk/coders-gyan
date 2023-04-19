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

// timeStamp: 44:5sec              Destructuring
const users = {
  fname: "ashish",
  lname: "gpt",
  branch: "cs",
  year: "2023",
};
//-------without object destructuring--------->
// console.log(users.fname);
// console.log(users.lname);
// console.log(users.branch);
// console.log(users.year);
//-------with object destructuring--------->
// const { fname, lname, branch, year } = users;
// console.log(fname);
//-------- we can give aliase name--------------->
/////////////fname changed to fullname because of aliase
const { fname: fullname, lname } = users;
console.log(fullname);
