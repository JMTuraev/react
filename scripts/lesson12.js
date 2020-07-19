let options = {
  name: "jafar",
  age: 25,
  color: {
    border: "red",
    bg: "blue",
  },
};
let personalMovieDB=Object.create(options);


let { border, bg } = options.color;
console.log(border);

let keys = Object.keys(options);
console.log(keys.length);
console.log(keys);

for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`svoystsv ${i} >>>> ${options[key][i]}`);
    }
  } else {
    console.log(`svoystva ${key} >>> ${options[key]}`);
  }
}

// massiv
let arr = [1, 4, 6, 234, 5, 6, 765, 33];

for (let val of arr) {
  // for ... of  faqat massivda ishlaydi
  console.log(val);
}

arr.forEach(function (item, i) {
  console.log(`${i} : ${item}`);
});


let a=1, b=a;
b=b+4;

console.log(a, b);

// let obj={
//     a:1,
//     b:2
// };

// let copy=obj;  // ssilka
// copy.b=25;
// console.log(obj, copy);

// let lastObj={
//     a:5,
//     b:40,
//     c:{
//         ca:100,
//         cb:150
//     }
// }


// function copy(Obj){
//     let copyObj={};
//     for (let key in Obj){
//         copyObj[key]=Obj[key];
//     }
//     return copyObj;
// };

// let newObj=copy(lastObj);
// newObj.a=45;
// newObj.b=-10000;
// newObj.c.ca=-10000;

// console.log(newObj);
// console.log(lastObj);


// spread operator

const video=['pornhub', 'xhamster', 'beeg'],
        user=['admin', 'moderator', 'usesr'],   
        all=[...video, ...user, 'jafar'];

        console.log(all);


        let users={
            log:'enter',
            setting:'instrument'
        };
        let admin=Object.create(users);

        console.log(admin.log);