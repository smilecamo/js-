// 自执行函数

let count = (function() {
  let count = 0;
  return function() {
    return ++count;
  };
})();
console.log(count());
console.log(count());
console.log(count());
