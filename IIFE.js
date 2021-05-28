// 自执行函数
// ----- 第一种 数组执行函数输出对应的值
// let count = (function() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// })();
// console.log(count());
// console.log(count());
// console.log(count());

// ------------------第一种
// function foo() {
//   var arr = [];
//   for (var i = 0; i < 10; i++) {
//     arr[i] = (function(n) {
//       return function() {
//         return n;
//       };
//     })(i);
//   }
//   return arr;
// }
// var fooArray = foo();
// console.log(fooArray[0]());
// console.log(fooArray[1]());
// console.log(fooArray[2]());

// ------------------第二种
// function foo() {
//   var arr = [];
//   for (var i = 0; i < 10; i++) {
//     (n => {
//       arr[n] = function() {
//         return n;
//       };
//     })(i);
//   }
//   return arr;
// }
// var fooArray = foo();
// console.log(fooArray[0]());
// console.log(fooArray[1]());
// console.log(fooArray[2]());

// --------------第三张

// function foo() {
//   var arr = [];
//   for (let i = 0; i < 10; i++) {
//     arr[i] = function() {
//       return i;
//     };
//   }

//   return arr;
// }
// var fooArray = foo();
// console.log(fooArray[0]());
// console.log(fooArray[1]());
// console.log(fooArray[2]());
