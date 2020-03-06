/*** 
 * JS中作用域有：全局作用域、函数作用域。没有块作用域的概念。ECMAScript 6(简称ES6)中新增了块级作用域
 * 块作用域由 { } 包括,if语句和for语句里面的{ }也属于块作用域
 */

 /** let
  * 
  */

{
    let i = 1;
    console.log(i); {
        let i = 2;
        console.log(i);
    }
}
//函数本身的作用域在其所在的块级作用域之内
'use strict'

function fn() {
    console.log("out");
}
(function () {
    if (false) {
        function fn() {
            console.log("in");
        }
    }
    fn();
}());

function a() {
    var m;
}

function b() {
    //VO={n:undefined}
    console.log(n);
    var n = 10;
    var n = 20;
    console.log(n);
}
b();


{
    let a = 10; {
        console.log(a);
        let a = 20;
    }
}


{
    console.log(1);
    let a = 10;
    let a = 20;
}
