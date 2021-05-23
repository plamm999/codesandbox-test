/**
 * const letの変数宣言
 */

// var var1 = "var変数";
// console.log(var1);

// var1 = "変数を上書き";
// console.log(var1);

// var var1 = "変数を再宣言";
// console.log(var1);

//

// const val3 = "定数を宣言";
// console.log(val3);

// val3 ="定数を上書き";

// const val3 ="再宣言";

// constで定義した帯ジェクトは変更可能
// const val4 = {
//   name: "ゆかり",
//   age: 33
// };
// val4.name = "田中";
// val4.address = "大阪";
// console.log(val4);

// constで定義した配列は変更可能

// アロー関数
const func1 = function func1(str) {
  return str;
};
console.log(func1("テスト"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("テスト２"));

const func3 = (str) => str;
console.log("テスト３");

const func4 = (num1, num2) => num1 + num2;
console.log(func4(10, 20));
