//在编译阶段，不会去编译函数内部的代码
debugger
function Foo() {
    getName = function () {
        console.log(1);
    }
    return this;
}
Foo.getName = function () {
    console.log(2);
}
Foo.prototype.getName = function () {
    this.name = 'FOO'
    console.log(3);
}
var getName = function () {
    console.log(4);
}

function getName() {
    console.log(5);
}
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
let result = new new Foo().getName();
console.log('result', result);

// 结果
// 2
// 4
// 1
// 1
// 2
// 3
// 3

// 解析
// 编译阶段和执行阶段

// 编辑阶段
//  1、扫描所有的function函数生命
//  VO：1、foo: getname =》1  2、 getName => 5
//  2、扫描var关键字 但不赋值
// （已有getname 所以不再声明16行var getname）

