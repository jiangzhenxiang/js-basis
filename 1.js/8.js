/**
 * 当执行one的时候，会创建一个执行上下文 
 * 编译阶段
 *   创建VO 
 *      1. 处理参数，把参数放入VO
 *      2. 扫描所有代码，找出function声明，从上往下依次执行 在编译阶段，会处理所有的函数声明,如果有重复的声明
 * 后面会覆盖前面的声明
 *      3.扫描var关键字 var是不赋值，只声明，值是undefined 
 *      4.在编译阶段不会处理let变量的，let的变量也不会放在VO里
 *  编译完成
 *  开始执行阶段 
 *   
 * @param {*} m 
 */
//one[[SCOPE]]=[globalEC.VO]
/* function one(m, n) {
    //let oneVO={m:1,,n:2,fn:()=>2,a:undefined,b:undefined}
    //let oneEC={VO,this:window,scopeChain:[oneVO,globalEC.VO]}
    console.log(m, n);//1,2
    var a = 1;
    function fn() {
        return 1;
    }
    function fn() {
        return 2;
    }
    var b = 2;
    var b = 3;
    let c = 4;
    console.log(a, b, c, fn);
}
one(1, 2);
 */
// globalVO={fn:()=>new_fn,a:1}
/* var a = 1;
function fn(m) { console.log('fn'); }
function fn(m) { console.log('new_fn'); }
function a() { console.log('fn_a'); }
console.log(a);//1
fn(1);//new_fn
var fn = 'var_fn';
console.log(fn);//var_fn */
/**
 * VO
 * Local
 * this
 */
/* function one(m) {
    var a=1;
    debugger;
    console.log(this);//window
    function two() {;
        console.log(a,'two');
    }
    two();
}
one(1);
let globalVo = { one: 'fn one' };
let globalEC = { VO: globalVo, this: window, scopeChain: [globalVo] };
let ECStack = [];
ECStack.push(globalEC);
//===============================
let oneVo = { two: 'fn two' };
let oneEC = { VO: oneVo, this: window, scopeChain: [oneVo, globalVo] };
ECStack.push(oneEC);
//当one开始的时候，因为oneEC处于执行栈的顶端，这个时候，oneVo就会成为AO
//Activation Object oneVo.this = window
let twoVo = {};
let twoEC = { VO: twoVo, this: window, scopeChain: [twoVo, oneVo, globalVo] };
ECStack.push(twoEC);
//VO=>AO oneVo.this=window
ECStack.pop(twoEC);
ECStack.pop(oneEC); */

function one() { //老的实现里，three one a,那么  oneVO整个不能销毁
    //新的实现里，只要保留引用的，
    var a = 1;
    var b = 2;

    function two() {
        function three(callback) {
            console.log(a);
        }
        return three;
    }
    return two;
}
one();
//作用域链是在创建函数的时候确定的
//callback调用栈是在调用的时候确定的

/**
 * 当从全局变量出发，无法引用到一个对象的时候，会被回收
 */



/**  
 * 闭包
 * 闭包有两部分组成，一个是当前的执行上下文A，一个是在该执行上下文中创建的函数B
 * 当B执行的时候引用了当前执行上下文A中的变量就会产出闭包
 * 当一个值失去引用的时候就会会标记，被垃圾收集回收机回收并释放空间
 * 闭包的本质就是在函数外部保持内部变量的引用，从而阻止垃圾回收
 * 调用栈的并不会影响作用域链,函数调用栈是在执行时才确定，而作用域规则是在代码编译阶段就已经确定了
 * 
 * MDN定义:闭包是指这样的作用域foo,它包含了一个函数fn，这个函数fn1可以调用被这个作用域所封闭的变量a、函数等内容
 */
function one() {
    var a = 1;
    var b = 2;

    function two() {
        var c = 3;
        debugger;
        console.log(a, c);
    }
    return two;
}
let two = one();
two();
