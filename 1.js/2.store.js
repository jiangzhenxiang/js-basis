// 内存区域
// 栈也是是存放数据的一种内存区域
// 程序运行的时候，需要内存空间存放数据。一般来说,系统会划分出两种不同的内存空间：
// 一种叫做stack(栈) ，另一种叫做heap(堆)
// stack是有结构的，每个区块按照一定次序存放，可以明确知道每个区块的大小
// heap是没有结构的，数据可以任意存放。因此，stack的寻址速度要快于heap


// js中 基本数据类型放在stack栈中，引用数据类型放在heap堆中

/**
 * JS数据类型 
 * 基本数据类型 Number Null Undefined Boolean String Symbol
 * 引用数据类型 Object Array Regexp Object
 * JS属于弱数据类型  不要明显明显的区分
 */
var a = 1;
var b = 2;
var c = {
    name: 'jzx',
    age: 10
}
