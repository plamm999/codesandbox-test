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

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
