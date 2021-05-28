// 定义 : 函数套函数

// ----------------------1.返回值,使用函数内部的值

// function foo() {
//   var a = 'Y';
//   return function() {
//     return a;
//   };
// }

// let fooC = foo();
// console.log(fooC());

// ----------------------函数赋值 一种变形 将内部函数赋给外部的变量调用

// let foo1;
// function foo() {
//   var name = 'Y';
//   foo1 = function() {
//     return name;
//   };
// }

// foo();
// console.log(foo1());

// ----------------------函数参数

// var foo = function(fn) {
//   console.log(fn());
// };

// var foo2 = function() {
//   var name = 'Y';
//   var fn = function() {
//     return name;
//   };
//   foo(fn);
// };

// foo2();

// ---------------------IIFE 自执行函数
// var foo = function(fn) {
//   console.log(fn());
// };
// (function() {
//   var name = 'Y';
//   var fn = function() {
//     return name;
//   };
//   foo(fn);
// })();

// ----------------------循环赋值

// function foo() {
//   var arr = [];
//   for (var a = 0; a < 10; a++) {
//     (function(n) {
//       arr[n] = function() {
//         return n;
//       };
//     })(a);
//   }
//   return arr;
// }

// let fooArr = foo();
// console.log(fooArr[0]());
// console.log(fooArr[1]());
// console.log(fooArr[2]());
