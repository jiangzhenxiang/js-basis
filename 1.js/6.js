/**
 * 执行上下文生命周期
 * 生命周期有两个阶段
 * 1.创建阶段
 * 创建变量对象
 * 确定作用域链
 * 确定this指向
 * 
 * 2.执行阶段
 * 变量赋值
 * 函数赋值
 * 代码执行
 */

/**
 * 变量对象
 * 变量对象会保存变量声明(var)、函数参数(arguments)、函数定义(function)
 * 1、变量对象会首先获得函数的参数变量和值
 * 2、获取所有用function进行的函数声明，函数名为变量对象的属性名，值为函数对象,如果属性已经存在，值会用新值覆盖
 * 3、再依次所有的var关键字进行的变量声明，每找到一个变量声明，就会在变量对象上建一个属性，值为undefined,如果变量名已经存在，则会跳过，并不会修改原属性值,let声明的变量并不会在此阶段进行处理
 * 函数声明优先级更高，同名的函数会覆盖函数和变量，但同名var变量并不会覆盖函数.执行阶段重新赋值可以改变原有的值
 */

/**
 * 执行上下文对象的VO栈
 */
function one() {
    var a = 1;
    var two = () => {
        var b = 2;
        var three = () => {
            var c = 3;
            debugger;
            console.log(a, b, c);
        };
        three();
    };
    two();
}
one();
//作用域就是一个一个上下文吗
//
var executeContextStack = [];
//全局上下文
var globalExecuteContext = {
    VO: {
        one: '()=>{'
    }
};
executeContextStack = [globalExecuteContext];
var oneExecuteContext = {
    VO: {
        a: 1,
        two: '()=>{}'
    }
};
executeContextStack = [oneExecuteContext, globalExecuteContext];
var twoExecuteContext = {
    VO: {
        b: 2,
        three: '()=>{}'
    }
};
executeContextStack = [,
    twoExecuteContext,
    oneExecuteContext,
    globalExecuteContext
];
var threeExecuteContext = {
    VO: {
        c: 3
    }
};
executeContextStack = [
    threeExecuteContext,
    twoExecuteContext,
    oneExecuteContext,
    globalExecuteContext
];
//console.log(a, b, c);
//变量的值是如何查找的
//console.log(a,b,c);
//作用域链的查找过程
function getVariableValue(varName) {
    for (let i = 0; i < executeContextStack.length; i++) {
        if (varName in executeContextStack[i].VO) {
            return executeContextStack[i].VO[varName];
        }
    }
}
console.log(
    getVariableValue('a'),
    getVariableValue('b'),
    getVariableValue('c')
);
