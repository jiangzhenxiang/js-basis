/**
 * 都可以让函数执行并且改变函数里的this
 * //call  参数是依次传入
 * //apply  函数是以数组的形式传和
 * call性能比apply高。 apply源码就是调用的call
 */

Function.prototype.apply = function (obj, args) {
    const context = obj;
    // 增加一个临时函数名（symbol保证唯一性）
    const fn = Symbol();
    // this是函数本身，当前函数
    context[fn] = this;
    // 执行当前函数
    const result = context[fn](...args);
    // 删除函数
    delete context[fn];
    return result;
}
Function.prototype.call = function (obj, ...args) {
    const xxx = Symbol();
    obj[xxx] = this;//this=call  fn2.xxx=call
    const result = obj[xxx](...args);//fn2.call()
    return result;
}
// function fn1() { console.log(1); }
// function fn2() { console.log(2); }//2
// fn1.call.call(fn2);  // 2  相当于fn2.call()执行
// fn2 = this
//fn1.call.call.call.call.call.call.
// call.call(fn2);
//第一次的时间   this=call  context=fn2
//fn2.call
//this=fn2 context=window window.fn2();


function sum(amount1, amount2) {
    console.log(this.age + amount1 + amount2);
}
let obj = { age: 10 };
sum.call(obj, 20, 30);
// sum.apply(obj, [20, 30]);
