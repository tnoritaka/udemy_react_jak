/**
 *
 */
// const myProfile = {
//   name: "じゃけえ",
//   age: 28
// };
// const myProfile2 = {
//   name2: "じゃけえ2",
//   age2: 282
// };

// const message = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const { name2, age2 } = myProfile2;
// const message3 = `名前は${name2}です。年齢は${age2}です。`;
// console.log(message3);

// const myProfile = ["じゃけえ", 28];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [nam] = myProfile;
// const message4 = `私の名前は${nam}です。`;
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん!`);
// sayHello();

// const arr1 = [1,2];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1, num2, arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// arr7[2] = 100;
// console.log(arr5);

/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["田中", "山田", "じゃけえ"];
// nameArr.forEach(name => console.log(name));

// const nameArr2 = nameArr.map((name,idx) => {
//   return `idx:${idx} name:${name}`;
// });

// console.log(nameArr2);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけえ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

/**
 * 三項演算子
 */
// const num = "1300";
// const newNum = num.toLocaleString();
// console.log(newNum);

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください🧐";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100over!🤫" : "inner😀";
// };

// console.log(checkSum(100, 100));

const num = 0;
// const fee = num || "未設定😀";
const fee = 1;
const res = num && fee;
if (res) {
  console.log("true😀");
} else {
  console.log("false🤫");
}
